"use client";


export default function Impressum() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Impressum
                </h1>
            </div>

            <div className="space-y-12">
                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Verantwortlich für den Inhalt dieser Website
                    </h2>
                    <p className="text-gray-400">
                        <strong>Raffael Schären</strong><br />
                        Rietweg 31<br />
                        8477 Oberstammheim<br />
                        Schweiz
                    </p>
                    <p className="text-gray-400 mt-4">
                        E-Mail:{" "}
                        <a href="mailto:support@alpencloud.ch" className="text-red-400 hover:underline">
                            support@alpencloud.ch
                        </a>
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Haftungsausschluss
                    </h2>
                    <p className="text-gray-400">
                        Alle Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Urheberrecht
                    </h2>
                    <p className="text-gray-400">
                        Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung oder Verbreitung ist ohne schriftliche Zustimmung nicht gestattet.
                    </p>
                </section>
            </div>
        </div>
    );
}
