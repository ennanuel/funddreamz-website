"use client";

import Link from "next/link";
import { animate, AnimationPlaybackControls, motion, MotionValue, useAnimation, useMotionValue, useTransform } from "framer-motion";

import { BiSolidBadge } from "react-icons/bi";
import { LiaDonateSolid } from "react-icons/lia";
import { TbArrowUpRight, TbCategoryFilled } from "react-icons/tb";

import { CATEGORIES } from "@/app/assets/data";
import { useEffect, useRef } from 'react';


export default function Hero() {
    return (
        <section className="flex flex-col gap-20">
            <div className="pt-20 pb-10 min-h-[calc(100dvh_-_64px)] flex flex-col gap-20 items-center justify-end">
                <div className="mx-auto w-full max-w-lg flex flex-col gap-6">
                    <span className="relative w-12 aspect-square block">
                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-dark-green rotate-45">
                            <BiSolidBadge size={48} />
                        </span>
                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-green-200">
                            <LiaDonateSolid size={20} />
                        </span>
                    </span>
                    <div className="flex gap-20">
                        <div className="flex-1 flex flex-col gap-6">
                            <p className="max-w-[46ch] text-lg tracking-tighter font-semibold">Get started in just a few minutes — with helpful new tools, it&apos;s easier than ever to pick the perfect title, write a compelling story, and share it with the world.</p>
                        </div>
                        <div className="flex-2">
                            <h1 className="-mt-2 font-bold text-6xl tracking-tighter">Successful fundraisers<br /> start here</h1>
                        </div>
                    </div>
                </div>
                <MovingCategories />
            </div>
        </section>
    )
};

function MovingCategories() {
    const controls = useRef<AnimationPlaybackControls>(null);
    const translateX = useMotionValue(0);
    const sliderMotion = useTransform(translateX, (value) => `${value * -1}%`);

    function stopAnimation() {
        if(controls.current) controls.current.stop();
    }
    function moveCategories(duration: number, waitToFinish?: boolean) {
        stopAnimation();

        if(waitToFinish) {
            const currentXValue = translateX.get();
            const durationToFinish = duration - (duration * (currentXValue / 100));

            controls.current = animate(translateX, [currentXValue, 100], {
                duration: durationToFinish,
                ease: 'linear', 
                onComplete: () => moveCategories(duration)
            })
        } else {
            controls.current = animate(translateX, [0, 100], {
                duration,
                ease: 'linear',
                repeat: Infinity
            })
        }
    };

    function slowDownMove() {
        moveCategories(30, true);
    };

    function revertToNormalSpeed() {
        moveCategories(20, true);
    }

    useEffect(() => {
        moveCategories(20);
    }, []);

    return (
        <div onMouseOver={slowDownMove} onMouseOut={revertToNormalSpeed} className="w-full flex overflow-hidden">
            <CategorySlider x={sliderMotion} />
            <CategorySlider x={sliderMotion} />
        </div>
    )
};

function CategorySlider({ x }: { x: MotionValue }) {
    return (
        <motion.ul 
            style={{ x }}
            className="w-fit flex gap-6 overflow-visible pr-6"
        >
            {
                CATEGORIES.map(({ title, colors, Icon, href }) => (
                    <li key={title}>
                        <Link draggable={false} href={href} className={`${colors} overflow-hidden relative min-w-[320px] flex justify-between p-6 pb-4 rounded-3xl`}>
                            <div className="flex flex-col justify-between gap-10">
                                <span className="flex items-center justify-center w-12 aspect-square rounded-full bg-white">
                                    <TbArrowUpRight size={20} />
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="font-semibold text-2xl tracking-tighter">{title}</h2>
                                </div>
                            </div>
                            <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-15">
                                <Icon size={120} className="opacity-60" />
                            </span>
                        </Link>
                    </li>
                ))
            }
        </motion.ul>
    )
};