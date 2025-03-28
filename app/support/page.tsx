"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    HeadphonesIcon,
    MailIcon,
    Clock,
    MessageSquare,
    Send,
} from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(2, "Der Name muss mindestens 2 Zeichen lang sein"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    subject: z.string().min(1, "Bitte wählen Sie einen Betreff aus"),
    message: z.string().min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
});

const RECIPIENT_EMAIL = "support@alpencloud.ch";

export default function Support() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form values:", values); // Keep for debugging if needed

        const subject = `Support Request: ${values.subject}`;
        const body = `
Name: ${values.name}
Email: ${values.email}

Message:
${values.message}
    `;

        // Encode subject and body for the mailto link
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body.trim()); // Trim whitespace

        const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;

        console.log("Generated mailto link:", mailtoLink); // Keep for debugging

        window.location.href = mailtoLink;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Brauchen Sie{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">
            Hilfe?
          </span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Unser Team ist hier, um Ihnen bei Fragen oder Bedenken zu unseren
                    Dienstleistungen zu helfen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <HeadphonesIcon className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                        24/7 Support
                    </h3>
                    <p className="text-gray-400">
                        Unser Teams steht ihnen jederzeit zur Verfügung, um Ihre Fragen zu
                        beantworten.
                    </p>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <MailIcon className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Email Support
                    </h3>
                    <a
                        href={`mailto:${RECIPIENT_EMAIL}`}
                        className="hover:underlined text-red-400"
                    >
                        {RECIPIENT_EMAIL}
                    </a>
                </div>

                <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <Clock className="h-8 w-8 text-red-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Antwort Zeit
                    </h3>
                    <p className="text-gray-400">
                        Wir antworten auf Ihre Anfrage innerhalb von 5 Arbeitstagen. Für
                        schnelleren Support ist ein{" "}
                        <Link
                            href={"/services#support"}
                            className={"hover:underlined text-red-400"}
                        >
                            Support Upgrade
                        </Link>{" "}
                        nötig.
                    </p>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <>
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="h-6 w-6 text-red-400" />
                            <h2 className="text-2xl font-semibold text-white">
                                Kontaktieren sie uns
                            </h2>
                        </div>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your name"
                                                    className="bg-gray-800/50 border-red-500/20 text-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="your.email@example.com"
                                                    className="bg-gray-800/50 border-red-500/20 text-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Betreff</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="bg-gray-800/50 border-red-500/20 text-white">
                                                        <SelectValue placeholder="Select a subject" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="general">
                                                        Generelle Anfrage
                                                    </SelectItem>
                                                    <SelectItem value="technical">
                                                        Technische Unterstützung
                                                    </SelectItem>
                                                    <SelectItem value="billing">
                                                        Rechnungsanfrage
                                                    </SelectItem>
                                                    <SelectItem value="sales">Vertrieb</SelectItem>
                                                    <SelectItem value="other">Sonstiges</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-white">Nachricht</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="How can we help you?"
                                                    className="bg-gray-800/50 border-red-500/20 text-white min-h-[150px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                                >
                                    <Send className="h-5 w-5" />
                                    Nachricht senden
                                </Button>
                            </form>
                        </Form>
                    </>
                </div>
            </div>
        </div>
    );
}
