// TypeScript types for SafeDep API responses based on ConnectRPC

export interface PackageIdentifier {
  ecosystem: string;
  name: string;
  version: string;
}

// Common Types
export interface SafeDepPackage {
  ecosystem: string;
  name: string;
}

export interface SafeDepPackageVersion {
  package: SafeDepPackage;
  version: string;
}

// Insights API Types
export interface InsightDependency {
  package: SafeDepPackage;
  version: string;
}

export interface InsightVulnerability {
  id: {
    type: string;
    value: string;
  };
  summary: string;
  aliases?: { type: string; value: string }[];
  related?: { value: string }[];
  severities?: {
    type: string;
    score: string;
    risk: string;
  }[];
  publishedAt: string;
  modifiedAt: string;
}

export interface ScorecardCheck {
  name: string;
  score: number;
  reason: string;
  documentation: {
    url: string;
    description: string;
  };
}

export interface ProjectInsight {
  project: {
    type: string;
    name: string;
    url: string;
  };
  stars: string;
  forks: string;
  issues: {
    open: string;
  };
  scorecard: {
    date: string;
    score: number;
    repo: {
      name: string;
      commit: string;
    };
    checks: ScorecardCheck[];
  };
}

export interface AvailableVersion {
  version: string;
  publishedAt: string;
}

export interface InsightsResponse {
  packageVersion: SafeDepPackageVersion;
  insight: {
    dependencies: InsightDependency[];
    vulnerabilities: InsightVulnerability[];
    projectInsights: ProjectInsight[];
    licenses: {
      licenses: { licenseId: string }[];
    };
    packagePublishedAt: string;
    registries: string[];
    availableVersions: AvailableVersion[];
  };
}

// Malysis API Types
export interface FileSystemEntry {
  key: string;
  origin: string;
  sha256: string;
  derivedExtension: string;
  size: string;
}

export interface MalysisReport {
  packageVersion: SafeDepPackageVersion;
  target: {
    origin: string;
    sha256: string;
  };
  fileSystem: {
    files: FileSystemEntry[];
  };
  analyzedAt: string;
  inference: {
    confidence: string;
    details: string;
    summary: string;
  };
  reportId: string;
  packageMetrics?: {
    downloads?: {
      daily: string;
      weekly: string;
      monthly: string;
      total: string;
      updatedAt: string;
    };
    maintainersCount: string;
  };
  publishers?: {
    name: string;
    email: string;
  }[];
}


export interface VerificationRecord {
  isSafe: boolean;
  reason: string;
  extraAnalysis: string;
  referenceUrls?: string[];
}

export interface MalysisResponse {
  analysisId: string;
  status: string;
  report: MalysisReport;
  verificationRecord?: VerificationRecord;
}

// Unified App Data Type
export interface PackageData {
  insights: InsightsResponse;
  malysis: MalysisResponse;
}
