"use client";
import { useEffect, useMemo, useRef, useState } from "react";

import { FaPlay } from "react-icons/fa";

import { DEMOS } from "../../_assets/data";
import { AnimatePresence, motion, useMotionValue, AnimationPlaybackControls, animate } from 'framer-motion';


const DURATION_IN_SECONDS = 5;

const opacityVariants = {
    hide: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

export default function Demo() {
    const controls = useRef<AnimationPlaybackControls>(null);
    const timeout = useRef<NodeJS.Timeout>(null);
    const [activeDemoIndex, setActiveDemoIndex] = useState(0);
    const activeDemo = useMemo(() => DEMOS[activeDemoIndex] || DEMOS[0], [activeDemoIndex]);

    const scaleX = useMotionValue(0);
    const stopAnimation = () => {
        if(controls.current) controls.current.stop()
    };
    const startAnimation = () => {
        controls.current = animate(scaleX, [0, 1], { duration: DURATION_IN_SECONDS, ease: 'linear' });
    };
    const resetAnimation = () => {
        stopAnimation();
        startAnimation();
    };
    const stopInterval = () => {
        if (timeout.current) clearTimeout(timeout.current);
    };
    const startInterval = () => {
        stopInterval();
        timeout.current = setInterval(nextActiveDemo, DURATION_IN_SECONDS * 1000);
    };
    const selectActiveDemo = (index: number) => {
        stopInterval();
        setActiveDemoIndex(index);
        startInterval();
        resetAnimation();
    };
    const nextActiveDemo = () => {
        setActiveDemoIndex((prevIndex) => {
            const nextIndex = prevIndex < (DEMOS.length - 1) ? prevIndex + 1 : 0;
            return nextIndex;
        });
        resetAnimation();
    };
    useEffect(() => {
        startAnimation();
        stopInterval();
        startInterval();

        return () => {
            stopInterval();
            stopAnimation();
        }
    }, [activeDemoIndex]);

    return (
        <div className="bg-green-300 px-10 overflow-hidden">
            <section className="mx-auto max-w-lg w-full min-h-screen pt-25 flex justify-between gap-20">
                <AnimatePresence mode="wait">
                    <div className="pb-20 flex-1 flex flex-col gap-6 justify-end">
                        <div className="flex flex-col gap-10">
                            <div className="overflow-hidden">
                                <motion.h3 
                                    key={activeDemoIndex}
                                    variants={opacityVariants}
                                    initial="hide"
                                    exit="hide"
                                    animate="show"
                                    className="font-bold text-2xl tracking-tighter"
                                >
                                    <span className="text-green-900">{activeDemo.title}</span>
                                </motion.h3>
                            </div>
                            <div className="overflow-hidden">
                                <motion.p 
                                    key={activeDemoIndex}
                                    variants={opacityVariants}
                                    initial="hide"
                                    exit="hide"
                                    animate="show"
                                    className="font-semibold max-w-[20ch] text-5xl tracking-tighter"
                                >
                                    <span className="text-green-900/70">{activeDemo.description}</span>
                                </motion.p>
                            </div>
                        </div>
                        {
                            activeDemo.extraTips ? 
                                <motion.span 
                                    key={activeDemoIndex}
                                    variants={opacityVariants}
                                    initial="hide"
                                    exit="hide"
                                    animate="show"
                                    className="font-semibold tracking-tighter text-green-900/70"
                                >Get tips for start your <a href="#" className="underline">fundraiser</a></motion.span> :
                                null
                        }
                    </div>
                </AnimatePresence>
                <div className="flex-1 flex justify-end gap-6">
                    <div className="mt-16">
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full text-dark-green hover:bg-dark-green hover:text-green-200">
                            <FaPlay size={16} className="-mr-0.5" />
                        </button>
                    </div>
                    <div className="relative h-full w-full max-w-[400px] flex flex-col gap-6">
                        <ul className="flex items-center gap-0">
                            {
                                DEMOS.map(({ Icon, title, shortTitle }, index) => (
                                    <li key={title}>
                                        <button 
                                            onClick={() => selectActiveDemo(index)} 
                                            className={`${index === activeDemoIndex ? 'text-green-900' : 'text-green-900/60'} flex gap-2 items-center justify-center h-10 px-4 hover:bg-green-900/10 rounded-full`}
                                        >
                                            <Icon size={20} />
                                            <span className="font-semibold tracking-tighter text-lg">{shortTitle}</span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col relative w-full h-full bg-black  rounded-t-4xl pb-0 pt-8 px-2">
                            <div className="absolute top-40 right-full flex flex-col gap-4">
                                <span className="block w-1.5 h-14 rounded-l-full bg-black" />
                                <span className="block w-1.5 h-14 rounded-l-full bg-black" />
                            </div>
                            <div className="absolute top-40 left-full flex flex-col gap-4">
                                <span className="block w-1.5 h-14 rounded-r-full bg-black" />
                            </div>
                            <div className="w-full flex-1 rounded-t-3xl bg-green-300"></div>
                            <span className="block bg-green-300 w-full">
                                <motion.span key={activeDemoIndex} style={{ scaleX }} className="origin-left block w-full h-2 bg-white" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}