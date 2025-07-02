"use client";

import Link from "next/link";

import React, { useRef } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";

import { BiSearch } from "react-icons/bi";
import { PiPlantFill } from "react-icons/pi";
import SubHeader from "./SubHeader";

import { LINKS } from "../../_assets/data/header";

const DEFAULT_HEADER_COLORS = { 
    '--background': '#f3f4f6',
    '--icon-background': '#b9f8cf',
    '--icon-color': '#02a85c',
    '--main': '#022d19',
    '--secondary': '#ffffff',
    '--text-color': '#1e2939',
    '--search-background': 'rgba(255, 255, 255, 0.8)',
} as React.CSSProperties;

const ALT_HEADER_COLORS = {
    '--background': '#ffffff',
    '--icon-background': '#b9f8cf',
    '--icon-color': '#02a85c',
    '--main': '#022d19',
    '--secondary': '#fafafa',
    '--text-color': '#1e2939',
    '--search-background': '#fafafa'
} as React.CSSProperties;

export default function Header({ colors = DEFAULT_HEADER_COLORS }: { colors?: React.CSSProperties }) {
    const headerRef = useRef<HTMLHeadElement>(null);
    const subHeaderIsOpen = useRef<boolean>(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", () => {
        const previousScrollY = Number(scrollY.getPrevious());
        const currentScrollY = Number(scrollY.get());

        if(!subHeaderIsOpen.current && previousScrollY < currentScrollY && currentScrollY > 100) {
            headerRef.current?.classList?.remove('translate-y-0');
            headerRef.current?.classList?.add('-translate-y-full');
        } else {
            headerRef.current?.classList?.remove('-translate-y-full');
            headerRef.current?.classList?.add('translate-y-0');
        }
    });

    const openSubHeader = (index: number) => {
        const subHeader = document.getElementById(`sub-header-${index}`);
        if(!subHeader) return;

        subHeader.classList.remove('hidden');
        subHeader.classList.add('block');
        subHeaderIsOpen.current = true;
        
        if(!headerRef.current) return;
        [...(document.querySelectorAll('.nav-link'))].forEach((element) => {
            if(element.id === `nav-link-${index}`) {
                element.classList.remove('text-gray-500');
                element.classList.add('text-[var(--secondary)]');
            } else {
                element.classList.remove('text-[var(--secondary)]');
                element.classList.add('text-gray-500');
            }
        })
        for(let [key, value] of Object.entries(ALT_HEADER_COLORS)) {
            headerRef.current.style.setProperty(key, value);
        }
    };
    const closeSubHeader = () => {
        [...(document.querySelectorAll('.sub-header'))].forEach((element) => {
            element.classList.remove('block');
            element.classList.add('hidden')
        });
        [...(document.querySelectorAll('.nav-link'))].forEach((element) => {
            element.classList.remove('text-gray-500');
            element.classList.add('text-[var(--secondary)]');
        })

        subHeaderIsOpen.current = false;
        if(!headerRef.current) return;
        for(let [key, value] of Object.entries(colors)) {
            headerRef.current.style.setProperty(key, value);
        }
    }

    return (
        <header 
            ref={headerRef} 
            style={colors}
            className="z-10 px-8 bg-[var(--background)] sticky top-0 transition-transform ease-expo duration-1000"
        >
            <nav className="mx-auto h-16 max-w-lg gap-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="-mt-1 flex gap-2 items-center justify-center">
                        <span className="w-10 flex items-center justify-center aspect-square rounded-full bg-[var(--icon-background)] text-[var(--icon-color)]">
                            <PiPlantFill size={20} className="" />
                        </span>
                        <div className="flex items-center text-[var(--main)] font-bold text-2xl leading-[1.3rem] tracking-tighter">
                            <span>f.</span>
                            <span>dreamz</span>
                        </div>
                    </Link>
                    <ul className="flex items-center">
                        {
                            LINKS.map((link, index) => (
                                <li key={link.title}>
                                    {
                                        link.subLinks?.length ?
                                            <>
                                            <button 
                                                id={`nav-link-${index}`} 
                                                onMouseOver={() => openSubHeader(index)} 
                                                onMouseOut={closeSubHeader} 
                                                className="nav-link px-3 h-16 flex items-center justify-center text-[var(--text-color)]"
                                            >
                                                <span className="font-semibold">{link.title}</span>
                                            </button>
                                            <SubHeader
                                                {...link}
                                                index={index}
                                                openSubHeader={() => openSubHeader(index)}
                                                closeSubHeader={closeSubHeader}
                                            />
                                            </> :
                                            <Link href={link.href} className="nav-link px-3 flex items-center justify-center hover:underline text-[var(--text-color)]">
                                                <span className="font-semibold">{link.title}</span>
                                            </Link>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center bg-[var(--search-background)] rounded-full text-[var(--text-color)]">
                        <input type="text" className="px-4 min-w-30 bg-transparent border-none focus:outline-none tracking-tighter h-10 placeholder:text-[var(--text-color)] text-[var(--text-color)_!important]" placeholder="Search" />
                        <button className="flex items-center justify-center w-8 mr-1 aspect-square rounded-full hover:bg-[var(--main)]/20 hover:text-[var(--main)]">
                            <BiSearch size={16} />
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center gap-2">
                        <Link href="/sign-in" className="px-6 rounded-full h-10 hover:bg-[var(--secondary)] text-[var(--main)] flex items-center justify-center">
                            <span className="font-semibold">Sign in</span>
                        </Link>
                        <Link href="/get-started" className="flex items-center justify-center px-6 rounded-full h-10 bg-[var(--main)] text-[var(--secondary)]">
                            <span className="font-semibold">Get started</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}