"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link"
import { BsDot } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { LEGALS, LINKS, RESOURCES, SOCIALS } from "@/app/_assets/data/footer";


export default function Footer() {
    const [showMoreResources, setShowMoreResources] = useState(false);

    return (
        <footer className="">
            <div className="border-t border-gray-200 px-4 sm:px-6 md:px-10 py-12">
                <div className="flex flex-col mx-auto max-w-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {
                            LINKS.map(({ title, subLinks }) => (
                                <div key={title} className="flex flex-col">
                                    <h3 className="h-10 flex items-center px-2">
                                        <span className="text-sm font-semibold">{title}</span>
                                    </h3>
                                    <ul className="flex flex-col">
                                        {
                                            subLinks.map((subLink) => (
                                                <li key={subLink.title}>
                                                    <Link href={subLink.href} className="h-10 flex items-center px-2 rounded-lg hover:bg-gray-100/50">
                                                        <span className="text-sm">{subLink.title}</span>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => setShowMoreResources(!showMoreResources)} className="mt-10 h-10 w-fit rounded-lg hover:bg-gray-100/50 flex items-center justify-center gap-3 px-2">
                        <span className="text-xs sm:text-sm font-semibold">{showMoreResources ? 'Less resources' : 'More resources'}</span>
                        <SlArrowDown size={12} className={`${showMoreResources ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                    {
                        showMoreResources ?
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6">
                                {
                                    RESOURCES.map(({ title, href }) => (
                                        <li key={title}>
                                            <Link href={href} className="h-10 flex items-center px-2 rounded-lg hover:bg-gray-100/50">
                                                <span className="text-sm">{title}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul> :
                            null
                    }
                </div>
            </div>
            <div className="border-t border-gray-200 px-4 sm:px-6 md:px-10">
                <div className="mx-auto max-w-lg py-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <button className="flex items-center justify-center gap-2 p-2 border border-gray-200 rounded-xl text-secondary hover:bg-gray-100/50 text-xs">
                            <span className="flex items-center gap-2">
                                <Image width={24} height={24} src="/icon/ng-flag.png" alt="Nigerian flag" className="w-4 aspect-square rounded-full" />
                                <span>Nigeria</span>
                            </span>
                            <BsDot size={12} />
                            <span>English</span>
                        </button>

                        <ul className="flex items-center">
                            {
                                SOCIALS.map(({ Icon, href }, index) => (
                                    <li key={index}>
                                        <Link href={href} className="w-10 aspect-square rounded-full flex items-center justify-center hover:bg-gray-100/50">
                                            <Icon size={20} />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        <p className="text-sm px-2">©{(new Date).getFullYear()} FundDreamz</p>
                        {
                            LEGALS.map(({ title, href }) => (
                                <Link key={title} href={href} className="h-8 flex items-center justify-center px-2 rounded-lg hover:bg-gray-100/50">
                                    <span className="text-sm whitespace-nowrap">{title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}