"use client";

import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
            <div className="max-w-md w-full mx-auto space-y-8 p-8 border border-red-500/20 bg-red-600/10 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <div className="text-center space-y-8">
                    {/* Error Icon */}
                    <div className="flex justify-center">
                        <div className="h-24 w-24 rounded-full bg-red-600/20 flex items-center justify-center">
                            <AlertCircle className="h-12 w-12 text-red-400" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-white">
                            404<br/>Seite nicht gefunden
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Wir haben die Seite nicht gefunden, die Sie suchen. Möglicherweise wurde sie verschoben oder gelöscht.
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>

                    {/* Additional Links */}
                    <div className="pt-8 border-t border-red-500/20">
                        <p className="text-gray-400">
                            Looking for something specific? Check out our{' '}
                            <Link href="/services" className="text-red-400 hover:text-red-300 underline">
                                services
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
    );
}