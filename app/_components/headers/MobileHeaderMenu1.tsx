"use client";

import { LINKS } from "@/app/_assets/data/header";
import { SIGN_UP_LINK } from "@/app/_assets/data/links";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";


interface MobileHeaderMenuProps {
    show: boolean;
    open: () => void;
    close: () => void;
};

interface SubLinkProps {
    title: string;
    href: string;
    isExternalLink: boolean;
    close: () => void;
};

export default function MobileHeaderMenu({ show, close }: MobileHeaderMenuProps) {
    const [expandedLinkIndex, setExpandedLinkIndex] = useState(-1);

    const selectLinkIndexToExpand = (index: number) => {
        setExpandedLinkIndex(index);
    };
    const collapseExpandedLink = () => {
        setExpandedLinkIndex(-1);
    };

    if (!show) return;

    return (
        <nav className="flex flex-col lg:hidden absolute top-full left-0 p-4 sm:p-6 lg:p-10 w-full h-[calc(100dvh_-_48px)] sm:h-[calc(100dvh_-_64px)] bg-[var(--background)]">
            <div className="flex items-center bg-[var(--search-background)] rounded-xl text-[var(--text-color)]">
                <input type="text" className="px-4 flex-1 min-w-30 bg-transparent border-none focus:outline-none text-sm lg:text-base tracking-tighter h-12 placeholder:text-[var(--text-color)] text-[var(--text-color)_!important]" placeholder="Search" />
                <button className="flex items-center justify-center w-8 mr-1 aspect-square rounded-full hover:bg-[var(--main)]/20 hover:text-[var(--main)]">
                    <BiSearch size={16} />
                </button>
            </div>
            <ul className="py-8 flex-1 flex flex-col">
                {
                    LINKS.map(({ title, href, subLinks }, index) => (
                        <li key={title} className="flex flex-col gap-4">
                            {
                                subLinks?.length ?
                                    <div className="flex flex-col">
                                        <button
                                            onClick={() => expandedLinkIndex === index ? collapseExpandedLink() : selectLinkIndexToExpand(index)} 
                                            className="flex items-center justify-between h-12 gap-4"
                                        >
                                            <span className="text-2xl font-semibold tracking-tighter">{title}</span>
                                            <FiArrowDown size={16} />
                                        </button>
                                        {
                                            expandedLinkIndex === index ? 
                                                <ul className="flex flex-col">
                                                    {
                                                        subLinks.map((subLink) => (
                                                            <SubLink key={subLink.title} close={close} {...subLink} />
                                                        ))
                                                    }
                                                </ul> :
                                                null
                                        }
                                    </div> :
                                    <a  onClick={close} href={href} className="flex items-center h-12">
                                        <span className="text-2xl font-semibold tracking-tighter">{title}</span>
                                    </a>
                            }
                            {

                            }
                        </li>
                    ))
                }
            </ul>
            <div className="flex items-center gap-3 lg:gap-6">
                <div className="flex items-center gap-2">
                    <Link href="/sign-in" className="px-6 rounded-full h-10 hover:bg-[var(--secondary)] text-[var(--main)] flex items-center justify-center">
                        <span className="font-semibold whitespace-nowrap text-xs xs:text-sm">Sign in</span>
                    </Link>
                    <a href={SIGN_UP_LINK} className="flex items-center justify-center px-6 rounded-full h-10 bg-[var(--main)] text-[var(--secondary)]">
                        <span className="font-semibold whitespace-nowrap text-xs xs:text-sm">Start a Dream</span>
                    </a>
                </div>
            </div>
        </nav>
    )
};

function SubLink({ title, href, isExternalLink, close }: SubLinkProps) {

    return (
        <li className="" onClick={close}>
            {
                isExternalLink ?
                    <a href={href} className="flex items-center justify-between py-2 h-10 border-b border-black/20">
                        <span className="text-xl font-semibold tracking-tighter">{title}</span>
                        <FiArrowUpRight size={16} />
                    </a> :
                    <Link href={href} className="flex items-center justify-start py-2 h-10 border-b border-black/20">
                        <span className="text-lg font-semibold tracking-tighter">{title}</span>
                    </Link>
            }
        </li>
    )
}