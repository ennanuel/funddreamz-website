"use client";

import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { BADGES, CATEGORIES } from "@/app/_assets/data";
import { AnimatePresence, motion } from 'framer-motion';
import { CREATE_FUNDRAISER_LINK } from "@/app/_assets/data/links";

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

const DEFAULT_CATEGORY_WIDTH = 80;

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
        <section className="px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-lg pt-20 pb-14 min-h-[calc(100vh_-_64px)] flex flex-col-reverse lg:flex-row gap-20 justify-center lg:justify-center items-center lg:items-end">
                <div className="flex flex-col items-center lg:items-start justify-center">
                    <h1 className="text-center lg:text-left text-[2.8rem] xl:text-[4rem] leading-[3.2rem] xl:leading-[4.6rem] font-bold tracking-tighter">
                        <span>The journey </span><br />
                        <span>to your Dream</span><br />
                        <span>starts here.</span>
                    </h1>
                    <p className="text-center lg:text-left mt-4 font-semibold tracking-tighter text-base xl:text-xl max-w-[40ch]">
                        <span className="text-gray-500">FundDreamz is a platform that connects dreamers with backers, providing a space where dreams can thrive. Our mission is to make fundraising accessible to anyone with a dream and passion to pursue.</span>
                    </p>
                    <a href={CREATE_FUNDRAISER_LINK} className="mt-8 h-12 flex items-center justify-center rounded-full px-10 bg-green-400 outline-3 outline-dark-green text-dark-green w-fit min-w-50 xl:min-w-60">
                        <span className="text-sm tracking-tighter font-semibold whitespace-nowrap">Start your Dream</span>
                    </a>
                    <ul className="mt-8 flex items-center gap-4 xl:gap-6">
                        {
                            BADGES.map(({ title, Icon }) => (
                                <li key={title} className="flex items-center justify-center gap-2 text-gray-400">
                                    <Icon size={16} />
                                    <span className="text-xs whitespace-nowrap">{title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden lg:block flex-1">
                    <ul 
                        ref={categoriesCarouselRef}
                        className="w-full h-full flex justify-end gap-3"
                    >
                        {
                            categories.map(({ title, description, href, image }, index) => (
                                <motion.li 
                                    key={title} 
                                    animate={{ width: categoryWidths[index] }}
                                    onMouseOver={() => selectActiveIndex(index)}
                                    onMouseOut={startInterval}
                                    className={`${index === activeIndex ? 'rounded-[24px]' : 'rounded-[40px]'} transition-[border-radius] duration-500 ease-expo min-h-50 h-[240px] lg:h-[440px] xl:h-[480px] overflow-hidden`}
                                    transition={{ ease: [0.3, 1, 0.16, 1], duration: 1 }}
                                >
                                    <Link 
                                        href={`/category${href}`} 
                                        className="relative block w-full h-full border border-gray-200"
                                    >
                                        <Image src={image} fill alt={`${title} category image`} className="object-cover" />
                                        <div className={`${index === activeIndex ? 'to-80% via-transparent to-gray-500/80' : 'via-gray-500/50 to-gray-500'} bg-gradient-to-b p-4 justify-between relative w-full h-full flex flex-col gap-4`}>
                                            <motion.span
                                                animate={{ 
                                                    scale: index === activeIndex ? 1 : 0.4,
                                                    opacity: index === activeIndex ? 1 : 0
                                                }} 
                                                transition={{ duration: 1, ease: [0.3, 1, 0.16, 1] }} 
                                                className="origin-top-left flex items-center justify-center w-12 xl:w-14 aspect-square rounded-full bg-black/40 backdrop-blur text-white"
                                            >
                                                <HiOutlineArrowUpRight size={20} />
                                            </motion.span>
                                            <AnimatePresence initial={false} mode="wait">
                                                {
                                                    index === activeIndex ?
                                                        <motion.div key={`${title}-active`} variants={CATEGORY_VARIANTS} initial="exit" animate="enter" exit="exit" className="flex flex-col gap-2">
                                                            <h3>
                                                                <span className="text-white block text-3xl xl:text-4xl tracking-tighter">{title}</span>
                                                            </h3>
                                                            <motion.p initial={{ maxHeight: 0 }} animate={{ maxHeight: 99999 }} className="text-sm min-w-[24ch]">
                                                                <span className="text-gray-300 max-w-[24ch]">{description}</span>
                                                            </motion.p>
                                                        </motion.div> :
                                                        <motion.div key={title} variants={CATEGORY_VARIANTS} initial="exit" animate="enter" exit="exit" className="flex flex-col items-center w-full">
                                                            <h3>
                                                                <span className="-rotate-90 w-[2.25rem] whitespace-nowrap tracking-tight text-white block text-3xl xl:text-4xl">{title}</span>
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