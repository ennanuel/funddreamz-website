import { chef } from "@/app/_assets/images";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface Example {
    category: string;
    title: string;
    description: string;
    href: string;
    raisedAmount: string;
    goalAmount: string;
};

interface ExamplesProps {
    title: string;
    examples: Example[];
};

export default function Examples({ title, examples }: ExamplesProps) {
    const [activeExampleIndex, setActiveExampleIndex] = useState(0);
    const activeExample = useMemo(() => examples[activeExampleIndex], [activeExampleIndex]);

    function changeActiveIndex(index: number) {
        setActiveExampleIndex(index);
    };

    return (
        <div className="px-10 bg-white">
            <section className="pt-20 pb-24">
                <h3 className="text-center text-3xl font-semibold tracking-tighter">
                    <span>{title}</span>
                </h3>
                <ul className="mt-12 flex items-center justify-center gap-1">
                    {
                        examples.map(({ category }, index) => (
                            <li key={category}>
                                <button onClick={() => changeActiveIndex(index)} className={`${index === activeExampleIndex ? 'bg-black/90 text-white' : 'hover:bg-gray-100 text-gray-800' } flex items-center justify-center min-w-30 h-10 rounded-lg px-4`}>
                                    <span className="font-semibold tracking-title">{category}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                {}
                <div className="flex mt-12 gap-10">
                    <div className="flex-1 relative aspect-square max-h-[480px]">
                        <Image src={chef} alt="image of fundraiser" fill className="object-cover rounded-xl" />
                    </div>
                    <Link href={activeExample.href} className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col gap-8">
                            <h4 className="font-semibold tracking-tighter text-3xl underline hover:text-main">
                                <span>{activeExample?.category}</span>
                            </h4>
                            <p className="text-lg tracking-tighter font-semibold">
                                <span>{activeExample?.description}</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="block bg-gray-100 rounded-full">
                                <span className="block w-1/2 h-2 rounded-full bg-main"></span>
                            </span>
                            <span className="font-semibold tracking-tighter text-gray-800">{activeExample.raisedAmount} raised of {activeExample?.goalAmount} goal</span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}