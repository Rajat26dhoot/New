import { PackageHeader } from '@/components/package-header';
import { MetricsCards } from '@/components/metrics-cards';
import { OverviewTab } from '@/components/tabs/overview-tab';
import { VulnerabilitiesTab } from '@/components/tabs/vulnerabilities-tab';
import { VersionsTab } from '@/components/tabs/versions-tab';
import { LicenseTab } from '@/components/tabs/license-tab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getPackageData } from '@/lib/actions/package-actions';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        ecosystem: string;
        name: string;
        version: string;
    }>;
}

export default async function PackagePage({ params }: PageProps) {
    const { ecosystem, name, version } = await params;
    const decodedName = decodeURIComponent(name);

    // Fetch package data
    const data = await getPackageData(ecosystem, decodedName, version);

    if (!data || !data.insights || !data.insights.package) {
        notFound();
    }

    return (
        <div className="container mx-auto pt-2 pb-0 px-4 max-w-7xl flex flex-col min-h-screen">
            <header className="py-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[#90A1B9] font-normal text-xs uppercase tracking-wider">Powered by</span>
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="SafeDep Logo" className="h-7 w-7" />
                  <span className="text-[#111827] font-semibold text-xl">SafeDep</span>
                </div>
              </div>
              <button className="bg-[#009689] hover:bg-[#007167] text-white text-sm px-3 py-1.5 rounded-md flex items-center gap-2 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Install GitHub App
              </button>
            </div>
          </div>
        </header>
            {/* Header Section with Background */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-sm p-6">
                <PackageHeader metadata={data.insights.package} />
                <MetricsCards data={data.insights} />
            </div>

            {/* Tabs Section with Transparent Background */}
            <Tabs defaultValue="overview" className="w-full border border-[#E2E8F0] flex-1 flex flex-col">
                <TabsList className="justify-start h-auto p-1 bg-transparent  rounded-none py-3">
                    <TabsTrigger
                        value="overview"
                        className="rounded-md data-[state=active]:bg-[#FFFFFF] data-[state=active]:text-[#020618]  text-[#62748E] px-4 py-2 text-sm font-medium"
                    >
                        Overview
                    </TabsTrigger>
                    <TabsTrigger
                        value="vulnerabilities"
                        className="rounded-md  data-[state=active]:bg-[#FFFFFF] data-[state=active]:text-[#020618]  text-[#62748E] px-4 py-2 text-sm font-medium"
                    >
                        Vulnerabilities
                    </TabsTrigger>
                    <TabsTrigger
                        value="versions"
                        className="rounded-md  data-[state=active]:bg-[#FFFFFF] data-[state=active]:text-[#020618]  text-[#62748E] px-4 py-2 text-sm font-medium"
                    >
                        Versions
                    </TabsTrigger>
                    <TabsTrigger
                        value="license"
                        className="rounded-md  data-[state=active]:bg-[#FFFFFF] data-[state=active]:text-[#020618]  text-[#62748E] px-4 py-2 text-sm font-medium"
                    >
                        License
                    </TabsTrigger>
                </TabsList>

                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-md flex-1">

                    <TabsContent value="overview">
                        <OverviewTab data={data.insights} />
                    </TabsContent>

                    <TabsContent value="vulnerabilities">
                        <VulnerabilitiesTab vulnerabilities={data.malysis.vulnerabilities} />
                    </TabsContent>

                    <TabsContent value="versions">
                        <VersionsTab versions={data.malysis.versions} />
                    </TabsContent>

                    <TabsContent value="license">
                        <LicenseTab licenses={data.malysis.licenses} />
                    </TabsContent>

                </div>

            </Tabs>
        </div>
    );
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
    const { ecosystem, name, version } = await params;
    const decodedName = decodeURIComponent(name);

    return {
        title: `${decodedName}@${version} - SafeDep Analysis`,
        description: `Security analysis and insights for ${decodedName} package in ${ecosystem} ecosystem.`,
    };
}
