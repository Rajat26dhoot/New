'use server';

import { safedepClient } from '../api/safedep-client';
import { PackageData, VulnerabilityData, VersionInfo, LicenseInfo } from '../api/types';
import { InsightsResponse, MalysisResponse } from '../api/schema';

// Helper to calculate risk level from score or string
function mapRiskLevel(risk: string | undefined): 'Low' | 'Medium' | 'High' | 'Critical' | 'Unspecified' {
    if (!risk) return 'Unspecified';
    const r = risk.toUpperCase();
    if (r.includes('CRITICAL')) return 'Critical';
    if (r.includes('HIGH')) return 'High';
    if (r.includes('MEDIUM')) return 'Medium';
    if (r.includes('LOW')) return 'Low';
    return 'Unspecified';
}

function formatDate(dateStr: string | undefined): string {
    if (!dateStr) return 'N/A';
    try {
        return new Date(dateStr).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC',
        });
    } catch (e) {
        return dateStr;
    }
}

export async function getPackageData(
    ecosystem: string,
    name: string,
    version: string
): Promise<PackageData | null> {
    try {
        if (!safedepClient.isConfigured()) {
            throw new Error('SafeDep API is not configured.');
        }

        const [insightsRaw, malysisRaw] = await Promise.all([
            safedepClient.fetchInsights(ecosystem, name, version) as Promise<InsightsResponse>,
            safedepClient.fetchMalysis(ecosystem, name, version) as Promise<MalysisResponse>,
        ]);

        if (!insightsRaw && !malysisRaw) {
            console.log('--- DEBUG: NO RAW DATA ---');
            return null;
        }

        // Check if we actually got insight data (API might return 200 with empty insight for invalid packages)
        const i = insightsRaw?.insight;
        const hasInsights = i && Object.keys(i).length > 0;
        const hasMalysis = malysisRaw?.report;

        if (!hasInsights && !hasMalysis) {
            return null;
        }
        const project = i?.projectInsights?.[0];
        const scorecard = project?.scorecard;

        // Calculate vulnerabilities count from insights or malysis
        const vulnCount = i?.vulnerabilities?.length || 0;

        // License from insights
        const licenseId = i?.licenses?.licenses?.[0]?.licenseId || 'Unknown';

        // --- Transform Malysis Data ---
        const m = malysisRaw?.report;

        // Map Vulnerabilities
        // We prefer insights vulnerabilities if available, or we could merge them.
        // The previous Malysis mock had vulnerabilities in MalysisData, but the API has them in Insights.
        // Let's map from InsightsResponse.insight.vulnerabilities to VulnerabilityData
        const vulnerabilities: VulnerabilityData[] = (i?.vulnerabilities || []).map(v => ({
            id: v.id.value,
            summary: v.summary,
            risk_level: mapRiskLevel(v.severities?.[0]?.risk),
            published: formatDate(v.publishedAt),
            modified: formatDate(v.modifiedAt),
            avatars: v.aliases?.map(a => a.value.substring(0, 1)) || [], // Simple avatar generation
        }));

        // Map Versions
        const versions: VersionInfo[] = (i?.availableVersions || []).map(v => ({
            version: v.version,
            published_on: formatDate(v.publishedAt),
            is_latest: v.version === insightsRaw?.packageVersion?.version,
        })).sort((a, b) => new Date(b.published_on).getTime() - new Date(a.published_on).getTime());

        // Map Licenses (Detailed)
        const licenses: LicenseInfo[] = (i?.licenses?.licenses || []).map(l => ({
            license_id: l.licenseId,
            license_name: l.licenseId, // API might not give full name here
            reference_url: `https://spdx.org/licenses/${l.licenseId}.html`,
        }));

        return {
            insights: {
                package: {
                    name: insightsRaw?.packageVersion?.package?.name || name,
                    version: insightsRaw?.packageVersion?.version || version,
                    ecosystem: insightsRaw?.packageVersion?.package?.ecosystem || ecosystem,
                    analyzed_at: m?.analyzedAt ? new Date(m.analyzedAt).toLocaleString() : undefined,
                    source_url: project?.project?.url,
                    sha256: m?.target?.sha256,
                    confidence: m?.inference?.confidence,
                },
                version: insightsRaw?.packageVersion?.version || version,
                vulnerabilities_count: vulnCount,
                openssf_scorecard: scorecard ? {
                    score: scorecard.score,
                    rating: `${scorecard.score}/10`
                } : undefined,
                license: licenseId,
                ecosystem: insightsRaw?.packageVersion?.package?.ecosystem || ecosystem,
                summary: m?.inference?.summary || m?.inference?.details,
                details: m?.inference?.details,
                verification_record: malysisRaw?.verificationRecord,
                note: undefined,
            },
            malysis: {
                vulnerabilities,
                versions,
                licenses,
            },
        };

    } catch (error) {
        console.error('Error fetching package data:', error);
        throw error; // Propagate error to trigger Error Boundary
    }
}
