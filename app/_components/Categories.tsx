import Link from "next/link"
import { HiArrowUpRight } from "react-icons/hi2"


const CATEGORIES = [
    {
        title: "Yourself",
        description: "Funds are delivered to your bank account for your own use"
    },
    {
        title: "Friends and family",
        description: "You’ll invite a beneficiary to receive funds or distribute them yourself"
    },
    {
        title: "Charity",
        description: "Funds are delivered to your chosen nonprofit for you"
    }
]

export default function Categories() {

    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg py-20">
                <h2 className="text-xl md:text-2xl font-semibold">Fundraise for anyone</h2>
                <ul className="mt-4 flex flex-col">
                    {
                        CATEGORIES.map(({ title, description }) => (
                            <li key={title}>
                                <Link href="/" className="group py-10 flex items-center justify-between gap-6 border-b border-gray-200">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h3>
                                        <p className="text-sm md:text-base">{description}</p>
                                    </div>
                                    <span className="w-12 min-w-12 sm:w-14 aspect-square rounded-full flex items-center justify-center border border-gray-200 text-secondary group-hover:text-background group-hover:bg-secondary group-hover:border-secondary">
                                        <HiArrowUpRight size={24} />
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}