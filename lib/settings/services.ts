import {IconBrandWordpress, IconWorldWww} from "@tabler/icons-react";
import {BookOpen, Mail, Shield, Wrench} from "lucide-react";

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
                price: 16,
                annualDiscount: .05,
                description: "Ideal für kleine Websites und Blogs.",
                setupFee: 300,
                features: [
                    "1 WordPress Installation",
                    "50GB SSD Storage",
                    "Gratis SSL Certificate",
                    "Wöchentliche Backups",
                    "1 Free *.alpencloud.ch Domain",
                    "Alle Free Themes und Plugins",
                    "Weiter Themes & Plugins auf Anfrage"
                ]
            },
            {
                name: "Business",
                price: 21.90,
                annualDiscount: .07,
                setupFee: 400,
                mostPopular: true,
                description: "Für mittelgrosse Websites mit mehr Traffic.",
                features: [
                    "1 WordPress Installations",
                    "100GB SSD Storage",
                    "Free SSL Certificate",
                    "Tägliche Backups",
                    "1 Free *.alpencloud.ch Domain",
                    "Alle Free Themes und Plugins",
                    "Weiter Themes & Plugins auf Anfrage"
                ]
            },
            {
                name: "Enterprise",
                price: 49,
                annualDiscount: .09,
                setupFee: 600,
                description: "Für grosse Websites und E-Commerce-Shops.",
                features: [
                    "1 WordPress Installations",
                    "300GB SSD Storage",
                    "Free SSL Certificate",
                    "Tägliche Backups",
                    "1 Free *.alpencloud.ch Domain",
                    "Alle Free Themes und Plugins",
                    "Weiter Themes & Plugins auf Anfrage"
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
                price: 12,
                setupFee: 19,
                mostPopular: true,
                description: "Ideal für Einzelpersonen und kleine Unternehmen.",
                features: [
                    "10 Email Account",
                    "50GB Storage",
                    "Webmail Access",
                    "Spam Protection"
                ]
            },
            {
                name: "Business",
                price: 30,
                setupFee: 39,
                description: "Für mittelgrosse Unternehmen mit mehreren Benutzern.",
                features: [
                    "5 Email Accounts",
                    "25GB Storage",
                    "Webmail Access",
                    "Advanced Spam Protection"
                ]
            },
            {
                name: "Enterprise",
                price: 50,
                setupFee: 69,
                description: "Für grosse Unternehmen mit vielen Benutzern.",
                features: [
                    "Unlimited Email Accounts",
                    "300GB Storage",
                    "Webmail Access",
                    "Advanced Spam Protection",
                ]
            }
        ],
    },
    // {
    //     name: "Training",
    //     description: "WordPress-Training und Schulungen für alle Erfahrungsstufen.",
    //     icon: BookOpen,
    //     id: "training",
    //     type: "one-time",
    //     packages: [
    //         {
    //             name: "Basic",
    //             price: 99,
    //             description: "Einzeltraining für Anfänger.",
    //             features: [
    //                 "1 Stunden Training",
    //                 "Einzeltraining",
    //                 "Online",
    //                 "Zugang zu Schulungsmaterialien"
    //             ]
    //         },
    //         {
    //             name: "Business",
    //             price: 299,
    //             description: "Gruppentraining für Unternehmen.",
    //             mostPopular: true,
    //             features: [
    //                 "3 Stunden Training",
    //                 "Gruppentraining (max. 10 Personen)",
    //                 "Online oder vor Ort",
    //                 "Zugang zu Schulungsmaterialien",
    //                 "Zertifikat nach Abschluss"
    //             ]
    //         },
    //         {
    //             name: "Enterprise",
    //             price: 999,
    //             description: "Individuelles Training für Unternehmen.",
    //             features: [
    //                 "10 Stunden Training",
    //                 "Individuelles Training",
    //                 "Online oder vor Ort",
    //                 "Zugang zu Schulungsmaterialien",
    //                 "Zertifikat nach Abschluss",
    //                 "Follow-up Support"
    //             ]
    //         }
    //     ]
    // },
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
                setupFee: 15,
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
                price: 80,
                setupFee: 30,
                description: "Für mittelgrosse Websites.",
                features: [
                    "5 Domain Registrations",
                    "Free DNS Management",
                    "Email Forwarding",
                    "URL Forwarding"
                ]
            },
            {
                name: "Enterprise",
                price: 400,
                setupFee: 50,
                description: "Für grosse Websites und Unternehmen.",
                features: [
                    "25 Domain Registrations",
                    "Free DNS Management",
                    "Email Forwarding",
                    "URL Forwarding",
                ]
            }
        ]
    },
    {
        name: "Maintenance",
        description: "Regelmässige Wartung und Updates für Ihre WordPress-Website.",
        icon: Wrench,
        id: "maintenance",
        type: "yearly",
        packages: [
            {
                name: "Basic",
                price: 69,
                description: "Ideal für kleine Websites.",
                features: [
                    "2 Mal Updates pro Jahr",
                    "1 Mal Backups pro Jahr",
                ]
            },
            {
                name: "Business",
                price: 119,
                mostPopular: true,
                description: "Für mittelgrosse Websites.",
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
                description: "Für grosse Websites und Unternehmen.",
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
                price: 0,
                description: "Ideal für kleine Websites.",
                features: [
                    "Email Support",
                    "Antwortzeit: 5 Werkstage"
                ]
            },
            {
                name: "Priority 2",
                price: 15,
                mostPopular: true,
                description: "Ideal für kleine Websites und kleine Unternehmen.",
                features: [
                    "Email Support",
                    "Antwortzeit: 24 Stunden"
                ]
            },
            {
                name: "Priority 1",
                price: 30,
                description: "Ideal für mittelgrosse Websites und Unternehmen.",
                features: [
                    "Email Support",
                    "Antwortzeit: 12 Stunden"
                ]
            },
            // {
            //     name: "Business",
            //     price: 79,
            //     mostPopular: true,
            //     description: "Für mittelgrosse Websites.",
            //     features: [
            //         "Email and Chat Support",
            //         "Response Time: 12 hours"
            //     ]
            // },
            // {
            //     name: "Enterprise",
            //     price: 199,
            //     description: "Für grosse Websites und Unternehmen.",
            //     features: [
            //         "Email, Chat, and Phone Support",
            //         "Response Time: 1 hour"
            //     ]
            // }
        ]
    },
    {
        name: "Website Anpasungen",
        description: "Professionelle Anpassungen und Erweiterungen für Ihre Website.",
        icon: Wrench,
        id: "customizations",
        type: "one-time",
        packages: [
            {
                name: "Basic",
                price: 60,
                description: "Einmalige Anpassungen an Ihrer Website.",
                features: [
                    "1 Stunde Anpassungen",
                    "Design-Änderungen",
                    "Funktionalitäts-Erweiterungen",
                ]
            },
            {
                name: "Business",
                price: 169,
                mostPopular: true,
                description: "Umfassende Anpassungen und Erweiterungen.",
                features: [
                    "3 Stunden Anpassungen",
                    "Design-Änderungen",
                    "Funktionalitäts-Erweiterungen",
                    "SEO-Optimierung",
                ]
            },
            {
                name: "Enterprise",
                price: 499,
                description: "Individuelle Anpassungen und Erweiterungen.",
                features: [
                    "10 Stunden Anpassungen",
                    "Design-Änderungen",
                    "Funktionalitäts-Erweiterungen",
                    "SEO-Optimierung",
                    "Performance-Optimierung",
                    "Monatliche Updates",
                ]
            }
        ]
    }
]