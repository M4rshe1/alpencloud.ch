import Link from "next/link";

const WhyBanner = () => {
    return (
        <div className="bg-red-600/10 border border-red-500/20 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Bereit für die Zukunft Ihrer Website?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Entdecken Sie, wie unser junges Team mit innovativen Lösungen und modernster Technologie Ihre Online-Präsenz auf das nächste Level bringen kann.
            </p>
            <Link href="/services" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Unsere Services entdecken
            </Link>
        </div>
    )
}

export default WhyBanner;