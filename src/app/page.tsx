
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Background light streaks effect */}
            <div
                className="absolute bottom-0 w-full h-[60vh] opacity-80"
                style={{
                    background: `
            linear-gradient(
              180deg, 
              transparent 0%,
              rgba(13, 148, 136, 0.1) 20%,
              rgba(13, 148, 136, 0.4) 60%,
              rgba(13, 148, 136, 0.8) 100%
            )
          `
                }}
            >
                {/* Light rays overlay */}
                <div className="absolute inset-0 w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(20, 184, 166, 0.1) 50px, rgba(20, 184, 166, 0.1) 51px)',
                    transform: 'perspective(500px) rotateX(60deg) scale(2)',
                    transformOrigin: 'bottom center',
                }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col min-h-screen">
                {/* Logo */}
                

                {/* Main Content */}
                <main className="flex-grow flex flex-col justify-start pt-20">
                    <h1 className="text-7xl md:text-9xl font-medium tracking-tight leading-tight">
                        Internship
                        <br />
                        Task
                    </h1>

                    <div className="mt-12 flex gap-4">
                        <Link
                            href="/p/npm/next/15.5.4"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            View Demo Package
                        </Link>
                    </div>
                </main>

                
            </div>
        </div>
    );
}
