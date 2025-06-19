"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { POINTS } from '@/app/assets/data';


export default function Description2() {
    const descriptionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ['start end', 'end start']
    });
    const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]);
    const translateY = useTransform(scrollYProgress, [0.7, 1], [0, -100]);

    return (
        <div className='bg-green-200'>
            <motion.div style={{ scale, y: translateY }} className="px-10 bg-dark-green rounded-b-4xl overflow-clip">
                <section className="mx-auto max-w-lg w-full min-h-screen flex gap-20">
                    <div className="pt-120 pb-20 flex flex-col gap-10">
                        <div className="flex gap-10 items-end flex-1">
                            <div className="flex flex-col gap-6">
                                <h2><span className="font-bold tracking-tighter text-6xl text-green-200/80">Secure Fundraising: Vetted campaigns, protected funds</span></h2>
                                <p><span className="font-semibold text-2xl tracking-tighter max-w-[8ch] text-green-200/60"> Launch your fundraiser without delay and begin receiving contributions immediately. FundDreamz makes starting simple and straightforward.</span></p>
                            </div>
                            <button className="mb-2 flex items-center justify-center px-6 h-12 rounded-full bg-green-200 text-dark-green">
                                <span className="font-semibold tracking-tighter whitespace-nowrap">Learn more</span>
                            </button>
                        </div>

                        <div className="relative min-h-[calc(100vh_-_100px)] shadow-xl shadow-black/5">
                            <div className="absolute top-0 -right-4 bg-white rounded-3xl h-full w-[120%]"></div>
                        </div>
                    </div>
                    <div className="pt-20 w-full sticky top-0 h-screen flex flex-col gap-20">
                        <p className="max-w-[28ch] text-2xl font-semibold">
                            <span className="text-green-600/60 tracking-tighter">Our rigorous vetting process ensures only <span className="text-green-200/80">legitimate fundraisers are active</span>. We implement robust <span className="text-gry-600">security measures</span> to safeguard all funds, deterring fraudulent activities effectively.</span>
                        </p>
                        <div className="flex items-center gap-8">
                            {
                                POINTS.map(({ title, subTitle }) => (
                                    <div key={title} className="flex flex-col gap-1">
                                        <span className="text-green-200/80 text-3xl font-semibold tracking-tighter">{title}</span>
                                        <span className="text-green-200/60 text-lg font-semibold tracking-tighter">{subTitle}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}