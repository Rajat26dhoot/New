// TypeScript types for UI Components (Application Model)

export interface PackageMetadata {
  name: string;
  version: string;
  ecosystem: string;
  analyzed_at?: string;
  source_url?: string;
  sha256?: string;
  confidence?: string;
}

export interface VulnerabilityData {
  id: string;
  summary: string;
  risk_level: 'Low' | 'Medium' | 'High' | 'Critical' | 'Unspecified';
  published: string;
  modified: string;
  avatars?: string[];
}

export interface VersionInfo {
  version: string;
  published_on: string;
  is_latest?: boolean;
}

export interface LicenseInfo {
  license_id: string;
  license_name: string;
  reference_url: string;
}

export interface OpenSSFScorecard {
  score: number;
  rating: string;
}


export interface VerificationRecord {
  isSafe: boolean;
  reason: string;
  extraAnalysis: string;
  referenceUrls?: string[];
}

export interface InsightsData {
  package: PackageMetadata;
  version: string;
  vulnerabilities_count: number;
  openssf_scorecard?: OpenSSFScorecard;
  license?: string;
  ecosystem: string;
  summary?: string;
  verification_record?: VerificationRecord;
  details?: string;
  note?: string;
}

export interface MalysisData {
  vulnerabilities: VulnerabilityData[];
  versions: VersionInfo[];
  licenses: LicenseInfo[];
}

export interface PackageData {
  insights: InsightsData;
  malysis: MalysisData;
}
