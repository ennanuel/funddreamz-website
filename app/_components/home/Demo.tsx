"use client";

import { DEMOS } from "@/app/assets/data";
import { useMemo, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Demo() {
    const [activeDemoIndex, setActiveDemoIndex] = useState(0);
    const activeDemo = useMemo(() => DEMOS[activeDemoIndex] || DEMOS[0], [activeDemoIndex]);

    return (
        <div className="bg-green-300 px-10 overflow-hidden">
            <section className="mx-auto max-w-lg w-full min-h-screen pt-25 flex justify-between gap-20">
                <div className="pb-20 flex-1 flex flex-col gap-6 justify-end">
                    <div className="flex flex-col gap-10">
                        <h3 className="font-bold text-2xl tracking-tighter">
                            <span className="text-green-900">{activeDemo.title}</span>
                        </h3>
                        <p className="font-semibold max-w-[20ch] text-5xl tracking-tighter">
                            <span className="text-green-900/70">{activeDemo.description}</span>
                        </p>
                    </div>
                    {
                        activeDemo.extraTips ? 
                            <span className="font-semibold tracking-tighter text-green-900/70">Get tips for start your <a href="#" className="underline">fundraiser</a></span> :
                            null
                    }
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <div className="flex items-center justify-between gap-6">
                        <ul className="flex items-center gap-0">
                            {
                                DEMOS.map(({ Icon, title, shortTitle }, index) => (
                                    <li key={title}>
                                        <button onClick={() => setActiveDemoIndex(index)} className={`${index === activeDemoIndex ? 'text-green-900' : 'text-green-900/60'} flex gap-2 items-center justify-center h-10 px-4 hover:bg-green-900/10 rounded-full`}>
                                            <Icon size={20} />
                                            <span className="font-semibold tracking-tighter text-lg">{shortTitle}</span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full text-white hover:bg-white/20">
                            <FaPlay size={20} className="-mr-1" />
                        </button>
                    </div>
                    <div className="flex-1">
                        <div className="relative w-[150%] h-full bg-white rounded-t-3xl">
                            <span className="absolute block bottom-0 left-0 w-full h-2 bg-gray-200 after:absolute after:top-0 after:left-0 after:h-full after:w-1/2 after:bg-gray-600"></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}