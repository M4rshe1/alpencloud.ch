import {
    BookOpen,
    Clock,
    Globe,
    HeartHandshake,
    Home,
    Info,
    Mail, MessageCircleQuestion,
    Scale,
    Server,
    Shield,
    Users,
    Wrench,
    Zap
} from "lucide-react";
import {IconBrandGithub, IconBrandLinkedin, IconBrandWordpress, IconWorldWww} from "@tabler/icons-react";

export const TEAM = [
    {
        name: "Colin Heggli",
        role: "CEO & Gründer",
        description: "20+ Jahre Erfahrung in Webhosting und Infrastrukturmanagement.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
        socials: [
            {
                icon: Globe,
                href: "https://colin.heggli.dev"
            },
            {
                icon: IconBrandLinkedin,
                href: "https://www.linkedin.com/in/colin-heggli/"
            },
            {
                icon: IconBrandGithub,
                href: "https://github.com/m4rshe1"
            }
        ]
    },
    {
        name: "Raffael Schären",
        role: "CTO & Mitgründer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
        description: "WordPress-Kernmitarbeiter und Sicherheitsspezialist mit 15 Jahren Erfahrung.",
        socials: [
            {
                icon: IconBrandLinkedin,
                href: "https://www.linkedin.com/in/raffael-sch%C3%A4ren-87165b26a/"
            }
        ]
    }
]

export const HEADER_LINKS = [
    {
        title: "Home",
        href: "/",
        icon: Home
    },
    {
        title: "Support",
        href: "/support",
        icon: Shield,
        submenu: [
            {
                title: "Support",
                description: "24/7 Support für alle unsere Dienstleistungen",
                icon: Shield,
                href: "/support"
            },
            {
                title: "FAQ",
                description: "Häufig gestellte Fragen und Antworten",
                icon: Shield,
                href: "/faq"
            }
        ]
    },
    {
        title: "About",
        href: "/about",
        icon: Info,
        submenu: [
            {
                title: "Uber uns",
                description: "Erfahren Sie mehr über unsere Mission und Werte",
                icon: Info,
                href: "/about#mission"
            },
            {
                title: "Team",
                description: "Lernen Sie unser Team von Experten kennen",
                icon: Users,
                href: "/team"
            },
            {
                title: "Datenschutz",
                description: "Erfahren Sie mehr über unsere Datenschutzrichtlinien",
                icon: Shield,
                href: "/privacy"
            },
            {
                title: "Impressum",
                description: "Rechtliche Informationen über AlpenCloud",
                icon: Scale,
                href: "/impressum"
            },
            {
                title: "Wieso AlpenCloud?",
                description: "Erfahren Sie, warum Sie sich für AlpenCloud entscheiden sollten",
                icon: MessageCircleQuestion,
                href: "/why-alpencloud"
            }
        ]
    },
    {
        title: "Services",
        href: "/services",
        icon: Server,
        whiteButton: true,
        submenu: [
            {
                title: "Alle anzeigen",
                description: "Entdecken Sie alle unsere Dienstleistungen",
                icon: Server,
                href: "/services"
            },
            {
                title: "WordPress Hosting",
                description: "High-performance WordPress hosting in der Schweiz",
                icon: IconBrandWordpress,
                href: "/services#wordpress-hosting"
            },
            {
                title: "Email Solutions",
                description: "Professionelle E-Mail-Lösungen für kleine unternehmen und Privatanwender",
                icon: Mail,
                href: "/services#email"
            },
            {
                title: "Training",
                description: "WordPress-Training und Schulungen für alle Erfahrungsstufen",
                icon: BookOpen,
                href: "/services#training"
            },
            {
                title: "Domain Services",
                description: "Die Domainregistrierung und -verwaltung für Ihre Online-Präsenz",
                icon: IconWorldWww,
                href: "/services#domains"
            },
            {
                title: "Maintenance",
                description: "Regelmäßige Wartung und Updates für Ihre WordPress-Website",
                icon: Wrench,
                href: "/services#maintenance"
            }
        ]
    },
];


export interface ServicePackage {
    name: string;
    price: number;
    description: string;
    features: string[];
    mostPopular?: boolean;
    annualDiscount?: number;
    setupFee?: number;
}

export interface Service {
    name: string;
    id: string;
    description: string;
    icon: any;
    type: "monthly" | "yearly" | "one-time";
    packages: ServicePackage[];
}


export const SERVICES: Service[] = [
    {
        name: "WordPress Hosting",
        id: "wordpress-hosting",
        description: "Hochleistungs-WordPress-Hosting in der Schweiz mit unbegrenztem Speicherplatz und Bandbreite.",
        icon: IconBrandWordpress,
        type: "monthly",
        packages: [
            {
                name: "Basic",
                price: 19,
                annualDiscount: .1,
                description: "Ideal für kleine Websites und Blogs.",
                setupFee: 300,
                features: [
                    "1 WordPress Installation",
                    "10GB SSD Storage",
                    "Free SSL Certificate",
                    "Weekly Backups",
                    "Basic CDN"
                ]
            },
            {
                name: "Business",
                price: 79,
                annualDiscount: .15,
                setupFee: 500,
                mostPopular: true,
                description: "Für mittelgroße Websites mit mehr Traffic.",
                features: [
                    "5 WordPress Installations",
                    "50GB SSD Storage",
                    "Free SSL Certificate",
                    "Daily Backups",
                    "Premium CDN"
                ]
            },
            {
                name: "Enterprise",
                price: 199,
                annualDiscount: .2,
                setupFee: 1000,
                description: "Für große Websites und E-Commerce-Shops.",
                features: [
                    "Unlimited WordPress Installations",
                    "200GB SSD Storage",
                    "Free SSL Certificate",
                    "Hourly Backups",
                    "Enterprise CDN",
                    "Multiple Staging Environments",
                    "Priority Support"
                ]
            }
        ],
    },
    {
        name: "Email Solutions",
        description: "Professionelle E-Mail-Lösungen für kleine Unternehmen und Privatanwender.",
        icon: Mail,
        id: "email",
        type: "yearly",
        packages: [
            {
                name: "Basic",
                price: 5,
                setupFee: 100,
                mostPopular: true,
                description: "Ideal für Einzelpersonen und kleine Unternehmen.",
                features: [
                    "1 Email Account",
                    "5GB Storage",
                    "Webmail Access",
                    "Spam Protection"
                ]
            },
            {
                name: "Business",
                price: 15,
                setupFee: 200,
                description: "Für mittelgroße Unternehmen mit mehreren Benutzern.",
                features: [
                    "5 Email Accounts",
                    "25GB Storage per Account",
                    "Webmail Access",
                    "Advanced Spam Protection"
                ]
            },
            {
                name: "Enterprise",
                price: 50,
                setupFee: 500,
                description: "Für große Unternehmen mit vielen Benutzern.",
                features: [
                    "Unlimited Email Accounts",
                    "100GB Storage per Account",
                    "Webmail Access",
                    "Advanced Spam Protection",
                    "Priority Support"
                ]
            }
        ],
    },
    {
        name: "Training",
        description: "WordPress-Training und Schulungen für alle Erfahrungsstufen.",
        icon: BookOpen,
        id: "training",
        type: "one-time",
        packages: [
            {
                name: "Basic",
                price: 99,
                description: "Einzeltraining für Anfänger.",
                features: [
                    "1 Stunden Training",
                    "Einzeltraining",
                    "Online",
                    "Zugang zu Schulungsmaterialien"
                ]
            },
            {
                name: "Business",
                price: 299,
                description: "Gruppentraining für Unternehmen.",
                mostPopular: true,
                features: [
                    "3 Stunden Training",
                    "Gruppentraining (max. 10 Personen)",
                    "Online oder vor Ort",
                    "Zugang zu Schulungsmaterialien",
                    "Zertifikat nach Abschluss"
                ]
            },
            {
                name: "Enterprise",
                price: 999,
                description: "Individuelles Training für Unternehmen.",
                features: [
                    "10 Stunden Training",
                    "Individuelles Training",
                    "Online oder vor Ort",
                    "Zugang zu Schulungsmaterialien",
                    "Zertifikat nach Abschluss",
                    "Follow-up Support"
                ]
            }
        ]
    },
    {
        name: "Domain Services",
        description: "Die Domainregistrierung und -verwaltung für Ihre Online-Präsenz.",
        icon: IconWorldWww,
        id: "domains",
        type: "yearly",
        packages: [
            {
                name: "Basic",
                price: 20,
                mostPopular: true,
                description: "Ideal für kleine Websites.",
                features: [
                    "1 Domain Registration",
                    "Free DNS Management",
                    "Email Forwarding"
                ]
            },
            {
                name: "Business",
                price: 100,
                description: "Für mittelgroße Websites.",
                features: [
                    "5 Domain Registrations",
                    "Free DNS Management",
                    "Email Forwarding",
                    "URL Forwarding"
                ]
            },
            {
                name: "Enterprise",
                price: 999,
                description: "Für große Websites und Unternehmen.",
                features: [
                    "25 Domain Registrations",
                    "Free DNS Management",
                    "Email Forwarding",
                    "URL Forwarding",
                    "Priority Support"
                ]
            }
        ]
    },
    {
        name: "Maintenance",
        description: "Regelmäßige Wartung und Updates für Ihre WordPress-Website.",
        icon: Wrench,
        id: "maintenance",
        type: "yearly",
        packages: [
            {
                name: "Basic",
                price: 50,
                description: "Ideal für kleine Websites.",
                features: [
                    "2 Mal Updates pro Jahr",
                    "1 Mal Backups pro Jahr",
                ]
            },
            {
                name: "Business",
                price: 99,
                mostPopular: true,
                description: "Für mittelgroße Websites.",
                features: [
                    "4 Mal Updates pro Jahr",
                    "2 Mal Backups pro Jahr",
                    "Security Monitoring",
                    "Performance Optimization"
                ]
            },
            {
                name: "Enterprise",
                price: 199,
                description: "Für große Websites und Unternehmen.",
                features: [
                    "Monatliche Updates",
                    "Monatliche Backups",
                    "Security Monitoring",
                    "Performance Optimization",
                    "SEO Optimization",
                ]
            }
        ]
    },
    {
        name: "Support",
        description: "24/7 Support für alle unsere Dienstleistungen.",
        icon: Shield,
        id: "support",
        type: "monthly",
        packages: [
            {
                name: "Basic",
                price: 29,
                description: "Ideal für kleine Websites.",
                features: [
                    "Email Support",
                    "Response Time: 24 hours"
                ]
            },
            {
                name: "Business",
                price: 79,
                mostPopular: true,
                description: "Für mittelgroße Websites.",
                features: [
                    "Email and Chat Support",
                    "Response Time: 12 hours"
                ]
            },
            {
                name: "Enterprise",
                price: 199,
                description: "Für große Websites und Unternehmen.",
                features: [
                    "Email, Chat, and Phone Support",
                    "Response Time: 1 hour"
                ]
            }
        ]
    }
]

export const FEATURES = [
    {
        title: "Blitzschnelle",
        icon: Zap,
        description: "Optimierte Server und fortschrittliche Caching-Mechanismen sorgen dafür, dass Ihre WordPress-Seiten in Millisekunden geladen werden. Unsere Infrastruktur ist für maximale Leistung optimiert."
    },
    {
        title: "Verbesserte Sicherheit",
        icon: Shield,
        description: "Unternehmensgrade Firewalls, Echtzeit-Bedrohungserkennung und automatisierte Malware-Scans schützen Ihre Websites rund um die Uhr."
    },
    {
        title: "Regelmässige Backups",
        icon: Clock,
        description: "Automatisierte tägliche Backups sorgen dafür, dass Ihre Daten immer sicher sind. Wiederherstellung mit einem Klick bei Bedarf."
    },
    {
        title: "Experten Support",
        icon: HeartHandshake,
        description: "Unser Team von WordPress-Experten steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei allen Fragen und Problemen zu helfen."
    },
    // {
    //     title: "Schweizer Infrastruktur",
    //     icon: Server,
    //     description: "Unsere Server befinden sich in der Schweiz und bieten höchste Sicherheits- und Datenschutzstandards."
    // }
]

export const QUESTIONS_AND_ANSWERS = [
    {
        question: "Wie erstelle ich einen Discord Account?",
        answer: " Folge dazu einfach diesem Link: [Erstelle Deinen Account](https://support.discord.com/hc/de/articles/360033931551-Erste-Schritte#h_01H4RR2GE2FAK7DZ5W3765NGVT)",
    },
    {
        question: "Was muss ich nach dem Beitrit tun?",
        answer: `
    - Folge den Anweisungen von Discord und gib dir die Rollen (Themen), die dich interessieren.
    - Verwende dann den Prefix-Command !verify, um dich generell zu verifizieren.
    - Wenn du darüber hinaus bereits Student der HTWK bist, kannst du dir mit dem Slash-Command /verify-email einen Code per Hochschul-E-Mail-Adresse schicken lassen und ihn dann mit /verify-token auf dem Discord Server verifizieren.
        `,
    },
    {
        question: "Wer sind die Developer des Projekts?",
        answer: "• Paul - Discord Username: paul_pler </br> • [Colin](https://colin.heggli.dev/) - Discord Username: itadori </br> • Max - Discord Username: sifu_max",
    }
]


