"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from "next/link";
import { useMemo, useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { FiArrowRight, FiPlus } from "react-icons/fi";

interface QandAProps {
    index: number;
    activeIndeces: number[];
    question: string;
    answer: string;
    expandAnswer: () => void;
    collapseAnswer: () => void;
};

interface ResourcesAndQuestionsProps {
    resourcesSection: {
        title: string;
        links: {
            text: string;
            link: string;
        }[];
        moreIdeasLink: string;
    };
    faqSection: {
        title: string;
        faqs: {
            question: string;
            answer: string;
        }[];
        moreFAQsLink: string;
    };
};

export default function ResourcesAndQuestions({ resourcesSection, faqSection }: ResourcesAndQuestionsProps) {
    const [activeQuestionIndeces, setActiveQuestionIndeces] = useState<number[]>([]);

    const expandAnswer = (index: number) => {
        if (activeQuestionIndeces.includes(index)) return;
        setActiveQuestionIndeces([...activeQuestionIndeces, index]);
    };

    const collapseAnswer = (index: number) => {
        setActiveQuestionIndeces(activeQuestionIndeces.filter((activeIndex) => activeIndex !== index));
    };

    return (
        <div className="px-10 bg-gray-50">
            <section className="mx-auto max-w-lg w-full pt-24 pb-10">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter">
                        <span>{resourcesSection.title}</span>
                    </h3>
                    <a href={resourcesSection.moreIdeasLink} className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More ideas</span>
                        <FaArrowRight size={16} />
                    </a>
                </div>
                <ul className="mt-12 flex gap-5">
                    {
                        resourcesSection.links.map(({ text, link }) => (
                            <li key={text} className="flex-1">
                                <Link href={link} className="flex items-center gap-10 p-8 h-full rounded-xl bg-white outline-2 outline-transparent hover:outline-gray-300">
                                    <span className="flex-1 text-lg font-semibold tracking-tighter">{text}</span>
                                    <FiArrowRight size={24} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className="mx-auto max-w-lg w-full pt-24 pb-20">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter">
                        <span>{faqSection.title}</span>
                    </h3>
                    <a href={faqSection.moreFAQsLink} className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More FAQs</span>
                        <FaArrowRight size={16} />
                    </a>
                </div>
                <ul className="mt-10 flex flex-col gap-4">
                    {
                        faqSection.faqs.map((faq, index) => (
                            <QuestionAndAnswer 
                                {...faq} 
                                key={faq.question} 
                                index={index}
                                activeIndeces={activeQuestionIndeces}  
                                expandAnswer={() => expandAnswer(index)}
                                collapseAnswer={() => collapseAnswer(index)}
                            />
                        ))
                    }
                </ul>
            </section>
        </div>
    )
};

function QuestionAndAnswer({ question, answer, index, activeIndeces, expandAnswer, collapseAnswer }: QandAProps) {
    const isExpanded = useMemo(() => activeIndeces.includes(index), [activeIndeces]);

    return (
        <motion.li className="flex flex-col gap-4 rounded-2xl bg-white">
            <div className={`flex-1 flex justify-between items-center gap-8 p-6 border-b ${isExpanded ? 'border-gray-100' : 'border-transparent'}`}>
                <h4 className="font-semibold tracking-tighter text-xl"><span>{question}</span></h4>
                <button 
                    onClick={isExpanded ? collapseAnswer : expandAnswer} 
                    className={`${isExpanded ? 'rotate-45' : ''} flex items-center justify-center w-12 hover:bg-gray-100 rounded-full aspect-square transition-transform duration-500 ease-expo`}
                >
                    <FiPlus size={20} />
                </button>
            </div>
            {
                isExpanded ?
                    <AnimatePresence>
                        <motion.div
                            layout
                            exit={{ height: '0' }}
                            initial={{ height: '0' }} 
                            animate={{ height: 'auto' }}
                            transition={{ duration: 1, ease: [0.16, 1, .3, 1]}}
                            className="overflow-hidden"
                        >
                            <p className="text-lg max-w-[80ch] tracking-tighter px-6 pb-8"><span>{answer}</span></p>
                        </motion.div>
                    </AnimatePresence> :
                    null
            }
        </motion.li>
    )
}