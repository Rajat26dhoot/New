import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { VulnerabilityData } from '@/lib/api/types';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

interface VulnerabilitiesTabProps {
    vulnerabilities: VulnerabilityData[];
}

export function VulnerabilitiesTab({ vulnerabilities }: VulnerabilitiesTabProps) {
    const getRiskBadgeColor = (risk: string) => {
        switch (risk.toLowerCase()) {
            case 'critical':
                return 'bg-red-100 text-red-800 hover:bg-red-100';
            case 'high':
                return 'bg-orange-100 text-orange-800 hover:bg-orange-100';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
            case 'low':
                return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
            default:
                return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
        }
    };

    const getRiskIcon = (risk: string) => {
        switch (risk.toLowerCase()) {
            case 'critical':
            case 'high':
                return <AlertTriangle className="w-3 h-3 mr-1" />;
            default:
                return <ShieldAlert className="w-3 h-3 mr-1" />;
        }
    };

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="">
                        <TableHead className="w-[180px] text-xs">Vulnerability ID</TableHead>
                        <TableHead className="text-xs">Summary</TableHead>
                        <TableHead className="w-[140px] text-xs">Risk</TableHead>
                        <TableHead className="w-[120px] text-xs">Published</TableHead>
                        <TableHead className="w-[120px] text-xs">Modified</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {vulnerabilities.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-gray-500 text-xs">
                                No vulnerabilities found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        vulnerabilities.map((vuln) => (
                            <TableRow key={vuln.id}>
                                <TableCell className="text-[#020618] text-xs">
                                    {vuln.id}
                                </TableCell>
                                <TableCell className="text-[#020618] text-xs">{vuln.summary}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={`border-0 text-xs ${getRiskBadgeColor(vuln.risk_level)}`}
                                    >
                                        {getRiskIcon(vuln.risk_level)}
                                        {vuln.risk_level}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-[#020618] text-xs">{vuln.published}</TableCell>
                                <TableCell className="text-[#020618] text-xs">{vuln.modified}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
