"use client";

import { useRef } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { smilingYouth2 } from '@/app/_assets/images';

import { POINTS_2 } from '@/app/_assets/data';

export default function Description2() {
    const descriptionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: descriptionRef,
        offset: ['end end', 'end start']
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <div ref={descriptionRef} className="bg-white">
            <motion.div 
                style={{ 
                    scale, 
                    y,
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius
                 }} 
                className="px-4 xs:px-6 sm:px-10 bg-dark-green rounded-b-[64px]"
            >
                <section className="mx-auto overflow-clip max-w-lg w-full flex flex-row-reverse gap-6 lg:gap-10">
                    <div className="py-40 flex flex-col gap-30">
                        <div className="flex min-h-[50vh] flex-col gap-10">
                            <h2 className="max-w-[12ch] text-4xl lg:text-6xl font-bold tracking-tighter"><span className="text-purple-300">Secure Fundraising: Vetted campaigns, protected funds</span></h2>
                            <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
                                <p className="max-w-[48ch]"><span className="font-semibold text-lg lg:text-2xl tracking-tighter max-w-[8ch] text-purple-300/90">Launch your fundraiser without delay and begin receiving contributions immediately. FundDreamz makes starting simple and straightforward.</span></p>
                                <button className="mb-2 w-fit flex items-center justify-center px-6 h-10 lg:h-12 rounded-full bg-purple-300 text-dark-green">
                                    <span className="text-sm lg:text-base font-semibold tracking-tighter whitespace-nowrap">Learn more</span>
                                </button>
                            </div>
                        </div>
                        <div className="min-h-screen justify-end flex flex-col gap-20">
                            <p className="max-w-[28ch] text-2xl lg:text-5xl font-semibold">
                                <span className="text-purple-300/80 tracking-tighter">
                                    <span>Our rigorous vetting process ensures only <span className="text-purple-300">legitimate fundraisers are active</span>. We implement robust <span className="text-purple-300">security measures</span> to safeguard all funds, deterring fraudulent activities effectively.</span>
                                </span>
                            </p>
                            <div className="flex items-center gap-4 lg:gap-8">
                                {
                                    POINTS_2.map(({ title, subTitle }) => (
                                        <div key={title} className="flex flex-col gap-1">
                                            <span className="text-purple-300 text-2xl lg:text-4xl font-semibold tracking-tighter">{title}</span>
                                            <span className="text-purple-300/80 text-lg lg:text-2xl font-semibold tracking-tighter">{subTitle}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-end items-end">
                        <div className='sticky -bottom-1 h-fit mt-20 w-full'>
                            <div className="opacity-0 absolute top-0 left-0 flex flex-col gap-2">
                                <span className="ml-8 flex items-center justify-center w-80 h-20 rotate-6 rounded-full bg-white">

                                </span>
                                <span className="flex items-center justify-center w-80 h-20 -rotate-6 rounded-full bg-white">

                                </span>
                                <span className="ml-8 flex items-center justify-center w-80 h-20 rotate-[3deg] rounded-full bg-white">

                                </span>
                            </div>
                            <div className="rounded-[80px] overflow-hidden absolute -top-4 -left-4 lg:-left-6 w-full h-[calc(100%_-_20px)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-purple-300 before:rounded-[80px]">
                                <Image src={smilingYouth2} alt="Shadow image of a youth" height={720} width={640} className="absolute top-0 left-0 w-110 h-auto grayscale-[100%] brightness-[200%] contrast-[0%] sepia-[100%]" />
                            </div>
                            <Image src={smilingYouth2} alt="Image of a youth" height={720} width={640} className="z-2 relative block w-80 lg:w-110 h-auto grayscale" />
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
};