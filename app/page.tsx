"use client";

import {Cloud, Server, Shield} from "lucide-react";
import Hero from "@/components/hero";

export default function Home() {
    return (
        <>
            <Hero/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                        <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                            <Server className="h-6 w-6 text-red-400"/>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Alpine Data Centers</h3>
                        <p className="text-gray-400">Hosted in state-of-the-art Swiss Alpine data centers, ensuring
                            maximum security and compliance.</p>
                    </div>

                    <div
                        className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                        <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                            <Cloud className="h-6 w-6 text-red-400"/>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Peak Performance</h3>
                        <p className="text-gray-400">Lightning-fast loading times with our optimized WordPress
                            infrastructure.</p>
                    </div>

                    <div
                        className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                        <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                            <Shield className="h-6 w-6 text-red-400"/>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Summit-Level Security</h3>
                        <p className="text-gray-400">Advanced security measures and continuous monitoring to protect
                            your website.</p>
                    </div>
                </div>
            </div>
        </>
    );
}