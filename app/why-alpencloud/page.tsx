import {Clock, Code, Cpu, Globe2, HeartHandshake, Rocket, Server, Shield, Users, Zap} from "lucide-react"
import Link from "next/link"
import WhyBanner from "@/components/why-banner";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Alpencloud - Wieso AlpenCloud?',
    description: 'Erfahren Sie, warum AlpenCloud die beste Wahl für Ihr Hosting ist. Wir bieten Schweizer Qualität, innovative Technologie und persönlichen Support.',
}

const Page = () => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Wieso AlpenCloud?</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    Als junges, innovatives Team bringen wir frische Ideen und modernste Technologien in die Schweizer
                    Hosting-Landschaft. Wir verbinden Schweizer Präzision mit zukunftsweisenden Lösungen.
                </p>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 px-4">
                <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Rocket className="h-6 w-6 text-red-400 mr-3"/>
                        Junges Team, frische Ideen
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <Users className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Ein dynamisches Team mit fundiertem technischen Know-how und Leidenschaft für Innovation</span>
                        </li>
                        <li className="flex items-start">
                            <Code className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Agile Entwicklung und kontinuierliche Optimierung unserer Hosting-Plattform</span>
                        </li>
                        <li className="flex items-start">
                            <HeartHandshake className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Persönlicher Support mit echtem Verständnis für Ihre Bedürfnisse</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <Link href="/team" className="text-red-400 hover:text-red-300 font-medium flex items-center">
                            Unser Team kennenlernen
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Cpu className="h-6 w-6 text-red-400 mr-3"/>
                        Fortschrittliche Technologie
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <Zap className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>High-Performance SSD-Speicher und die neuesten PHP-Versionen für maximale Geschwindigkeit</span>
                        </li>
                        <li className="flex items-start">
                            <Globe2 className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Globales CDN-Netzwerk mit über 50 Edge-Standorten für blitzschnelle Ladezeiten weltweit</span>
                        </li>
                        <li className="flex items-start">
                            <Clock className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Automatisierte Workflows und CI/CD für eine konstant hohe Servicequalität</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <Link href="/services"
                              className="text-red-400 hover:text-red-300 font-medium flex items-center">
                            Unsere Services entdecken
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Shield className="h-6 w-6 text-red-400 mr-3"/>
                        Schweizer Qualität & Sicherheit
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start">
                            <Server className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Hosting in Schweizer Rechenzentren mit strenger Datenschutz-Konformität</span>
                        </li>
                        <li className="flex items-start">
                            <Shield className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Erweiterte DDoS-Abwehr und WordPress-spezifische Sicherheitsregeln</span>
                        </li>
                        <li className="flex items-start">
                            <Clock className="h-5 w-5 text-red-400 mr-3 mt-1"/>
                            <span>Tägliche Backups und automatische Updates für sorgenfreien Betrieb</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <Link href="/references"
                              className="text-red-400 hover:text-red-300 font-medium flex items-center">
                            Referenzen ansehen
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 px-4 space-y-16"}>
                <WhyBanner/>
            </div>
        </div>
    )
}

export default Page;