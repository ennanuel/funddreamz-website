import Link from "next/link";
import Image from "next/image";

import { AiFillSafetyCertificate } from "react-icons/ai"
import { FaHandshake } from "react-icons/fa6"
import { GiAfrica } from "react-icons/gi"
import { HiOutlineArrowUpRight } from "react-icons/hi2"


const BADGES = [
    {
        title: "Transparent",
        Icon: AiFillSafetyCertificate
    },
    {
        title: "Trustworthy",
        Icon: FaHandshake
    },
    {
        title: "For Africa",
        Icon: GiAfrica
    },
]

const CATEGORIES = [
    {
        title: "Your cause",
        href: "/your-cause",
        description: "",
        image: "/home/your-cause2.jpg"
    },
    {
        title: "Emergency",
        href: "/emergency",
        description: "",
        image: "/home/emergency2.jpg"
    },
    {
        title: "Medical",
        href: "/medical",
        description: "",
        image: "/home/emergency3.jpg"
    },
    {
        title: "Business",
        href: "/business",
        description: "",
        image: "/home/business2.jpg"
    },
    {
        title: "Education",
        href: "/education",
        description: "",
        image: "/home/education1.jpg"
    },
    {
        title: "Animal",
        href: "/animal",
        description: "",
        image: "/home/animals1.jpg"
    },
]

export default function HomeHero() {

    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg pt-12 md:pt-0 md:min-h-screen flex flex-col-reverse lg:flex-row lg:gap-20">
                <div className="flex flex-col items-center lg:items-start justify-center">
                    <h1 className="md:max-w-[12ch] text-3xl sm:text-[3rem] md:text-[4rem] text-center lg:text-left leading-[2.4rem] sm:leading-[3.6rem] md:leading-[4.6rem] font-semibold tracking-tighter">Successful <br className="block md:hidden" />fundraisers start here.</h1>
                    <p className="mt-4 text-center lg:text-left text-sm sm:text-base lg:text-lg max-w-[40ch]">Get started in just a few minutes — with helpful new tools, it&apos;s easier than ever to pick the perfect title, write a compelling story, and share it with the world.</p>
                    <button className="mt-8 h-10 sm:h-12 rounded-full px-6 sm:px-10 bg-main text-white w-fit min-w-50 sm:min-w-60">
                        <span className="text-sm font-semibold whitespace-nowrap">Start a fundraiser</span>
                    </button>
                    <ul className="mt-8 flex items-center gap-6">
                        {
                            BADGES.map(({ title, Icon }) => (
                                <li key={title} className="flex items-center justify-center gap-2 text-gray-400">
                                    <Icon size={16} />
                                    <span className="text-xs">{title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hidden sm:flex md:flex-1">
                    <ul className="pt-20 pb-20 w-full h-full flex justify-center lg:justify-end gap-2 sm:gap-4">
                        {
                            CATEGORIES.slice(0, 4).map(({ title, href, image }, index) => (
                                <li key={title} className={`${index === 0 ? 'w-full max-w-[400px]' : 'min-w-30 lg:min-w-auto aspect-square lg:aspect-auto'} min-h-40 md:min-h-50 max-h-[560px]`}>
                                    <Link href={`/categories${href}`} className="overflow-hidden relative block w-full h-full rounded-2xl border border-gray-200">
                                        <Image src={image} fill alt={`${title} category image`} className="object-cover" />
                                        <div className={`${index === 0 ? 'to-80% via-transparent to-gray-500/80' : 'items-center via-gray-500/50 to-gray-500'} bg-gradient-to-b p-4 justify-between relative w-full h-full flex flex-col gap-4`}>
                                            <span className={`${index !== 0 ? 'opacity-0' : ''} flex items-center justify-center w-8 sm:w-10 md:w-12 aspect-square rounded-full border border-gray-300 text-gray-300`}>
                                                <HiOutlineArrowUpRight size={20} />
                                            </span>
                                            <div className="flex flex-col gap-1 sm:gap-2">
                                                <h3>
                                                    <span className={`${index === 0 ? 'text-white' : 'lg:-rotate-90 lg:w-[2.25rem] whitespace-nowrap tracking-tight text-white'} block text-base sm:text-lg md:text-xl lg:text-4xl`}>{title}</span>
                                                </h3>
                                                {
                                                    index === 0 ?
                                                        <p className="text-xs lg:text-sm">
                                                            <span className="text-gray-300 max-w-[24ch]">More than $50 million is raised every week on GoFundMe.*</span>
                                                        </p> :
                                                        null
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}