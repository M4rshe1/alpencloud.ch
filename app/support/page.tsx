"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {HeadphonesIcon, MailIcon, Clock, MessageSquare, Send, CheckCircle2} from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Support() {
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        // Here you would typically send the form data to your backend
        console.log(values);
        setIsSubmitted(true);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Brauchen Sie <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Hilfe?</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    User Team ist hier, um Ihnen bei Fragen oder Bedenken zu unseren Dienstleistungen zu helfen.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div
                    className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <HeadphonesIcon className="h-8 w-8 text-red-400 mb-4"/>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-400">Our team is available around the clock to assist you with any
                        issues.</p>
                </div>

                <div
                    className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <MailIcon className="h-8 w-8 text-red-400 mb-4"/>
                    <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
                    <p className="text-gray-400">support@alpencloud.ch</p>
                </div>

                <div
                    className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    <Clock className="h-8 w-8 text-red-400 mb-4"/>
                    <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
                    <p className="text-gray-400">Average response time under 5 minutes</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
                <div
                    className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <CheckCircle2 className="h-16 w-16 text-red-400 mx-auto mb-4"/>
                            <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
                            <p className="text-gray-400">
                                We've received your message and will get back to you shortly.
                            </p>
                            <Button
                                className="mt-6 bg-red-600 hover:bg-red-700"
                                onClick={() => {
                                    setIsSubmitted(false);
                                    form.reset();
                                }}
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-3 mb-6">
                                <MessageSquare className="h-6 w-6 text-red-400"/>
                                <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your name"
                                                        className="bg-gray-800/50 border-red-500/20 text-white"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
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
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Subject</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger
                                                            className="bg-gray-800/50 border-red-500/20 text-white">
                                                            <SelectValue placeholder="Select a subject"/>
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
                                                        <SelectItem value="sales">
                                                            Vertrieb
                                                        </SelectItem>
                                                        <SelectItem value="other">
                                                            Other
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="text-white">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="How can we help you?"
                                                        className="bg-gray-800/50 border-red-500/20 text-white min-h-[150px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                                    >
                                        <Send className="h-5 w-5"/>
                                        Send Message
                                    </Button>
                                </form>
                            </Form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}