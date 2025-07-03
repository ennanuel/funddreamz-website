"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { BADGES, CATEGORIES } from "../_assets/data";
import { AnimatePresence, motion } from 'framer-motion';

const CATEGORY_VARIANTS = {
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        }
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
        }
    }
}

const DEFAULT_CATEGORY_WIDTH = 100;

export default function HomeHero() {
    const interval = useRef<NodeJS.Timeout>(null);
    const categoriesCarouselRef = useRef<HTMLUListElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [{ categoriesContainerWidth, categoriesGap }, setCategoryDimensions] = useState({ categoriesContainerWidth: 0, categoriesGap: 0 });

    const categories = useMemo(() => CATEGORIES.slice(0, 4), []);
    const categoryWidths = useMemo(() => categories.map((_, index) => {
        if (index === activeIndex) {
            const width = categoriesContainerWidth - (categoriesGap * (CATEGORIES.length - 1)) - (DEFAULT_CATEGORY_WIDTH * (CATEGORIES.length - 2));
            return width;
        } else return DEFAULT_CATEGORY_WIDTH;
    }), [activeIndex, categories, categoriesContainerWidth, categoriesGap]);

    const stopInterval = () => {
        if (interval.current) clearInterval(interval.current);
    };
    const startInterval = () => {
        stopInterval();
        interval.current = setInterval(changeActiveIndex, 3000);
    };
    const selectActiveIndex = (index: number) => {
        stopInterval();
        setActiveIndex(index);
    };
    const changeActiveIndex = () => {
        setActiveIndex((prevIndex) => {
            const newActiveIndex = prevIndex < categories.length - 1 ? 
                prevIndex + 1 : 
                0;
            return newActiveIndex;
        })
    };

    useEffect(() => {
        if (!categoriesCarouselRef.current) return;
        const categoryContainerComputedStyle = window.getComputedStyle(categoriesCarouselRef.current);
        const categoryContainerGap = Number(categoryContainerComputedStyle.gap.replace(/\w+/ig, ''));
        const categoryContainerWidth = categoriesCarouselRef.current.offsetWidth;

        setCategoryDimensions({ categoriesContainerWidth: categoryContainerWidth, categoriesGap: categoryContainerGap });
    }, []);

    useEffect(() => {
        stopInterval();
        startInterval();

        return stopInterval;
    }, [activeIndex, categories]);

    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg pt-12 md:pt-0 md:min-h-screen flex flex-col-reverse lg:flex-row lg:gap-20">
                <div className="flex flex-col items-center lg:items-start justify-center">
                    <h1 className="md:max-w-[12ch] text-3xl sm:text-[3rem] md:text-[4rem] text-center lg:text-left leading-[2.4rem] sm:leading-[3.6rem] md:leading-[4.6rem] font-semibold tracking-tighter">Successful <br className="block md:hidden" />fundraisers start here.</h1>
                    <p className="mt-4 text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-[40ch]">Get started in just a few minutes — with helpful new tools, it&apos;s easier than ever to pick the perfect title, write a compelling story, and share it with the world.</p>
                    <button className="mt-8 h-10 sm:h-12 rounded-full px-6 sm:px-10 bg-main text-white w-fit min-w-50 sm:min-w-60">
                        <span className="text-sm font-semibold whitespace-nowrap">Start a fundraiser</span>
                    </button>
                    <ul className="mt-8 flex items-center gap-6">
                        {
                            BADGES.map(({ title, Icon }) => (
                                <li key={title} className="flex items-center justify-center gap-2 text-gray-400">
                                    <Icon size={16} />
                                    <span className="text-xs">{title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden sm:flex md:flex-1">
                    <ul 
                        ref={categoriesCarouselRef}
                        className="pt-20 pb-20 w-full h-full flex justify-center lg:justify-end gap-2 sm:gap-4"
                    >
                        {
                            categories.map(({ title, href, image }, index) => (
                                <motion.li 
                                    key={title} 
                                    animate={{ width: categoryWidths[index] }}
                                    onMouseOver={() => selectActiveIndex(index)}
                                    onMouseOut={startInterval}
                                    className={`${index === activeIndex ? '' : 'aspect-square lg:aspect-auto'} min-h-40 md:min-h-50 max-h-[560px]`}
                                    transition={{ ease: [0.3, 1, 0.16, 1], duration: 1 }}
                                >
                                    <Link href={`/categories${href}`} className="overflow-hidden relative block w-full h-full rounded-2xl border border-gray-200">
                                        <Image src={image} fill alt={`${title} category image`} className="object-cover" />
                                        <div className={`${index === activeIndex ? 'to-80% via-transparent to-gray-500/80' : 'via-gray-500/50 to-gray-500'} bg-gradient-to-b p-4 justify-between relative w-full h-full flex flex-col gap-4`}>
                                            <motion.span
                                                animate={{ 
                                                    scale: index === activeIndex ? 1 : 0.4,
                                                    opacity: index === activeIndex ? 1 : 0
                                                }} 
                                                transition={{ duration: 1, ease: [0.3, 1, 0.16, 1] }} 
                                                className="origin-top-left flex items-center justify-center w-8 sm:w-10 md:w-14 aspect-square rounded-full bg-black/40 backdrop-blur text-white"
                                            >
                                                <HiOutlineArrowUpRight size={20} />
                                            </motion.span>
                                            <AnimatePresence initial={false} mode="wait">
                                                {
                                                    index === activeIndex ?
                                                        <motion.div key={`${title}-active`} variants={CATEGORY_VARIANTS} initial="exit" animate="enter" exit="exit" className="flex flex-col gap sm:gap-2">
                                                            <h3>
                                                                <span className="text-white block text-base sm:text-lg md:text-xl lg:text-4xl">{title}</span>
                                                            </h3>
                                                            <motion.p initial={{ maxHeight: 0 }} animate={{ maxHeight: 99999 }} className="text-xs lg:text-sm min-w-[24ch]">
                                                                <span className="text-gray-300 max-w-[24ch]">More than $50 million is raised every week on GoFundMe.*</span>
                                                            </motion.p>
                                                        </motion.div> :
                                                        <motion.div key={title} variants={CATEGORY_VARIANTS} initial="exit" animate="enter" exit="exit" className="flex flex-col items-center w-full">
                                                            <h3>
                                                                <span className="lg:-rotate-90 lg:w-[2.25rem] whitespace-nowrap tracking-tight text-white block text-base sm:text-lg md:text-xl lg:text-4xl">{title}</span>
                                                            </h3>
                                                        </motion.div>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}