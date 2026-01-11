import { Card, CardContent } from '@/components/ui/card';
import { PackageData } from '@/lib/api/types';
import { AlertCircle, Box, FileText, Globe, ShieldCheck } from 'lucide-react';

interface MetricsCardsProps {
    data: PackageData['insights'];
}

export function MetricsCards({ data }: MetricsCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
            {/* Version Card */}
            <Card className="border-[#E2E8F0]">
                <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md border border-[#E2E8F0]">
                                <Box className="w-3 h-3 text-[#009688]" />
                            </div>
                            <span className="text-xs font-medium text-[#62748E]">Version</span>
                        </div>
                        <div className="text-lg font-bold text-[#020618] pt-2">{data.version}</div>
                    </div>
                </CardContent>
            </Card>

            {/* Vulnerabilities Card */}
            <Card className="border-[#E2E8F0]">
                <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5  rounded-md border border-[#E2E8F0]">
                                <AlertCircle className="w-3 h-3 text-[#D32F2F]" />
                            </div>
                            <span className="text-xs font-medium text-[#62748E]">Vulnerabilities</span>
                        </div>
                        <div className="text-lg font-bold text-[#020618] pt-2">{data.vulnerabilities_count}</div>
                    </div>
                </CardContent>
            </Card>

            {/* OpenSSF Scorecard Card */}
            <Card className="border-[#E2E8F0]">
                <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md border border-[#E2E8F0]">
                                <ShieldCheck className="w-3 h-3 text-[#009688]" />
                            </div>
                            <span className="text-xs font-medium text-[#62748E]">OpenSSF Scorecard</span>
                        </div>
                        <div className="text-lg font-bold text-[#009688] pt-2">
                            {data.openssf_scorecard?.rating || 'N/A'}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* License Card */}
            <Card className="border-[#E2E8F0]">
                <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md border border-[#E2E8F0]">
                                <FileText className="w-3 h-3 text-[#009688]" />
                            </div>
                            <span className="text-xs font-medium text-[#62748E]">License</span>
                        </div>
                        <div className="text-lg font-bold text-[#020618] truncate  pt-2" title={data.license}>
                            {data.license}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Ecosystem Card */}
            <Card className="border-[#E2E8F0]">
                <CardContent className="p-3">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-md border border-[#E2E8F0]">
                                <Globe className="w-3 h-3 text-[#009688]" />
                            </div>
                            <span className="text-xs font-medium text-[#62748E]">Ecosystem</span>
                        </div>
                        <div className="text-lg font-bold text-[#020618] pt-2">{data.ecosystem.replace('ECOSYSTEM_', '')}</div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
