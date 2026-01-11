import { PackageData } from '@/lib/api/types';

interface OverviewTabProps {
    data: PackageData['insights'];
}

export function OverviewTab({ data }: OverviewTabProps) {
    const parseAndRenderContent = (content: string | undefined | null, fallback: string) => {
        if (!content) return <p>{fallback}</p>;

        const noteMarker = "**Note:** *This report is updated by a verification record*";

        if (content.includes(noteMarker)) {
            const rest = content.replace(noteMarker, "").trim();
            return (
                <div className="space-y-2">
                    <p>
                        <span className="font-bold text-[#62748E]">Note: </span>
                        This report is updated by a verification record
                    </p>
                    <p>{rest}</p>
                </div>
            );
        }

        return <p>{content}</p>;
    };

    return (
        <div className="space-y-8 py-4">
            {/* Summary Section */}
            <section>
                <div className="border-l-4 border-[#009689] pl-4 py-1 ml-10">
                    <h3 className="text-base font-semibold mb-2">Summary</h3>
                    <div className="text-sm text-[#62748E] space-y-2">
                        <p>This analysis was performed using vet and SafeDep Cloud Malicious Package Analysis. Integrate with GitHub using vet-action GitHub Action.</p>
                        {parseAndRenderContent(data.summary, 'No summary available.')}
                    </div>
                </div>
            </section>

            {/* Verification Record Section */}
            <section>
                <div className="border-l-4 border-[#E2E8F0] pl-4 py-1 ml-10">
                    <h3 className="text-base font-semibold mb-2">Verification Record</h3>
                    <p className="text-sm text-[#62748E]">
                        {data.verification_record?.extraAnalysis || 'No verification record available.'}
                    </p>
                </div>
            </section>

            {/* Details Section */}
            <section>
                <div className="border-l-4 border-[#E2E8F0] pl-4 py-1 ml-10">
                    <h3 className="text-base font-semibold mb-2 ">Details</h3>
                    <div className="text-sm text-[#62748E] leading-relaxed">
                        {parseAndRenderContent(data.details, 'No details available.')}
                    </div>
                </div>
            </section>
        </div>
    );
}
