export interface Banners {
    title: string;
    link?: string;
    linkText?: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray"
}


export const BANNERS: Banners[] = [
    // {
    //     title: "⛔ Die Seite ist in Entwicklung. Wir nehmen aktuell keine Bestellungen an.",
    //     color: "red",
    //     link: "/",
    //     linkText: "Zurück zur Startseite",
    // },
]