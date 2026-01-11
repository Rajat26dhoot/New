import { PackageMetadata } from '@/lib/api/types';
import { Github, Package } from 'lucide-react';

interface PackageHeaderProps {
    metadata: PackageMetadata;
}

export function PackageHeader({ metadata }: PackageHeaderProps) {
    return (
        <div className="mb-4 space-y-2">
            <div className="flex items-center gap-3">
                <div className="p-1 rounded-md border-2 border-[#E0E1E6]">
                    <Github className="w-5 h-5" />
                </div>
                <div>
                    <h1 className="text-lg font-bold flex items-center gap-2 text-[#1C2024]">
                        {metadata.name}@{metadata.version}
                    </h1>
                </div>
            </div>

            <div className="text-xs text-[#62748E] space-y-1">
                <p>
                    Analysed at <span className="text-[#020618]">{metadata.analyzed_at || 'N/A'}</span>
                </p>
                <p>
                    Source{' '}
                    <a
                        href={metadata.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#020618] hover:underline break-all"
                    >
                        {metadata.source_url}
                    </a>
                </p>
                {metadata.sha256 && (
                    <p className="font-mono">
                        SHA256 <span className="text-[#020618]">{metadata.sha256}</span>
                    </p>
                )}
                {metadata.confidence && (
                    <p className="font-mono">
                        Confidence <span className="text-[#020618]">{metadata.confidence.replace('CONFIDENCE_', '')}</span>
                    </p>
                )}
            </div>
        </div>
    );
}
