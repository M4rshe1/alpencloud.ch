"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {QUESTIONS_AND_ANSWERS} from "@/lib/settings/qna";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const QuestionAndAnswers = () => {
    return (
        <>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Fragen und <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-300">Antworten</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen, Preisen und mehr. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns zu kontaktieren.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {QUESTIONS_AND_ANSWERS.map((qa, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                    >
                        <AccordionTrigger className="text-left px-6 font-semibold text-white">
                            {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-400">
                            <div className="markdown prose prose-invert max-w-none">
                                <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                                    {qa.answer}
                                </Markdown>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

export default QuestionAndAnswers;