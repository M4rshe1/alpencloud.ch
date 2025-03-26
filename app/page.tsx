"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import WhyBanner from "@/components/why-banner";

export default function Home() {
    return (
        <>
            <Hero/>
            <div className={"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 px-4 space-y-16"}>
                <About/>
                <WhyBanner/>
            </div>
        </>
    );
}