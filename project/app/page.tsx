"use client";

import { ArrowRight, Cloud, Server, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300 mb-6">
              Alpine Excellence in WordPress Hosting
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Experience unmatched reliability and performance with our premium WordPress hosting solutions, powered by Swiss engineering excellence.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/services"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              >
                View Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Server className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Alpine Data Centers</h3>
            <p className="text-gray-400">Hosted in state-of-the-art Swiss Alpine data centers, ensuring maximum security and compliance.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Cloud className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Peak Performance</h3>
            <p className="text-gray-400">Lightning-fast loading times with our optimized WordPress infrastructure.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Summit-Level Security</h3>
            <p className="text-gray-400">Advanced security measures and continuous monitoring to protect your website.</p>
          </div>
        </div>
      </div>
    </main>
  );
}