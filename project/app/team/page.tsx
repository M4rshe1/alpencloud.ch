"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Team() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Team</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in WordPress hosting, security, and customer support.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
            />
            <h3 className="text-xl font-semibold text-white text-center mb-2">Marcus Weber</h3>
            <p className="text-red-400 text-center mb-4">CEO & Founder</p>
            <p className="text-gray-400 text-center mb-6">
              20+ years of experience in web hosting and infrastructure management.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
              alt="CTO"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
            />
            <h3 className="text-xl font-semibold text-white text-center mb-2">Sarah Mueller</h3>
            <p className="text-red-400 text-center mb-4">Chief Technology Officer</p>
            <p className="text-gray-400 text-center mb-6">
              WordPress core contributor and security specialist with 15 years of experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80"
              alt="Support Lead"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
            />
            <h3 className="text-xl font-semibold text-white text-center mb-2">Thomas Keller</h3>
            <p className="text-red-400 text-center mb-4">Head of Customer Success</p>
            <p className="text-gray-400 text-center mb-6">
              Dedicated to providing world-class support and customer satisfaction.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Team Culture Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At AlpenCloud, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are passionate about technology and dedicated to delivering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Work Environment</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Flexible remote work options</li>
                <li>• Regular team building events</li>
                <li>• Continuous learning opportunities</li>
                <li>• Modern office in Zürich</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Competitive salary packages</li>
                <li>• Health and wellness programs</li>
                <li>• Professional development budget</li>
                <li>• Company-wide hack days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}