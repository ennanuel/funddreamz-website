import { children3, peopleHugging, personInCar, personTyping } from "@/app/_assets/images"
import Image from "next/image"
import Link from "next/link"


const HIGHLIGHTED_BLOGS = [
    {
        alt: "Young boy posing for the camera",
        title: "How to Ask for Donations: 8 Tips for Maximizing Success",
        description: "Many of us have been in a situation where we’ve needed to ask for help. If you’ve been in this…",
        date: "June 2, 2025",
        readDuration: "8 min read",
        image: children3
    },
    {
        alt: "A person typing on a laptop",
        title: "How to Write a GoFundMe Fundraiser Story that Inspires Donations",
        date: "October 31, 2024",
        readDuration: "0 min read",
        image: personTyping
    },
    {
        alt: "People hugging in a train",
        title: "How to Choose the Best Crowdfunding Website for Your Next Fundraiser",
        description: "Crowdfunding has become essential when raising money for everything from new product launches to medical…",
        date: "May 14, 2025",
        readDuration: "0 min read",
        image: peopleHugging
    },
    {
        alt: "Black guy sitting in a car, smiling",
        title: "The Top Resources for Car Repair Financial Assistance",
        description: "Did you know that the average vehicle on US roads is 12.6 years old? This…",
        date: "May 16, 2025",
        readDuration: "9 min read",
        image: personInCar
    }
]

export default function Highlights() {

    return (
        <div className="px-10 bg-gray-50">
            <section className="mx-auto max-w-lg w-full">
                <ul className="grid grid-cols-3 grid-rows-[auto_auto] gap-5">
                    {
                        HIGHLIGHTED_BLOGS.map(({ title, description, image, alt, date, readDuration }, index) => (
                            <li key={title} className={`${index === 0 ? 'col-span-full' : 'col-span-1'} flex`}>
                                <Link href="" className={`${index === 0 ? '-mt-16 flex-row' : 'flex-col'} group flex-1 p-3 bg-white rounded-2xl flex outline-2 outline-transparent hover:outline-main/20`}>
                                    <div className={`${index === 0 ? 'flex-1 min-h-60' : 'w-full aspect-square min-h-40 max-h-60'} relative`}>
                                        <Image src={image} alt={alt} fill className="block object-cover rounded-xl" />
                                    </div>
                                    <div className={`${index === 0 ? 'px-8 py-6 flex-1 justify-center' : 'pt-6 p-2 justify-between flex-1'} flex flex-col gap-8`}>
                                        <h4 className="text-2xl font-semibold tracking-tighter">
                                            <span className="group-hover:text-main">{title}</span>
                                        </h4>
                                        <div className="flex flex-col gap-8">
                                            <p className="font-semibold tracking-tighter">
                                                <span>{description}</span>
                                            </p>
                                            <div className="flex items-center justify-start gap-3 text-base font-semibold tracking-tighter text-gray-500">
                                                <span>{date}</span>
                                                <span>•</span>
                                                <span>{readDuration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}