"use client";

import {Building2, Users, Globe2, Server, Cloud, Shield} from "lucide-react";
import Stats from "@/components/stats";

export default function About() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* About Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">AlpenCloud</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Founded in the heart of the Swiss Alps, we combine Swiss precision with cutting-edge hosting technology to deliver exceptional WordPress hosting solutions.
          </p>
        </div>

       <Stats/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Building2 className="h-6 w-6 text-red-400"/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Alpine Quality</h3>
            <p className="text-gray-400">We maintain the highest standards in hosting infrastructure and customer service, embodying Swiss precision and reliability.</p>
          </div>

          <div
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-red-400"/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
            <p className="text-gray-400">Our success is measured by our customers&#39; success. We provide personalized support and solutions for every client.</p>
          </div>

          <div
              className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <div className="h-12 w-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Globe2 className="h-6 w-6 text-red-400"/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
            <p className="text-gray-400"> We&#39;re committed to sustainable hosting practices, using renewable Alpine energy in our data centers.</p>
          </div>
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
  );
}