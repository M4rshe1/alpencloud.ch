"use client";

import { Check, Zap, Shield, Clock, Server, HeartHandshake, Cpu, Globe2 } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Hosting Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from our range of premium WordPress hosting solutions, designed to meet your specific needs. Each plan includes our Swiss-quality infrastructure and expert support.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AlpenCloud?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We combine Swiss precision with cutting-edge technology to deliver a hosting experience that's reliable, secure, and blazing fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Technical Excellence</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-red-400 mr-3" />
                  Latest PHP versions and automatic updates
                </li>
                <li className="flex items-center">
                  <Globe2 className="h-5 w-5 text-red-400 mr-3" />
                  Global CDN with 50+ edge locations
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-red-400 mr-3" />
                  Advanced DDoS protection included
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-4">WordPress Optimization</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-red-400 mr-3" />
                  Server-level caching for maximum speed
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-red-400 mr-3" />
                  WordPress-specific security rules
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-red-400 mr-3" />
                  Automated core and plugin updates
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hosting Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <div className="text-3xl font-bold text-red-400 mb-6">CHF 29/mo</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                1 WordPress Installation
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                10GB SSD Storage
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Free SSL Certificate
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Weekly Backups
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Basic CDN
              </li>
            </ul>
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all">
              Get Started
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] transform scale-105 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
            <div className="text-3xl font-bold text-red-400 mb-6">CHF 79/mo</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                5 WordPress Installations
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                50GB SSD Storage
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Free SSL Certificate
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Daily Backups
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Premium CDN
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Staging Environment
              </li>
            </ul>
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all">
              Get Started
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <div className="text-3xl font-bold text-red-400 mb-6">CHF 199/mo</div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Unlimited WordPress Sites
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                200GB SSD Storage
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Free SSL Certificate
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Hourly Backups
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Enterprise CDN
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Multiple Staging Environments
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-red-400 mr-2" />
                Priority Support
              </li>
            </ul>
            <button className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Zap className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Optimized servers and advanced caching mechanisms ensure your WordPress sites load in milliseconds. Our infrastructure is fine-tuned for maximum performance.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Shield className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Enhanced Security</h3>
            <p className="text-gray-400">
              Enterprise-grade firewalls, real-time threat detection, and automated malware scanning keep your websites secure 24/7.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Clock className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Regular Backups</h3>
            <p className="text-gray-400">
              Automated backups with instant restore capabilities. Never worry about losing your data with our reliable backup system.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <Server className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Swiss Infrastructure</h3>
            <p className="text-gray-400">
              Hosted in state-of-the-art Swiss data centers with redundant power, cooling, and network connections for maximum reliability.
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
            <HeartHandshake className="h-8 w-8 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-400">
              Our WordPress specialists are available 24/7 to help you with any questions or issues. Average response time under 5 minutes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}