"use client";

import Stats from "@/components/stats";
import {ABOUT} from "@/lib/settings/about";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            {/* About Hero */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Über <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">AlpenCloud</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Gegründet im Herzen der Schweizer Alpen, vereinen wir Schweizer Präzision mit modernster
                    Hosting-Technologie, um erstklassige WordPress-Hosting-Lösungen bereitzustellen.
                </p>
            </div>

            <Stats/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ABOUT.map((feature, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                    >
                        <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-red-400"/>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}