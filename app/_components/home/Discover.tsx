"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { FUNDRAISERS } from "../../_assets/data";


const SCREEN_SIZES = {};

export default function Discover() {
    const carousel = useRef<HTMLUListElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);

    useEffect(() => {
        if (!carousel.current) return;
        setCarouselWidth(carousel.current.offsetWidth);
    }, [carousel]);

    return (
        <section className="bg-blue-800 text-blue-300/60 min-h-screen max-h-[800px] flex flex-col justify-between pt-24 pb-20">
            <div className="px-4 xs:px-6 sm:px-10">
                <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
                    <h2><span className="text-blue-300/80 tracking-tighter font-semibold text-2xl sm:text-3xl xl:text-4xl max-w-[16ch]">Discover fundraisers inspired by what you care about</span></h2>
                    <div className="flex items-center justify-between">
                        <button className="group p-1 pl-4 flex gap-4 items-center justify-center rounded-full bg-blue-300/10 hover:bg-blue-300 text-blue-300 hover:text-blue-900">
                            <span className="tracking-tighter text-sm xl:text-base font-semibold">Happening worldwide</span>
                            <span className="flex items-center justify-center w-8 aspect-square rounded-full bg-blue-300 group-hover:bg-blue-900 text-blue-900 group-hover:text-blue-300">
                                <FaArrowDown size={16} />
                            </span>
                        </button>
                        <div className="flex gap-2 items-center">
                            <button className="flex gap-4 items-center justify-center w-10 aspect-square rounded-full bg-blue-300/10 hover:bg-blue-300 text-blue-300 hover:text-blue-900">
                                <FaArrowLeft size={16} />
                            </button>
                            <button className="flex gap-4 items-center justify-center w-10 aspect-square rounded-full bg-blue-300/10 hover:bg-blue-300 text-blue-300 hover:text-blue-900">
                                <FaArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 xs:px-6 sm:px-10 overflow-hidden">
                <div className="w-full max-w-lg mx-auto cursor-grab active:cursor-grabbing">
                    <motion.ul drag="x" dragConstraints={{ left: (carouselWidth * -1), right: 0 }} ref={carousel} className="mt-8 gap-4 flex">
                        {
                            FUNDRAISERS.map(({ title, image, donations, amountRaised, currency }) => (
                                <li key={title} className="flex-1 min-w-60 flex">
                                    <Link href={`/campaign/${title}`} className="group relative flex flex-col bg-blue-900 rounded-md overflow-hidden shadow-lg shadow-transparent hover:shadow-black/10">
                                        <Image src={image} alt={title} fill className="object-cover block group-hover:scale-110 transition-transform duration-500 ease-expo" />
                                        <div className="relative flex-1 flex flex-col justify-between gap-60 p-4 lg:p-4 bg-gradient-to-b from-black/20 from-[60%] to-black/90">
                                            <span className="flex items-center justify-center px-3 h-6 lg:h-7 w-fit rounded-full bg-black/20 backdrop-blur text-white font-semibold text-xs lg:text-sm">{donations} donations</span>
                                            <div className="flex flex-col gap-3">
                                                <h3 className="font-semibold text-sm sm:text-base lg:text-lg tracking-tighter">
                                                    <span className="text-white">{title}</span>
                                                </h3>
                                                <span className="block w-full p-0.5 h-2 rounded-full bg-yellow-400/50 overflow-hidden">
                                                    <span className="block w-1/2 h-full rounded-full bg-yellow-300" />
                                                </span>
                                                <p>
                                                    <span className="font-bold text-lg sm:text-2xl">
                                                        <span className="text-white/90">{currency}</span>
                                                        <span className="text-white tracking-tight">{amountRaised}</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </motion.ul>
                </div>
            </div>
        </section>
    )
}