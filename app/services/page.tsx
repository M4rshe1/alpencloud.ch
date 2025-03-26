"use client";

import {SERVICES} from "@/lib/settings/services";
import {Plans} from "@/components/plans";
import {PlanCombiner} from "@/components/plan-combiner";

export default function Services() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Services Hero */}

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Usere <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Hosting Services</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Choose from our range of premium WordPress hosting solutions, designed to meet your specific needs.
                    Each plan includes our Swiss-quality infrastructure and expert support.
                </p>
            </div>

            {
                SERVICES.map((service => (
                    <Plans key={service.name} service={service} annual={false}/>
                )))
            }

            <PlanCombiner/>
            <div
                className={"text-center text-gray-300 max-w-3xl mx-auto text-sm"}>
                <p className={"font-semibold"}>Alle Angaben ohne Gewähr.</p>
                <p>
                    Die Preise in CHF sind ohne
                    Mehrwertsteuer und gelten für die Schweiz. Die Preise können von der Offiziellen Offerte abweichen.
                </p>
            </div>
        </div>
    );
}