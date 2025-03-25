"use client";

import {TEAM} from "@/lib/settings";
import React from "react";
import Image from "next/image";

export default function Team() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lehrne und <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Team</span> kennen
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Unser diverses Team von Experten vereint jahrzehntelange Erfahrung in WordPress-Hosting, Sicherheit und Kundenservice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            TEAM.map((member, index) => (
                <div
                    key={index}
                    className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Image
                      width={1080}
                      height={1080}
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
                  />
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-red-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-400 text-center mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {
                      member.socials.map((social, index) => (
                            <a key={index} href={social.href} className="text-gray-400 hover:text-red-400 transition-colors">
                                <social.icon className="w-5 h-5"/>
                            </a>
                      ))
                    }
                  </div>
                </div>
            ))
          }
        </div>

        {/*<div className="mt-20">*/}
        {/*  <div className="text-center mb-12">*/}
        {/*    <h2 className="text-3xl font-bold text-white mb-4">Our Culture</h2>*/}
        {/*    <p className="text-gray-300 max-w-3xl mx-auto">*/}
        {/*      At AlpenCloud, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are passionate about technology and dedicated to delivering excellence.*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
        {/*    <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">*/}
        {/*      <h3 className="text-xl font-semibold text-white mb-4">Work Environment</h3>*/}
        {/*      <ul className="space-y-3 text-gray-400">*/}
        {/*        <li>Flexible remote work options</li>*/}
        {/*        <li>Regular team building events</li>*/}
        {/*        <li>Continuous learning opportunities</li>*/}
        {/*        <li>Modern office in Zürich</li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}

        {/*    <div className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-lg">*/}
        {/*      <h3 className="text-xl font-semibold text-white mb-4">Benefits</h3>*/}
        {/*      <ul className="space-y-3 text-gray-400">*/}
        {/*        <li>Competitive salary packages</li>*/}
        {/*        <li>Health and wellness programs</li>*/}
        {/*        <li>Professional development budget</li>*/}
        {/*        <li>Company-wide hack days</li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
  );
}