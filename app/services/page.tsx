import {PlanCombiner} from "@/components/plan-combiner";
import Link from "next/link";
import type {Metadata} from "next";
import Services from "@/components/sections/services";

export const metadata: Metadata = {
    title: 'Alpencloud - Hosting Services',
    description: 'Hosting Services von Alpencloud',
}

export default function Page() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mt-8">
            {/* Services Hero */}

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Unsere <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Hosting Services</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Wählen Sie aus unserer Auswahl an erstklassigen WordPress-Hosting-Lösungen, die speziell auf Ihre
                    individuellen Bedürfnisse zugeschnitten sind.
                    Jeder Plan umfasst unsere hochwertige Infrastruktur und erstklassigen Support.
                </p>
            </div>
            <Services />
            <PlanCombiner/>
            <div
                className={"text-center text-gray-300 max-w-3xl mx-auto text-sm"}>
                <p className={"font-semibold"}>Alle Angaben ohne Gewähr.</p>
                <p>
                    Die Preise in CHF sind ohne
                    Mehrwertsteuer und gelten für die Schweiz. Die Preise können von der Offiziellen Offerte abweichen.
                </p>
            </div>
            <div className="bg-red-600/10 border border-red-500/20 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Sie wollen etwas Eigenes?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Wir bieten Ihnen die Möglichkeit, Ihre Hosting-Lösung individuell anzupassen. Egal, ob Sie spezielle
                    Anforderungen oder Wünsche haben, unser Team steht bereit, um Ihnen zu helfen.
                </p>
                <Link href="mailto:info@alpencloud.ch"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                    Kontaktieren Sie uns
                </Link>
            </div>
        </div>
    );
}