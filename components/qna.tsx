"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {QUESTIONS_AND_ANSWERS} from "@/lib/settings/qna";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const QuestionAndAnswers = () => {
    return (
        <>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Fragen und <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">Antworten</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen, Preisen und mehr. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns zu kontaktieren.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4 max-w-7xl mx-auto">
                {QUESTIONS_AND_ANSWERS.map((qa, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                    >
                        <AccordionTrigger className="text-left px-6 font-semibold text-white hover:text-red-200 transition-colors">
                            {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-300">
                            <div className="markdown prose prose-invert max-w-none prose-a:text-red-300 prose-a:hover:text-red-200 prose-strong:text-red-200">
                                <Markdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        code({node, className, children, ...props}) {
                                            const match = /language-(\w+)/.exec(className || '');
                                            return match ? (
                                                <div className="relative">
                                                    <div className="absolute right-2 top-2 flex items-center">
                                                        <span className="text-xs text-gray-400 mr-2">{match[1]}</span>
                                                        <button
                                                            onClick={(e) => {
                                                                navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
                                                                // @ts-ignore
                                                                e.target.innerText = "Copied!";
                                                                setTimeout(() => {
                                                                    // @ts-ignore
                                                                    e.target.innerText = "Copy";
                                                                }, 2000);
                                                            }}
                                                            className="text-xs bg-red-500/30 hover:bg-red-500/50 text-white rounded px-2 py-1 transition-colors"
                                                            aria-label="Copy code"
                                                        >
                                                            Copy
                                                        </button>
                                                    </div>
                                                    {/* @ts-ignore */}
                                                    <SyntaxHighlighter
                                                        style={atomDark as any}
                                                        language={match[1]}
                                                        PreTag="div"
                                                        className="rounded-md border border-red-500/20 pt-10"
                                                        {...props}
                                                    >
                                                        {String(children).replace(/\n$/, '')}
                                                    </SyntaxHighlighter>
                                                </div>
                                            ) : (
                                                <code className={`${className} bg-red-900/20 text-red-200`} {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                    }}
                                >
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