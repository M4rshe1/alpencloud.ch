"use client";

import Image from "next/image";
import Link from "next/link";
import {REFERENCES} from "@/lib/settings/references";

const ReferencesPage = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-white text-center mb-8">
                Unsere Referenzen
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {REFERENCES.map((reference) => (
                    <ReferenceCard key={reference.title} reference={reference} />
                ))}
            </div>
        </div>
    );
};

interface ReferenceCardProps {
    reference: {
        title: string;
        description: string;
        image: string;
        link: string;
        tags: string[];
    };
}

const ReferenceCard = ({ reference }: ReferenceCardProps) => {
    return (
        <div className="rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] flex flex-col h-full">
            <Image
                src={reference.image}
                alt={reference.title}
                width={500}
                height={300}
                className="rounded-t-2xl object-cover h-72 w-full"
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{reference.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{reference.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                    {reference.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-red-600/20 text-red-400 px-2 py-1 rounded-full text-sm"
                        >
              {tag}
            </span>
                    ))}
                </div>
                <Link
                    href={reference.link}
                    className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all mt-auto text-center"
                >
                    Seite Besuchen
                </Link>
            </div>
        </div>
    );
};

export default ReferencesPage;
