'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="container mx-auto py-16 px-4 max-w-2xl text-center">
            <Alert variant="destructive" className="mb-6 text-left">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Something went wrong</AlertTitle>
                <AlertDescription>
                    {error.message || 'Failed to load package data.'}
                </AlertDescription>
            </Alert>
            <div className="space-x-4">
                <Button onClick={() => reset()}>Try again</Button>
                <Button variant="outline" onClick={() => window.location.reload()}>
                    Reload Page
                </Button>
            </div>
        </div>
    );
}
