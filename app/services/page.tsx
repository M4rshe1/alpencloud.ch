"use client";

import {FEATURES, SERVICES} from "@/lib/settings";
import {Plans} from "@/components/plans";

export default function Services() {
  return (
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

        {
          SERVICES.map((service => (
              <Plans key={service.name} service={service} annual={false}/>
          )))
        }
        <h2 className={"text-3xl font-bold text-white mb-6 text-center w-full"}>Features</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {
            FEATURES.map(
                (feature) => (
                    <div key={feature.title} className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg min-w-72">
                    <feature.icon className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                    </div>
            ))
          }
        </div>
      </div>
  );
}