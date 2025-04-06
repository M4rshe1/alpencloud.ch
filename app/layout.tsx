import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import {BANNERS} from "@/lib/settings/banners";
import PlausibleProvider from 'next-plausible'

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'AlpenCloud - Premium WordPress Hosting',
    description: 'Schweizer Qualität WordPress-Hosting-Lösungen mit unvergleichlicher Zuverlässigkeit und Leistung.',
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;

}) {
    return (
        <html lang="de">
        <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header/>
        <div style={{height: `${BANNERS.length * 36}px`}}/>
        <main
            className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 [&:has(>#hero:first-child)]:pt-16 [&:not(:has(>#hero:first-child))]:pt-24 pb-20 [&:not(:has(>#hero:first-child))]:px-4">
            <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN as string} selfHosted={true} customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST}>
            {children}
            </PlausibleProvider>
        </main>
        <Footer/>
        </body>
        </html>
    );
}