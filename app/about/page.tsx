"use client";

import { Building2, Users, Globe2 } from "lucide-react";

export default function About() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">AlpenCloud</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Founded in the heart of the Swiss Alps, we combine Swiss precision with cutting-edge hosting technology to deliver exceptional WordPress hosting solutions.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
            <div className="text-gray-300">Happy Customers</div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] text-center">
            <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Building2 className="h-10 w-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Alpine Quality</h3>
            <p className="text-gray-400">
              We maintain the highest standards in hosting infrastructure and customer service, embodying Swiss precision and reliability.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Users className="h-10 w-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Customer First</h3>
            <p className="text-gray-400">
              Our success is measured by our customers&#39; success. We provide personalized support and solutions for every client.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Globe2 className="h-10 w-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Sustainability</h3>
            <p className="text-gray-400">
              We&#39;re committed to sustainable hosting practices, using renewable Alpine energy in our data centers.
            </p>
          </div>
        </div>
      </div>
  );
}