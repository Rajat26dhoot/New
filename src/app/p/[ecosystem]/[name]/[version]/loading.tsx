import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
    return (
        <div className="container mx-auto py-8 px-4 max-w-7xl">
            {/* Header Loading State */}
            <div className="mb-6 space-y-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-lg" />
                    <Skeleton className="h-8 w-64" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-4 w-96" />
                </div>
            </div>

            {/* Metrics Cards Loading State */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[...Array(5)].map((_, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6">
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-8 w-16" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Tabs Loading State */}
            <div className="space-y-4">
                <div className="flex gap-2">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-10 w-24" />
                    ))}
                </div>
                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
