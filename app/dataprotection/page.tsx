"use client";


export default function DataProtection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Datenschutzerklärung
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Datenschutz ist uns wichtig – daher erheben oder speichern wir keine personenbezogenen Daten.
                </p>
            </div>

            <div className="space-y-12">
                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        1. Allgemeine Hinweise
                    </h2>
                    <p className="text-gray-400">
                        Diese Website kann genutzt werden, ohne dass personenbezogene Daten angegeben oder gespeichert werden müssen. Wir respektieren Ihre Privatsphäre und halten uns an die Vorgaben des schweizerischen Datenschutzgesetzes (DSG).
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        2. Keine Speicherung personenbezogener Daten
                    </h2>
                    <p className="text-gray-400">
                        Beim Besuch unserer Website speichern wir keine personenbezogenen Daten wie Name, Adresse, Telefonnummer oder IP-Adresse. Auch Formulare werden nicht serverseitig gespeichert – stattdessen öffnen sie lediglich Ihr E-Mail-Programm.
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        3. Keine Cookies, kein Tracking
                    </h2>
                    <p className="text-gray-400">
                        Unsere Website verwendet keine Cookies, Tracking-Technologien oder externe Analyse-Tools (wie Google Analytics). Ihr Besuch auf unserer Seite bleibt vollständig anonym.
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        4. Kontaktaufnahme per E-Mail
                    </h2>
                    <p className="text-gray-400">
                        Wenn Sie uns über das Kontaktformular kontaktieren, wird Ihre Nachricht direkt über Ihr E-Mail-Programm gesendet. Diese E-Mails werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        5. Ihre Rechte
                    </h2>
                    <p className="text-gray-400">
                        Da wir keine personenbezogenen Daten speichern, entfällt die Notwendigkeit eines Auskunfts- oder Löschungsantrags. Sollten Sie dennoch Fragen zum Datenschutz haben, kontaktieren Sie uns gerne:
                        <br /><br />
                        <a href="mailto:support@alpencloud.ch" className="text-red-400 hover:underline">
                            support@alpencloud.ch
                        </a>
                    </p>
                </section>

                <section className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-md">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        6. Änderungen
                    </h2>
                    <p className="text-gray-400">
                        Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf anzupassen, insbesondere bei gesetzlichen Änderungen. Die jeweils aktuelle Version finden Sie immer auf dieser Seite.
                    </p>
                </section>
            </div>
        </div>
    );
}
