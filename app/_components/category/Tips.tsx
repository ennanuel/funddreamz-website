"use client";

import { useEffect, useRef, useState } from "react";

import { FaArrowRight, FaEarListen, FaQrcode } from "react-icons/fa6";
import { RiMicAiLine } from "react-icons/ri";
import { motion, PanInfo, useMotionValue, ResolvedValues, useTransform } from 'framer-motion';

interface Tip {
    heading: string;
    content: string;
};

interface TipsProps {
    title: string;
    tips: Tip[];
    moreTipsLink: string;
};

export default function Tips({ title, tips, moreTipsLink }: TipsProps) {
    const tipsContainerRef = useRef<HTMLUListElement>(null);
    const [leftConstraint, setLeftConstraint] = useState(0);

    const dragProgress = useMotionValue(0);
    const x = useTransform(dragProgress, (value: number) => `${Math.round((value - 1) * 100)}%`);

    const handleUpdate = (currentValue: ResolvedValues) => {
        console.log(currentValue.x);
        const newDragProgress = Math.min(1, Number(currentValue.x) / leftConstraint);
        dragProgress.set(newDragProgress);
    };

    useEffect(() => {
        if (!tipsContainerRef.current) return;
        const tipsContainerWidth = tipsContainerRef.current.offsetWidth;
        setLeftConstraint(tipsContainerWidth * -1);
    }, []);

    return (
        <div className="bg-white px-10 overflow-hidden">
            <section className="pt-20 pb-10 mx-auto max-w-lg w-full">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter max-w-[24ch]">
                        <span>{title}</span>
                    </h3>
                    <a href={moreTipsLink} className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More tips</span>
                        <FaArrowRight size={16} />
                    </a>
                </div>
                <div className="mt-12 max-w-lg w-full cursor-grab active:cursor-grabbing">
                    <motion.div drag="x" dragConstraints={{ left: leftConstraint , right: 0 }} onUpdate={handleUpdate}>
                        <ul ref={tipsContainerRef} className="grid grid-cols-[repeat(3,_45%)] gap-5">
                            {
                                tips.map(({ heading, content }, index) => (
                                    <li key={heading} className="flex flex-col p-8 bg-gray-50 rounded-4xl">
                                        <span className="w-16 aspect-square bg-gray-100 rounded-3xl flex items-center justify-center">
                                            {
                                                index === 0 ?
                                                    <FaEarListen size={32} /> :
                                                    index === 1 ?
                                                        <RiMicAiLine size={32} /> :
                                                        <FaQrcode size={32} />
                                            }
                                        </span>
                                        <h4 className="mt-6 text-2xl font-semibold tracking-tighter max-w-[24ch]">
                                            <span>{heading}</span>
                                        </h4>
                                        <p className="mt-8 tracking-tighter text-lg">
                                            <span>{content}</span>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                </div>
                <div className="mt-14 mx-auto w-full max-w-100 rounded-lg bg-gray-100 overflow-hidden">
                    <motion.span style={{ x }} className="block h-2.5 rounded-full w-full bg-main" />
                </div>
            </section>
        </div>
    )
}