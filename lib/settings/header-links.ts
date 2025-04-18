import {Home, Info, LucideIcon, Mail, MessageCircleQuestion, Scale, Server, Shield, Users, Wrench} from "lucide-react";
import {IconBrandWordpress, IconWorldWww, TablerIcon} from "@tabler/icons-react";

export interface HeaderLink {
    title: string;
    description?: string;
    href: string;
    icon: LucideIcon | TablerIcon;
    banner?: boolean;
    whiteButton?: boolean;
    submenu?: HeaderLink[];
}

export const HEADER_LINKS: HeaderLink[] = [
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
                icon: MessageCircleQuestion,
                href: "/faq"
            }
        ]
    },
    {
        title: "Über uns",
        href: "/about",
        icon: Info,
        submenu: [
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
                href: "/dataprotection"
            },
            {
                title: "Impressum",
                description: "Rechtliche Informationen über AlpenCloud",
                icon: Scale,
                href: "/impressum"
            },
            {
                title: "Wieso AlpenCloud?",
                banner: true,
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
                banner: true,
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
            // {
            //     title: "Training",
            //     description: "WordPress-Training und Schulungen für alle Erfahrungsstufen",
            //     icon: BookOpen,
            //     href: "/services#training"
            // },
            {
                title: "Domain Services",
                description: "Die Domainregistrierung und -verwaltung für Ihre Online-Präsenz",
                icon: IconWorldWww,
                href: "/services#domains"
            },
            {
                title: "Maintenance",
                description: "Regelmässige Wartung und Updates für Ihre WordPress-Website",
                icon: Wrench,
                href: "/services#maintenance"
            }
        ]
    },
];