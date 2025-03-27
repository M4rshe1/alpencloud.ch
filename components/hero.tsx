import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BANNERS } from "@/lib/settings/banners";

const Hero = () => {
    const heroHeight = `calc(100vh - ${BANNERS.length * 36}px)`;

    return (
        <div
            className="relative overflow-hidden"
            id={"hero"}
            style={{ height: heroHeight }}
        >
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=2000')] bg-cover bg-center opacity-10"
                style={{
                    maskImage: "linear-gradient(to bottom, black 66%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 66%, transparent 100%)",
                }}
                aria-hidden="true"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 pb-32 pt-20 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text pb-6 text-5xl font-bold text-transparent md:text-7xl">
                        AlpenCloud
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-300 md:text-2xl">
                        Premium WordPress-Hosting aus der Schweiz. Maximale Sicherheit,
                        Geschwindigkeit und Zuverlässigkeit für Ihre Website.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/services"
                            className="flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        >
                            Services anzeigen <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
