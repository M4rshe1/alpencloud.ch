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