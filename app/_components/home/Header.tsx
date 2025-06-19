"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";

import { useMotionValue, useTransform, animate, motion, type AnimationPlaybackControls } from "framer-motion";

import { BiSearch } from "react-icons/bi";
import { PiPlantFill } from "react-icons/pi";
import { RiMenu5Line } from "react-icons/ri";

import { LINKS } from "@/app/assets/data";

const DURATION = 1;

export default function Header() {
    const scrollY = useRef<number>(0);
    const controls = useRef<AnimationPlaybackControls>(null);
    const translateY = useMotionValue(0);
    const animateY = useTransform(translateY, (value) => `${value * -1}%`);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentTranslateY = translateY.get();
            if (window.scrollY > scrollY.current && window.scrollY > 101) {
                if(controls.current) controls.current.stop();
                const duration = DURATION - (DURATION * (currentTranslateY / 101));
                controls.current = animate(translateY, [currentTranslateY, 101], {
                    duration,
                    ease: [0.3, 1, 0.16, 1]
                })
            } else {
                if(controls.current) controls.current.stop();
                const duration = DURATION * (currentTranslateY / 100);
                controls.current = animate(translateY, [currentTranslateY, 0], {
                    duration,
                    ease: [0.3, 1, 0.16, 1]
                })
            }

            scrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header style={{ y: animateY }} className="z-10 px-4 sm:px-6 bg-gray-100 sticky top-0">
            <nav className="mx-auto h-16 max-w-lg gap-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="-mt-1 flex gap-2 items-center justify-center">
                        <span className="w-10 flex items-center justify-center aspect-square rounded-full bg-green-200 text-main">
                            <PiPlantFill size={20} className="" />
                        </span>
                        <div className="flex items-center text-dark-green font-bold text-2xl leading-[1.3rem] tracking-tighter">
                            <span>f.</span>
                            <span>dreamz</span>
                        </div>
                    </Link>
                    <ul className="flex items-center gap-2">
                        {
                            LINKS.map(({ title, href, subLinks }) => (
                                <li key={title}>
                                    {
                                        subLinks ? 
                                            <button className="px-2 flex items-center justify-center">
                                                <span className="font-semibold">{title}</span>
                                            </button> :
                                            <Link href={href} className="px-2 flex items-center justify-center hover:underline">
                                                <span className="font-semibold">{title}</span>
                                            </Link>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center bg-white/80 rounded-full text-gray-800">
                        <input type="text" className="px-4 min-w-30 sm:w-auto bg-transparent border-none focus:outline-none h-10 text-xs sm:text-sm" placeholder="Search" />
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-dark-green hover:text-white">
                            <BiSearch size={16} />
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="/sign-in" className="px-6 rounded-full h-10 hover:bg-white flex items-center justify-center">
                            <span className="font-semibold">Sign in</span>
                        </Link>
                        <Link href="/get-started" className="flex items-center justify-center px-6 rounded-full h-10 bg-dark-green text-white">
                            <span className="font-semibold">Get started</span>
                        </Link>
                    </div>
                    <button className="flex lg:hidden items-center justify-center w-8 sm:w-10 aspect-square rounded-lg focus:bg-gray-100/50">
                        <RiMenu5Line size={20} />
                    </button>
                </div>
            </nav>
        </motion.header>
    )
}