import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { LicenseInfo } from '@/lib/api/types';

interface LicenseTabProps {
    licenses: LicenseInfo[];
}

export function LicenseTab({ licenses }: LicenseTabProps) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="">
                        <TableHead className="text-[#62748E] text-xs">License ID</TableHead>
                        <TableHead className="text-[#62748E] text-xs">License Name</TableHead>
                        <TableHead className="text-[#62748E] text-xs">Reference URL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {licenses.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-8 text-gray-500 text-xs">
                                No license information available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        licenses.map((license) => (
                            <TableRow key={license.license_id}>
                                <TableCell className="text-[#020618] text-xs">{license.license_id}</TableCell>
                                <TableCell className="text-[#020618] text-xs">{license.license_name}</TableCell>
                                <TableCell className="text-[#020618] text-xs">
                                    <a
                                        href={license.reference_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#020618] hover:underline hover:text-blue-600"
                                    >
                                        {license.reference_url}
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
