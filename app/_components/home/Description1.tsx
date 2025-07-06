"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const POINTS = [
    {
        title: "Funds",
        subTitle: "Secured and verified"
    },
    {
        title: "Start fundraisers",
        subTitle: "Without registering"
    },
]

export default function Description1() {
    const descriptionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ['start end', '10vh start']
    });
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0])

    return (
        <div className="bg-purple-300">
            <motion.div ref={descriptionRef} style={{ scale, y }} className="px-10 bg-green-200 overflow-clip rounded-t-4xl">
                <section className="mx-auto max-w-lg w-full min-h-screen flex gap-20">
                    <div className="pt-20 w-full sticky top-0 h-screen flex flex-col gap-20">
                        <p className="max-w-[28ch] text-2xl font-semibold">
                            <span className="text-dark-green/60 tracking-tighter">
                                <span>Benefit from a <span className="text-dark-green">seamless</span> and <span className="text-dark-green">secure</span> fundraising experience that requires <span className="text-dark-green">no upfront registration</span>. Your raised funds are protected every step of the way, ensuring peace of mind.</span>
                            </span>
                        </p>
                        <div className="flex items-center gap-8">
                            {
                                POINTS.map(({ title, subTitle }) => (
                                    <div key={title} className="flex flex-col gap-1">
                                        <span className="text-dark-green text-3xl font-semibold tracking-tighter">{title}</span>
                                        <span className="text-dark-green/60 text-lg font-semibold tracking-tighter">{subTitle}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pt-120 pb-20 flex flex-col gap-10">
                        <div className="flex gap-10 items-end flex-1">
                            <div className="flex flex-col gap-6">
                                <h2><span className="font-bold tracking-tighter text-6xl text-dark-green">Effortless Fundraising: Start earning instantly</span></h2>
                                <p><span className="font-semibold text-2xl tracking-tighter max-w-[8ch] text-dark-green/60"> Launch your fundraiser without delay and begin receiving contributions immediately. FundDreamz makes starting simple and straightforward.</span></p>
                            </div>
                            <button className="mb-2 flex items-center justify-center px-6 h-12 rounded-full bg-dark-green text-green-200">
                                <span className="font-semibold tracking-tighter whitespace-nowrap">Learn more</span>
                            </button>
                        </div>

                        <div className="relative min-h-[calc(100vh_-_100px)] shadow-xl shadow-black/5">
                            <div className="absolute top-0 -left-4 bg-white rounded-3xl h-full w-[120%]"></div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}