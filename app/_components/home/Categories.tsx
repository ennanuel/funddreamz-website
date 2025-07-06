"use client";

import Link from "next/link";

import { useRef } from "react";
import { motion, useMotionValue } from 'framer-motion';

import { type IconType } from "react-icons";

import { CATEGORIES_2 } from "../../_assets/data";


export default function Categories() {

    return (
        <div className="bg-gray-50 px-10">
            <section className="mx-auto max-w-lg w-full min-h-screen pt-24 pb-20 flex flex-col gap-20">
                <div className="flex flex-col gap-4">
                    <h2><span className="font-semibold text-5xl tracking-tighter text-gray-800">Fundraise for anyone</span></h2>
                    <p><span className="font-semibold text-3xl tracking-tighter text-gray-500">Pick a category that best fits you fundraising goal.</span></p>
                </div>
                <ul className="flex-1 grid grid-cols-3 gap-6">
                    {
                        CATEGORIES_2.map((category) => (
                            <li key={category.title} className="flex">
                                <Category {...category} />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
};

type CategoryProps = {
    title: string;
    description: string;
    iconBackground: string;
    hoverBorder: string;
    textColor: string;
    Icon: IconType
}

function Category({ title, description, textColor, iconBackground, hoverBorder, Icon }: CategoryProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const rotate = useMotionValue('translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0.0028deg) rotateY(0.004deg) rotateZ(0deg) skew(0deg, 0deg)');

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
        if(!boxRef.current) return;
        const container = boxRef.current.getBoundingClientRect();
        const halfX = container.left + (container.width / 2);
        const halfY = container.top + (container.height / 2);

        const x = ((event.clientX - halfX) / (container.width / 2)) * 20;
        const y = ((halfY - event.clientY) / (container.height / 2)) * 20;

        rotate.set(`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${y}deg) rotateY(${x}deg) rotateZ(0deg) skew(0deg, 0deg)`);
    };

    const handleMouseOut = () => {
        rotate.set(`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0.0028deg) rotateY(0.004deg) rotateZ(0deg) skew(0deg, 0deg)`);
    }

    return (
        <Link href="/home" className="flex-1 group">
            <motion.div 
                ref={boxRef} 
                className="w-full h-full"
                onMouseMove={handleMouseMove} 
                onMouseOut={handleMouseOut} 
                style={{ perspective: '1000px' }}
                transition={{ duration: .6, delay: .2, ease: "easeInOut" }}
            >
                <motion.div 
                    style={{ transform: rotate, willChange: 'transform', transformStyle: 'preserve-3d' }} 
                    className={`${hoverBorder} bg-white border-2 border-gray-100 w-full h-full min-h-[480px] relative p-6 flex flex-col rounded-2xl overflow-hidden justify-between gap-6 not-[:hover]:transition-transform not-[:hover]:duration-500 not-[:hover]:ease-expo`}>
                    <div className={`${iconBackground} ${textColor} flex items-center justify-center w-16 aspect-square rounded-full`}>
                        <Icon size={40} className={`${textColor}`} />
                    </div>
                    <div className="relative flex flex-col gap-4">
                        <h2>
                            <span className="text-gray-800 text-4xl font-semibold tracking-tighter">{title}</span>
                        </h2>
                        <p>
                            <span className="text-gray-500 opacity-60 text-xl tracking-tighter font-normal">{description}</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </Link>
    )
}