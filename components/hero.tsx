import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="relative overflow-hidden h-screen" id={"hero"}>
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=2000')] bg-cover bg-center after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-1/3 after:bg-gradient-to-t after:from-black after:to-transparent"
                style={{
                    opacity: 0.1,
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 66%, rgba(0,0,0,0.1) 100%), url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=2000')",
                }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 flex items-center justify-center h-full">
                <div className="text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300 pb-6">
                        AlpenCloud
                    </h1>
                    <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
                        Premium WordPress-Hosting aus der Schweiz. Maximale Sicherheit,
                        Geschwindigkeit und Zuverlässigkeit für Ihre Website.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/services"
                            className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        >
                            Services anzeigen <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
