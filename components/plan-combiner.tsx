"use client";

import {useMemo, useState} from "react";
import {Service, ServicePackage, SERVICES} from "@/lib/settings/services";
import {Select, SelectContent, SelectItem, SelectTrigger,} from "@/components/ui/select";
import {Button} from "@/components/ui/button"; // Import Button component
import {RotateCcw, Send} from "lucide-react"; // Import an icon for the button

// Interface remains the same
interface SelectedPackage extends ServicePackage {
    serviceId: string;
    serviceType: "monthly" | "yearly" | "one-time";
}

// Constant for the "None" value in Select
const NONE_VALUE = "__NONE__";

export function PlanCombiner() {
    const [selectedPackages, setSelectedPackages] = useState<SelectedPackage[]>(
        [],
    );

    // Unified handler for Select changes
    const handleSelectChange = (value: string, service: Service) => {
        const selectedPackageName = value;

        setSelectedPackages((prevSelected) => {
            const otherPackages = prevSelected.filter(
                (p) => p.serviceId !== service.id,
            );

            if (selectedPackageName !== NONE_VALUE) {
                const selectedPkg = service.packages.find(
                    (pkg) => pkg.name === selectedPackageName,
                );
                if (selectedPkg) {
                    return [
                        ...otherPackages,
                        {
                            ...selectedPkg,
                            serviceId: service.id,
                            serviceType: service.type,
                        },
                    ];
                }
            }
            return otherPackages;
        });
    };

    // --- Reset Handler ---
    const handleReset = () => {
        setSelectedPackages([]);
    };

    const {
        totalMonthlyCost,
        totalYearlyCost,
        totalSetupFees,
        totalOneTimeCosts,
    } = useMemo(() => {
        let monthly = 0;
        let yearly = 0;
        let setup = 0;
        let oneTime = 0;

        selectedPackages.forEach((pkg) => {
            setup += pkg.setupFee || 0;
            if (pkg.serviceType === "monthly") {
                monthly += pkg.price;
                const annualPrice =
                    pkg.price * 12 * (1 - (pkg.annualDiscount || 0));
                yearly += annualPrice;
            } else if (pkg.serviceType === "yearly") {
                yearly += pkg.price;
                monthly += pkg.price / 12;
            } else if (pkg.serviceType === "one-time") {
                oneTime += pkg.price;
            }
        });

        return {
            totalMonthlyCost: monthly,
            totalYearlyCost: yearly,
            totalSetupFees: setup,
            totalOneTimeCosts: oneTime,
        };
    }, [selectedPackages]);

    const handleSendInquiry = () => {
        const recipientEmail = "info@alpencloud.ch";

        const subject = "Anfrage: Individuelles Service-Paket";

        let body =
            "Hallo,\n\n" +
            "ich interessiere mich für folgendes individuell zusammengestelltes Service-Paket:\n\n";

        selectedPackages.forEach((pkg) => {
            const service = SERVICES.find((s) => s.id === pkg.serviceId);
            body += `- ${service?.name || "Unbekannter Service"} - ${
                pkg.name
            }: ${formatCurrency(pkg.price)}`;
            if (pkg.serviceType === "monthly") body += "/Monat";
            if (pkg.serviceType === "yearly") body += "/Jahr";
            if (pkg.serviceType === "one-time") body += " einmalig";
            if (pkg.setupFee && pkg.setupFee > 0) {
                body += ` (+ ${formatCurrency(pkg.setupFee)} Setup)`;
            }
            body += "\n";
        });

        body += "\n--- Zusammenfassung der Kosten ---\n";
        if (totalSetupFees > 0 || totalOneTimeCosts > 0) {
            body += `Einmalige Kosten gesamt: ${formatCurrency(
                totalSetupFees + totalOneTimeCosts,
            )}\n`;
            if (totalSetupFees > 0) {
                body += `  (davon Setup: ${formatCurrency(totalSetupFees)})\n`;
            }
            if (totalOneTimeCosts > 0) {
                body += `  (davon einmalige Services: ${formatCurrency(
                    totalOneTimeCosts,
                )})\n`;
            }
        }
        body += `Effektive monatliche Kosten: ${formatCurrency(
            totalMonthlyCost,
        )} / Monat\n`;
        body += `Effektive jährliche Kosten: ${formatCurrency(
            totalYearlyCost,
        )} / Jahr\n`;

        body +=
            "\nBitte kontaktieren Sie mich bezüglich dieser Auswahl oder senden Sie mir ein unverbindliches Angebot.\n\n" +
            "Mit freundlichen Grüssen,\n\n" +
            "[Ihr Name hier]\n" +
            "[Ihre Kontaktdaten hier]";

        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
    };

    const formatCurrency = (amount: number) => {
        return amount.toLocaleString("de-CH", {
            style: "currency",
            currency: "CHF",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-white text-center mb-10">
                Stellen Sie Ihre Pläne zusammen
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Wählen Sie pro Service-Kategorie eine Paketoption aus dem
                Dropdown-Menü, um Ihr individuelles Bundle zu erstellen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {" "}
                {SERVICES.map((service) => {
                    const currentSelection = selectedPackages.find(
                        (p) => p.serviceId === service.id,
                    );
                    const selectValue = currentSelection
                        ? currentSelection.name
                        : NONE_VALUE;

                    return (
                        <div
                            key={service.id}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] relative flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <service.icon className="w-5 h-5 mr-2 text-red-400"/>
                                {service.name}
                            </h3>
                            <div className="mt-auto">
                                <label htmlFor={service.id} className="sr-only">
                                    Paket für {service.name} auswählen
                                </label>
                                <Select
                                    name={service.id}
                                    value={selectValue}
                                    onValueChange={(value) => handleSelectChange(value, service)}
                                >
                                    <SelectTrigger
                                        className="w-full p-3 bg-gray-900/80 border border-gray-800 rounded-md text-white focus:border-red-400">
                    <span className="truncate">
                      {selectValue === NONE_VALUE
                          ? "-- Keine Auswahl --"
                          : selectValue}
                    </span>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={NONE_VALUE}>
                                            -- Keine Auswahl --
                                        </SelectItem>
                                        {service.packages.map((pkg) => (
                                            <SelectItem key={pkg.name} value={pkg.name}>
                                                {pkg.name} (
                                                {formatCurrency(pkg.price)}
                                                {service.type === "monthly" && "/Monat"}
                                                {service.type === "yearly" && "/Jahr"}
                                                {service.type === "one-time" && " einmalig"}
                                                {pkg.setupFee &&
                                                    ` + ${formatCurrency(pkg.setupFee)} Setup`}
                                                )
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedPackages.length > 0 && (
                <div className="text-center mb-12">
                    {" "}
                    <Button
                        variant="destructive"
                        onClick={handleReset}
                        className="bg-red-600 hover:bg-red-700 text-white"
                    >
                        <RotateCcw className="mr-2 h-4 w-4"/>
                        Auswahl zurücksetzen
                    </Button>
                </div>
            )}

            {selectedPackages.length > 0 && (
                <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                        Zusammenfassung Ihres individuellen Pakets
                    </h3>

                    <div className="space-y-3 mb-6 border-b border-gray-700 pb-6">
                        {selectedPackages.map((pkg) => {
                            const service = SERVICES.find((s) => s.id === pkg.serviceId);
                            return (
                                <div
                                    key={`${pkg.serviceId}-${pkg.name}`}
                                    className="flex justify-between items-start text-gray-300"
                                >
                  <span className="flex-1 mr-4">
                    {service?.name} - {pkg.name}
                  </span>
                                    <span className="text-right whitespace-nowrap">
                    {formatCurrency(pkg.price)}
                                        {pkg.serviceType === "monthly" && "/Monat"}
                                        {pkg.serviceType === "yearly" && "/Jahr"}
                                        {pkg.serviceType === "one-time" && " einmalig"}
                                        {pkg.setupFee && (
                                            <span className="block text-xs text-gray-400">
                        + {formatCurrency(pkg.setupFee)} Setup
                      </span>
                                        )}
                  </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-xl font-semibold text-white mb-4 text-center">
                            Gesamtkosten
                        </h4>

                        {(totalSetupFees > 0 || totalOneTimeCosts > 0) && (
                            <div
                                className="flex justify-between text-lg text-gray-300 border-b border-gray-800 pb-2 mb-2">
                <span className="font-medium text-white">
                  Einmalige Kosten gesamt:
                </span>
                                <span className="font-semibold">
                  {formatCurrency(totalSetupFees + totalOneTimeCosts)}
                </span>
                            </div>
                        )}
                        {totalSetupFees > 0 && (
                            <div className="flex justify-between text-sm text-gray-400 pl-4">
                                <span>Setup-Gebühren:</span>
                                <span>{formatCurrency(totalSetupFees)}</span>
                            </div>
                        )}
                        {totalOneTimeCosts > 0 && (
                            <div className="flex justify-between text-sm text-gray-400 pl-4">
                                <span>Einmalige Servicekosten:</span>
                                <span>{formatCurrency(totalOneTimeCosts)}</span>
                            </div>
                        )}
                        {(totalSetupFees > 0 || totalOneTimeCosts > 0) && (
                            <div className="pt-2"></div>
                        )}

                        <div className="flex justify-between text-xl text-gray-200">
              <span className="font-semibold text-white">
                Effektive monatliche Kosten:
              </span>
                            <span>{formatCurrency(totalMonthlyCost)} / Monat</span>
                        </div>
                        <div className="flex justify-between text-xl text-green-400">
              <span className="font-semibold text-white">
                Effektive jährliche Kosten:
              </span>
                            <span className="font-bold">
                {formatCurrency(totalYearlyCost)} / Jahr
              </span>
                        </div>
                        <div
                            className={`flex items-center justify-end`}
                        >
                            <Button
                                variant="destructive"
                                onClick={handleSendInquiry}
                                className="bg-red-600 hover:bg-red-700 text-white mt-6 flex items-center justify-center"
                            >
                                <Send className={"mr-2 h-4 w-4"}/>
                                Unverbindliche Anfrage senden
                            </Button>
                        </div>
                        <p className="text-sm text-gray-400 pt-4 text-center">
                            Hinweis: Monatliche Kosten sind Schätzungen (inkl. anteiliger
                            Jahrespläne). Jährliche Kosten beinhalten Rabatte. Alle Preise
                            in CHF.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
