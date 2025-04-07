"use client";

import {Check} from "lucide-react";
import {Service, ServicePackage} from "@/lib/settings/services";
import {cn, formatPrice} from "@/lib/utils";
import {useState} from "react";
import Link from "next/link";

export const Plans = ({service, annual}: { service: Service, annual: boolean }) => {
    const [isAnnual, setIsAnnual] = useState(annual);

    const showSwitcher = service.type === 'monthly';

    return (
        <div key={service.name} className="mb-20 text-center">
            <h2 className={cn("text-3xl font-bold text-white",
                {
                    "mb-4": service.type === "monthly",
                    "mb-12": service.type !== "monthly",
                }
            )}
                id={service.id}
            >{service.name}</h2>

            {showSwitcher && (
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-800/50 p-1 rounded-full inline-flex relative mb-2">
                        <button
                            className={`px-4 py-1 rounded-full transition-all relative z-10 ${!isAnnual ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                            onClick={() => setIsAnnual(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-1 rounded-full transition-all relative z-10 ${isAnnual ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                            onClick={() => setIsAnnual(true)}
                        >
                            Annual
                        </button>
                        <div
                            className={`absolute inset-0 m-1 rounded-full bg-red-600 transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-[100%]' : 'translate-x-0'}`}
                            style={{width: 'calc(50% - 4px)'}}
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                 style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                {
                    service.packages.map((plan) => (
                        <div key={plan.name} className="w-full">
                            <Plan
                                plan={plan}
                                annual={isAnnual || service.type === 'yearly' ? true : isAnnual}
                                oneTime={service.type === 'one-time'}
                                yearly={service.type === 'yearly'}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const Plan = ({plan, annual, oneTime, yearly}: { plan: ServicePackage, annual: boolean, oneTime: boolean, yearly: boolean }) => {
    const price = yearly ? plan.price : formatPrice(annual
        ? plan.price * 12 * (1 - (plan.annualDiscount ?? 0))
        : plan.price);

    return (
        <div
            className={cn("p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] relative flex flex-col h-full", {
                "scale-105": plan.mostPopular,
            })}>
            {
                plan.mostPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                    </div>
                )
            }
            <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
            <div className="text-3xl font-bold text-red-400 mb-6 flex gap-2 items-center justify-center">
                <div className={cn("text-4xl font-bold text-red-400 mb-2 flex")}>
                    {price == "0" ? 'Free' : price}
                    <div
                        className={"flex items-start justify-center flex-col text-xs text-gray-300 font-normal ml-1"}>

                        {price !== "0" && <span>CHF</span>}
                        {!oneTime && price !== "0" &&
                            <span>{annual ? "/Jahr" : "/Monat"}</span>
                        }
                    </div>
                </div>
                {
                    !oneTime && plan.annualDiscount && annual ? (
                        <span className="text-sm bg-red-600/20 text-red-400 px-2 py-1 rounded-full mb-2">
                            {(plan.annualDiscount * 100).toFixed(0)}%
                        </span>
                    ) : null
                }
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
                {
                    plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                            <Check className="h-5 w-5 text-red-400 mr-2"/>
                            {feature}
                        </li>
                    ))
                }
            </ul>
            {!oneTime && plan.setupFee && (
                <div className="text-sm text-gray-300 mb-4">
                    <span className="font-medium">Einrichtungsgebühr:</span> {plan.setupFee} CHF
                </div>
            )}
            <Link
                href="mailto:sales@alpencloud.ch"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all mt-auto">
                Anfrage senden
            </Link>
        </div>
    );
}
