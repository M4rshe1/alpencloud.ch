
import {TEAM} from "@/lib/settings/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Alpencloud - Team',
    description: 'Lerne sie das Team von Alpencloud kennen',
}

export default function Team() {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lerne unser <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Team</span> kennen
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Unser diverses Team von Experten vereint jahrzehntelange Erfahrung in WordPress-Hosting, Sicherheit und Kundenservice.
          </p>
        </div>

          <div className="flex flex-wrap justify-center gap-8 mb-20">
          {
            TEAM.map((member, index) => (
                <div
                    key={index}
                    className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] flex-grow min-w-[300px] max-w-[400px]">
                  <Image
                      width={1080}
                      height={1080}
                      src={member.image}
                      alt={member.name}
                      className="w-64 h-64 rounded-full mx-auto mb-4 object-cover border-2 border-red-400"
                  />
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-red-400 text-center mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {
                      member.socials.map((social, index) => (
                            <Link target={"_blank"} key={index} href={social.href} className="text-gray-400 hover:text-red-400 transition-colors">
                                <social.icon className="w-5 h-5"/>
                            </Link>
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