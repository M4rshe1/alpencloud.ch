"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {QUESTIONS_AND_ANSWERS} from "@/lib/settings"
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
                    Founded in the heart of the Swiss Alps, we combine Swiss precision with cutting-edge hosting technology to deliver exceptional WordPress hosting solutions.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {QUESTIONS_AND_ANSWERS.map((qa, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-background/60 rounded-lg backdrop-blur-sm border border-border"
                    >
                        <AccordionTrigger className="text-left px-6 text-foreground hover:text-primary">
                            {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
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