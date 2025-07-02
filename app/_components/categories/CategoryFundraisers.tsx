
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CATEGORY_FUNDRAISERS } from "@/app/_assets/data";

type Fundraiser = {
    location: string;
    cause: string;
    currency: string;
    amountRaised: string;
    image: string | StaticImport;
}

type FundRaisersProps = {
    categoryTitle: string;
    fundraisers: Fundraiser[];
}

export default function CategoryFundRaisers() {
    return (
        <div className="pb-24 flex flex-col gap-10">
            {
                CATEGORY_FUNDRAISERS.map((categoryFundraisers) => (
                    <FundRaisers key={categoryFundraisers.categoryTitle} {...categoryFundraisers} />
                ))
            }
            <div className="flex justify-center items-center">
                <button className="flex items-center justify-center px-6 h-12 rounded-full text-gray-800 border-2 border-gray-300 hover:text-dark-green hover:border-dark-green/60">
                    <span className="font-semibold tracking-tighter">More categories</span>
                </button>
            </div>
        </div>
    )
};

function FundRaisers({ categoryTitle, fundraisers }: FundRaisersProps) {
    return (
        <div className="px-10">
            <section className="pt-20 mx-auto max-w-lg w-full flex flex-col gap-8">
                <h3 className="text-3xl font-semibold tracking-tighter">
                    <span className="text-gray-800">{categoryTitle}</span>
                </h3>
                <ul className="mt-6 grid grid-cols-3 gap-4">
                    {
                        fundraisers.map(({ location, cause, currency, amountRaised, image }) => (
                            <li key={cause} className="flex flex-1">
                                <Link href="" className="min-h-70 group flex-1 relative flex flex-col bg-main rounded-md overflow-hidden shadow-lg shadow-transparent hover:shadow-black/10">
                                    <Image src={image} alt={cause} fill className="object-cover block group-hover:scale-110 transition-transform duration-500 ease-expo" />
                                    <div className="relative flex-1 flex flex-col justify-between gap-10 p-4 bg-gradient-to-b from-black/20 from-[60%] to-black/90">
                                        <span className="flex items-center justify-center px-3 h-7 w-fit rounded-full bg-black/20 backdrop-blur text-white font-semibold text-sm">{location}</span>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="font-semibold text-lg tracking-tighter">
                                                <span className="text-white">{cause}</span>
                                            </h3>
                                            <span className="block w-full p-0.5 h-2 rounded-full bg-yellow-400/50 overflow-hidden">
                                                <span className="block w-1/2 h-full rounded-full bg-yellow-300" />
                                            </span>
                                            <p>
                                                <span className="font-bold text-2xl">
                                                    <span className="text-white/90">{currency}</span>
                                                    <span className="text-white tracking-tight">{amountRaised} raised</span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center justify-end">
                    <Link href="" className="flex items-center justify-center gap-2 px-3 h-8 rounded-full text-gray-800 hover:bg-green-200 hover:text-dark-green">
                        <span className="font-semibold tracking-tighter">See more</span>
                        <FaArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    )
}