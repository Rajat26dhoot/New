import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { VersionInfo } from '@/lib/api/types';
import { Button } from '@/components/ui/button';

interface VersionsTabProps {
    versions: VersionInfo[];
}

export function VersionsTab({ versions }: VersionsTabProps) {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className="">
                        <TableHead className="text-[#62748E] text-xs">Version</TableHead>
                        <TableHead className="text-right text-[#62748E] text-xs">Published On</TableHead>
                        <TableHead className="w-[150px] text-xs"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {versions.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center py-8 text-gray-500 text-xs">
                                No version history available.
                            </TableCell>
                        </TableRow>
                    ) : (
                        versions.map((ver, index) => (
                            <TableRow key={ver.version}>
                                <TableCell className="font-medium text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-[#F3F4F6] px-2 py-1 rounded-md text-[#020618]">
                                            {ver.version}
                                        </span>
                                        {index === 0 && (
                                            <Badge className="bg-[#CBFBF1] text-[#00786F] text-xs ">
                                                Latest
                                            </Badge>
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right text-gray-500 text-xs">
                                    {ver.published_on}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-[#009689] text-xs"
                                    >
                                        View Version
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
