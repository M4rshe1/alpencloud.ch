"use client";

import {useState, useMemo} from "react"; // Import ChangeEvent
import {SERVICES, Service, ServicePackage} from "@/lib/settings/services";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";

// Interface bleibt gleich
interface SelectedPackage extends ServicePackage {
    serviceId: string;
    serviceType: "monthly" | "yearly" | "one-time";
}

// Konstante für den "Keine"-Wert im Select
const NONE_VALUE = "__NONE__";

export function PlanCombiner() {
    const [selectedPackages, setSelectedPackages] = useState<SelectedPackage[]>(
        [],
    );

    // Einheitlicher Handler für Select-Änderungen
    const handleSelectChange = (
        event: string,
        service: Service,
    ) => {
        const selectedPackageName = event;

        setSelectedPackages((prevSelected) => {
            // 1. Filtere alle vorhandenen Pakete für den *gleichen Service* heraus
            const otherPackages = prevSelected.filter(
                (p) => p.serviceId !== service.id,
            );

            // 2. Prüfe, ob eine gültige Paketoption (nicht "Keine") ausgewählt wurde
            if (selectedPackageName !== NONE_VALUE) {
                // Finde das vollständige Paketobjekt basierend auf dem Namen
                const selectedPkg = service.packages.find(
                    (pkg) => pkg.name === selectedPackageName,
                );

                // Wenn das Paket gefunden wurde, füge es hinzu
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

            // Wenn "Keine" ausgewählt wurde oder das Paket nicht gefunden wurde (sollte nicht passieren),
            // gib nur die anderen Pakete zurück (effektiv wird das Paket für diesen Service entfernt)
            return otherPackages;
        });
    };

    // Berechnungslogik bleibt gleich
    const {totalMonthlyCost, totalYearlyCost, totalSetupFees, totalOneTimeCosts} =
        useMemo(() => {
            let monthly = 0;
            let yearly = 0;
            let setup = 0;
            let oneTime = 0;

            selectedPackages.forEach((pkg) => {
                setup += pkg.setupFee || 0;
                if (pkg.serviceType === "monthly") {
                    monthly += pkg.price;
                    const annualPrice = pkg.price * 12 * (1 - (pkg.annualDiscount || 0));
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

    const formatCurrency = (amount: number) => {
        return `$${amount.toFixed(2)}`;
    };

    return (
        <div className="mt-20 pt-10 border-t border-gray-700 mb-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
                Stellen Sie Ihre Pläne zusammen
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Wählen Sie pro Service-Kategorie eine Paketoption aus dem Dropdown-Menü, um Ihr individuelles Bundle zu
                erstellen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {SERVICES.map((service) => {
                    // Finde das aktuell ausgewählte Paket für diesen Service
                    const currentSelection = selectedPackages.find(
                        (p) => p.serviceId === service.id,
                    );
                    // Bestimme den Wert für das Select-Element
                    const selectValue = currentSelection ? currentSelection.name : NONE_VALUE;

                    return (
                        <div
                            key={service.id}
                            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)] relative flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                                <service.icon className="w-5 h-5 mr-2 text-red-400"/>
                                {service.name}
                            </h3>
                            <div
                                className="mt-auto"> {/* Sorgt dafür, dass Select unten ist, falls Beschreibung lang */}
                                <label htmlFor={service.id} className="sr-only"> {/* Screenreader Label */}
                                    Paket für {service.name} auswählen
                                </label>
                                <Select
                                    name={service.id}
                                    value={selectValue}
                                    onValueChange={(e) => handleSelectChange(e, service)}
                                >
                                    <SelectTrigger
                                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-red-400 focus:border-orange-500"
                                    >
                                        {selectValue === NONE_VALUE
                                            ? "-- Keine Auswahl --"
                                            : selectValue}
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={NONE_VALUE}>-- Keine Auswahl --</SelectItem>
                                        {service.packages.map((pkg) => (
                                            <SelectItem key={pkg.name} value={pkg.name}>
                                                {pkg.name} (
                                                {formatCurrency(pkg.price)}
                                                {service.type === "monthly" && "/Monat"}
                                                {service.type === "yearly" && "/Jahr"}
                                                {service.type === "one-time" && " einmalig"}
                                                {pkg.setupFee && ` + ${formatCurrency(pkg.setupFee)} Setup`}
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
                <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                        Zusammenfassung Ihres individuellen Pakets
                    </h3>
                    <div className="space-y-4 mb-6">
                        {selectedPackages.map((pkg) => (
                            <div
                                key={`${pkg.serviceId}-${pkg.name}`}
                                className="flex justify-between items-center text-gray-300 border-b border-gray-700 pb-2"
                            >
                <span>
                  {SERVICES.find((s) => s.id === pkg.serviceId)?.name} - {pkg.name}
                </span>
                                <span className="text-right">
                  {formatCurrency(pkg.price)}
                                    {pkg.serviceType === "monthly" && "/Monat"}
                                    {pkg.serviceType === "yearly" && "/Jahr"}
                                    {pkg.serviceType === "one-time" && " einmalig"}
                                    {pkg.setupFee && ` (+ ${formatCurrency(pkg.setupFee)} Setup)`}
                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center space-y-3">
                        {totalSetupFees > 0 && (
                            <p className="text-lg text-gray-300">
                                <span
                                    className="font-semibold text-white">Gesamte Setup-Gebühren:</span> {formatCurrency(totalSetupFees)}
                            </p>
                        )}
                        {totalOneTimeCosts > 0 && (
                            <p className="text-lg text-gray-300">
                                <span
                                    className="font-semibold text-white">Gesamte einmalige Servicekosten:</span> {formatCurrency(totalOneTimeCosts)}
                            </p>
                        )}
                        <p className="text-xl text-gray-200">
                            <span className="font-semibold text-white">Geschätzte monatliche Kosten:</span>{" "}
                            {formatCurrency(totalMonthlyCost)}/Monat
                        </p>
                        <p className="text-xl text-green-400">
                            <span
                                className="font-semibold text-white">Geschätzte jährliche Kosten (inkl. Rabatte):</span>{" "}
                            {formatCurrency(totalYearlyCost)}/Jahr
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Hinweis: Monatliche Kosten für jährliche Pläne sind Schätzungen (Preis / 12). Jährliche
                            Kosten beinhalten anwendbare Rabatte für monatliche Pläne bei jährlicher Zahlung.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
