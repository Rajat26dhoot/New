// SafeDep API Client Configuration using ConnectRPC HTTP endpoints

interface SafeDepConfig {
    tenantId: string;
    apiKey: string;
    baseUrl: string;
}

class SafeDepClient {
    private config: SafeDepConfig;

    constructor() {
        this.config = {
            tenantId: process.env.SAFEDEP_TENANT_ID || '',
            apiKey: process.env.SAFEDEP_API_KEY || '',
            baseUrl: 'https://api.safedep.io',
        };
    }

    private getHeaders(): HeadersInit {
        return {
            'Content-Type': 'application/json',
            'Authorization': this.config.apiKey,
            'x-tenant-id': this.config.tenantId,
        };
    }

    private mapEcosystem(ecosystem: string): string {
        const map: Record<string, string> = {
            'npm': 'ECOSYSTEM_NPM',
            'pypi': 'ECOSYSTEM_PYPI',
            'go': 'ECOSYSTEM_GO',
            'maven': 'ECOSYSTEM_MAVEN',
            'cargo': 'ECOSYSTEM_CARGO',
        };
        return map[ecosystem.toLowerCase()] || 'ECOSYSTEM_UNKNOWN';
    }

    async fetchInsights(ecosystem: string, name: string, version: string) {
        const url = `${this.config.baseUrl}/safedep.services.insights.v2.InsightService/GetPackageVersionInsight`;

        const payload = {
            packageVersion: {
                package: {
                    ecosystem: this.mapEcosystem(ecosystem),
                    name: name,
                },
                version: version,
            },
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(payload),
                next: { revalidate: 3600 },
            });

            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`Insights API request failed: ${response.statusText} (${response.status})`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching insights:', error);
            throw error;
        }
    }

    async fetchMalysis(ecosystem: string, name: string, version: string) {
        const url = `${this.config.baseUrl}/safedep.services.malysis.v1.MalwareAnalysisService/QueryPackageAnalysis`;

        const payload = {
            target: {
                packageVersion: {
                    package: {
                        ecosystem: this.mapEcosystem(ecosystem),
                        name: name,
                    },
                    version: version,
                },
            },
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.getHeaders(),
                body: JSON.stringify(payload),
                next: { revalidate: 3600 },
            });

            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error(`Malysis API request failed: ${response.statusText} (${response.status})`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching malysis:', error);
            throw error;
        }
    }

    isConfigured(): boolean {
        return !!this.config.tenantId && !!this.config.apiKey;
    }
}

export const safedepClient = new SafeDepClient();
