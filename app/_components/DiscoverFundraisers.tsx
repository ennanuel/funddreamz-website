import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";


const FUNDRAISERS = [
    {
        title: "Support Shyam's Life-Saving Heart surgery & recovery.",
        image: "/home/your-cause1.jpg",
        donations: "2.2K",
        amountRaised: "117,853",
        currency: "$"
    },
    {
        title: "Raising funds for Callum’s brain tumour treatment.",
        image: "/home/business1.jpg",
        donations: "4.4K",
        amountRaised: "118,704",
        currency: "£"
    },
    {
        title: "Sven kämpft um sein Leben - gegen den Krebs.",
        image: "/home/emergency1.jpg",
        donations: "2.1K",
        amountRaised: "73,379",
        currency: "€"
    },
    {
        title: "Let's Help Get Jeff Off The Streets!",
        image: "/home/agriculture2.jpg",
        donations: "5.7K",
        amountRaised: "111,017",
        currency: "$"
    },
    {
        title: "Support for Roland Nulada and his family",
        image: "/home/agriculture3.jpg",
        donations: "3.6K",
        amountRaised: "137,513",
        currency: "$"
    }
]


export default function DiscoverFundraisers() {

    return (
        <section className="px-4 sm:px-6 md:px-10 py-20">
            <div className="mx-auto max-w-lg">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Discover fundraisers inspired by what you care about</h2>
                <div className="flex items-center justify-between">
                    <button className="mt-8 h-10 px-4 border border-gray-200 rounded-full flex items-center justify-center gap-4 text-gray-700">
                        <span className="text-sm font-semibold">Happening worldwide</span>
                        <SlArrowDown size={12} />
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="w-8 aspect-square rounded-full flex items-center justify-center border border-gray-200 text-gray-700">
                            <HiArrowLeft />
                        </button>
                        <button className="w-8 aspect-square rounded-full flex items-center justify-center border border-gray-200 text-gray-700">
                            <HiArrowRight />
                        </button>
                    </div>
                </div>
                <ul className="mt-8 md:mt-4 grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-4 grid-rows-5 md:grid-rows-2">
                    {
                        FUNDRAISERS.map(({ title, image, donations, amountRaised, currency }, index) => (
                            <li key={title} className={`${index === 0 ? 'md:col-span-2 md:row-span-2 md:pr-4' : 'col-span-1 row-span-1'}`}>
                                <Link href="/" className="p-0 md:p-2 rounded-xl w-full h-full hover:bg-gray-100/50 flex flex-row md:flex-col justify-between gap-3">
                                    <div className={`${index === 0 ? 'md:h-full w-30 md:w-auto' : 'w-30 md:w-auto md:h-40'} aspect-square md:aspect-auto relative flex items-end p-3`}>
                                        <Image src={image} alt={title} fill className="object-cover rounded-lg" />
                                        <span className="relative text-xs py-1 rounded-full px-2 bg-secondary/50 text-background whitespace-nowrap">{donations} donations</span>
                                    </div>
                                    <div className="flex-1 md:flex-auto max-w-[520px] md:max-w-none flex flex-col gap-4 p-2 pb-0">
                                        <span className="text-sm font-semibold">{title}</span>
                                        <div className="mt-2 flex flex-col gap-2">
                                            <span className="block bg-gray-200/50 h-2 rounded-full overflow-hidden">
                                                <span className="block w-1/2 h-full bg-main rounded-full"></span>
                                            </span>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="whitespace-nowrap font-semibold">
                                                    <span className="text-sm">{currency}{amountRaised}</span>
                                                    <span className="text-xs"> raised</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}