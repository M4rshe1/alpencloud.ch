export interface QuestionAndAnswer {
    question: string;
    answer: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionAndAnswer[] = [
//     {
//       question: "Markdown rendering test question",
//         answer: `Markdown rendering test answer. This is a test to check if the Markdown rendering works correctly.
// You can use **bold** text, *italic* text, and [links](https://example.com).
// \`\`\`javascript
// // Fibonacci sequence implementation
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
//
// // Print first 10 Fibonacci numbers
// for (let i = 0; i < 10; i++) {
//   console.log(fibonacci(i));
// }
// \`\`\`
// This is a code block.
// - Item 1
// - Item 2
// - Item 3
//
// 1. First item
// 2. Second item
// 3. Third item
// # Heading
// This is a heading.
// ## Subheading
// This is a subheading.
// ### Another subheading
// This is another subheading.
// #### Yet another subheading
// This is yet another subheading.
// ##### Last subheading
// This is the last subheading.
//
// <img src="https://colin.heggli.dev/assets/avatar.png" alt="Image" width="100" height="100" />
// This is an image.
//
//
// > This is a blockquote.
// >> It can span multiple lines.
// >>> It can span multiple lines.
// >>>> It can span multiple lines.
//
// ---
// This is a horizontal rule.
//
// \`kjhkjklsajdfkasdf\`
// `,
//
//     },
    {
        question: "Was ist WordPress Hosting und warum brauche ich es?",
        answer: `WordPress Hosting ist ein spezialisierter Webhosting-Service, der für WordPress-Websites optimiert ist.
*   **Performance:** Server sind konfiguriert, um WordPress schnell und effizient auszuführen.
*   **Sicherheit:** Oftmals enthalten sind spezielle Sicherheitsmassnahmen gegen WordPress-spezifische Bedrohungen.
*   **Support:** Der Kundenservice ist auf WordPress-Fragen spezialisiert.

Sie benötigen Hosting, damit Ihre Website im Internet erreichbar ist. WordPress Hosting stellt sicher, dass Ihre Seite unter optimalen Bedingungen läuft.`,
    },
    {
        question: "Was beinhaltet Email Hosting und benötige ich es separat?",
        answer: `Email Hosting ermöglicht Ihnen, E-Mail-Adressen mit Ihrer eigenen Domain zu verwenden (z.B. \`info@ihredomain.ch\`).
*   **Professionalität:** Stärkt das Markenimage im Vergleich zu Freemail-Adressen.
*   **Funktionen:** Beinhaltet Speicherplatz für E-Mails, Spamfilter, Virenschutz und oft Webmail-Zugang.
*   **Kontrolle:** Volle Kontrolle über Ihre E-Mail-Konten und Einstellungen.

Ob es separat benötigt wird, hängt vom Webhosting-Paket ab. Manche Pakete beinhalten einfache E-Mail-Funktionen, für erweiterte Bedürfnisse (mehr Speicher, bessere Filter) ist oft ein separates E-Mail-Hosting sinnvoll.`,
    },
    {
        question: "Was versteht man unter Domain Management?",
        answer: `Domain Management umfasst alle Aufgaben rund um die Verwaltung Ihrer Internetadresse(n) (Domains). Dazu gehören:
*   **Registrierung:** Die erstmalige Sicherung einer Domain.
*   **Verlängerung:** Die regelmässige Erneuerung der Domainregistrierung, um sie nicht zu verlieren.
*   **DNS-Konfiguration:** Die Verwaltung der Domain Name System (DNS) Einträge, die festlegen, welcher Server für Ihre Website und E-Mails zuständig ist (z.B. A-Record, MX-Record).
*   **Transfer:** Der Umzug einer Domain von einem Anbieter zu einem anderen.
*   **Kontaktdatenpflege:** Aktualisierung der Inhaber- und Kontaktdaten.

Gutes Domain Management stellt sicher, dass Ihre Website und E-Mail-Dienste unter Ihrer Wunschadresse erreichbar bleiben.`,
    },
    {
        question: "Warum ist regelmässige WordPress Wartung wichtig?",
        answer: `Regelmässige WordPress Wartung ist entscheidend für die Sicherheit, Leistung und Stabilität Ihrer Website. Sie beinhaltet typischerweise:
*   **Updates:** Aktualisierung von WordPress Core, Themes und Plugins, um Sicherheitslücken zu schliessen und neue Funktionen zu erhalten.
*   **Backups:** Regelmässige Sicherungen Ihrer Website-Daten und Datenbank, um im Notfall eine Wiederherstellung zu ermöglichen.
*   **Sicherheits-Scans:** Überprüfung auf Malware und verdächtige Aktivitäten.
*   **Performance-Optimierung:** Massnahmen zur Verbesserung der Ladezeiten (z.B. Datenbankbereinigung).
*   **Funktionsprüfungen:** Sicherstellen, dass alle wichtigen Funktionen (Formulare, Warenkorb etc.) korrekt arbeiten.

Ohne Wartung riskieren Sie Sicherheitslücken, Datenverlust, schlechte Performance und Ausfälle.`,
    },
    {
        question: "Bieten Sie auch die Erstellung spezieller Webseiten auf Anfrage an?",
        answer: `Ja, neben Standard-WordPress-Websites entwickeln wir auch individuelle und spezielle Webseiten nach Ihren Anforderungen. Dazu gehören beispielsweise:
*   **E-Commerce-Shops:** Online-Shops mit Produktverwaltung, Warenkorb und Bezahlfunktionen (z.B. mit WooCommerce).
*   **Mitgliederbereiche:** Websites mit geschützten Inhalten nur für registrierte Benutzer.
*   **Mehrsprachige Websites:** Seiteninhalte in verschiedenen Sprachen.
*   **Individuelle Funktionalitäten:** Integration spezifischer Tools, Schnittstellen oder komplexer Formulare.
*   **Web-Applikationen:** Browserbasierte Anwendungen mit spezifischen Logiken.

Kontaktieren Sie uns gerne mit Ihren spezifischen Vorstellungen, um die Machbarkeit und Umsetzung zu besprechen.`,
    },
    {
        question:
            "Was kostet die Entwicklung eines individuellen WordPress Themes oder Plugins?",
        answer: `Die Kosten für die Entwicklung eines massgeschneiderten WordPress Themes oder Plugins können stark variieren. Es gibt keinen Pauschalpreis, da die Kosten von mehreren Faktoren abhängen:
*   **Komplexität des Designs:** Ein aufwendiges, einzigartiges Design erfordert mehr Zeit als ein einfaches Layout.
*   **Umfang der Funktionalitäten:** Je mehr spezielle Funktionen ein Theme oder Plugin haben soll, desto höher der Entwicklungsaufwand.
*   **Integrationen:** Anbindung an externe Dienste oder APIs kann den Aufwand erhöhen.
*   **Responsivität und Browserkompatibilität:** Sicherstellung der korrekten Darstellung auf allen Geräten und Browsern.
*   **Wartung und Support:** Berücksichtigung zukünftiger Anpassungen und Hilfestellungen.

Für eine genaue Kostenschätzung ist eine detaillierte Besprechung Ihrer Anforderungen notwendig. Kontaktieren Sie uns für ein individuelles Angebot.`,
    },
    {
        question: "Wie viel kostet ein WordPress Hosting-Paket bei Ihnen?",
        answer: `Die Kosten für unsere WordPress Hosting-Pakete variieren je nach gewähltem Paket und den enthaltenen Leistungen. Hier sind einige Faktoren, die den Preis beeinflussen:
*   **Speicherplatz:** Je mehr Speicherplatz Sie benötigen, desto höher der Preis.
*   **Traffic:** Höhere Bandbreitenlimits können den Preis erhöhen.
*   **Plugins und Themes:** Einige Pakete beinhalten Premium-Plugins oder -Themes, was den Preis beeinflusst.
*   **Support-Level:** Premium-Support-Optionen können zusätzliche Kosten verursachen.
*   **Sicherheitsfeatures:** Zusätzliche Sicherheitsmassnahmen oder Backups können den Preis erhöhen.
*   **Vertragslaufzeit:** Längere Vertragslaufzeiten bieten oft Rabatte.
*   **Email-Hosting:** Wenn E-Mail-Hosting enthalten ist, kann dies den Preis beeinflussen.
*   **Domain-Management:** Einige Pakete beinhalten kostenlose Domain-Registrierung oder -Verlängerung.

Für eine grobe preisberechnug nutzen sie doch bitte unseren [Hosting-Rechner](https://alpencloud.ch/services#calculator). Dort können Sie die verschiedenen Pakete vergleichen und die für Sie passende Lösung finden. Bei Fragen oder speziellen Anforderungen stehen wir Ihnen gerne zur Verfügung.`,
    },
    {
        question: "Wie lange dauert es, eine WordPress-Website zu erstellen?",
        answer: `Die Dauer zur Erstellung einer WordPress-Website hängt von mehreren Faktoren ab:
*   **Komplexität der Website:** Einfache Blogs sind schneller erstellt als komplexe E-Commerce-Seiten.
*   **Design-Anpassungen:** Standard-Templates sind schneller eingerichtet als massgeschneiderte Designs.
*   **Inhalt:** Vorhandene Inhalte sind schneller integriert als neue Texte und Bilder.
*   **Funktionalitäten:** Zusätzliche Funktionen (z.B. Buchungssysteme, Mitgliederbereiche) verlängern die Entwicklungszeit.
*   **Testphase:** Zeit für Tests und Anpassungen vor dem Live-Gang.
*   **Feedback-Runden:** Anzahl der Feedback-Schleifen mit dem Kunden.

In der Regel kann eine einfache WordPress-Website innerhalb weniger Tage bis Wochen erstellt werden, während komplexere Projekte mehrere Wochen oder Monate in Anspruch nehmen können. Kontaktieren Sie uns für eine genauere Einschätzung basierend auf Ihren spezifischen Anforderungen.`,
    }
];
