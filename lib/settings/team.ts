import {Globe} from "lucide-react";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

export const TEAM = [
    {
        name: "Colin Heggli",
        role: "CEO & Gründer",
        description: "20+ Jahre Erfahrung in Webhosting und Infrastrukturmanagement.",
        image: "/images/team/colin.jpg",
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
        image: "/images/team/raffael.jpg",
        description: "WordPress-Kernmitarbeiter und Sicherheitsspezialist mit 15 Jahren Erfahrung.",
        socials: [
            {
                icon: IconBrandLinkedin,
                href: "https://www.linkedin.com/in/raffael-sch%C3%A4ren-87165b26a/"
            }
        ]
    }
]



