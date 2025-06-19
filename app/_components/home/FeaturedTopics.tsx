import { TOPICS } from "@/app/assets/data";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";


export default function FeaturedTopics() {

    return (
        <div className="px-10 bg-purple-300 text-purple-600">
            <section className="min-h-screen w-full max-w-lg mx-auto pt-25 pb-30">
                <h2 className="text-6xl font-bold tracking-tighter">
                    <span className="text-purple-900/70">Featured topics</span>
                </h2>
                <ul className="mt-10 grid grid-cols-3 grid-rows-2 gap-5">
                    {
                        TOPICS.map(({ title, description, image, cta, isUrgent }, index) => (
                            <li key={title} className={`${index === 0 ? 'col-span-3 row-span-1' : 'col-span-1 row-span-1'} flex`}>
                                <Link href="" className={`${index === 0 ? 'grid-cols-2 gap-13' : 'grid-cols-1 gap-8'} group grid p-4 flex-1 rounded-2xl overflow-hidden bg-gray-100`}>
                                    <div className="relative p-4 min-h-[160px] bg-gray-200 rounded-xl overflow-hidden">
                                        <Image src={image} alt={title} fill className="object-cover block" />
                                        {
                                            isUrgent ?
                                                <span className="relative flex items-center justify-center w-fit h-7 px-3 rounded-full bg-purple-800 text-purple-200 text-sm font-semibold tracking-tight">Urgent cause</span> :
                                                null
                                        }
                                    </div>
                                    <div className={`${index === 0 ? 'justify-center' : ''} flex flex-col justify-between gap-6`}>
                                        <div className="flex flex-col gap-6">
                                            <h3><span className="font-semibold text-xl tracking-tighter">{title}</span></h3>
                                            {
                                                index === 0 ?
                                                    <p><span className="tracking-tighter font-semibold">{description}</span></p> :
                                                    null
                                            }
                                        </div>
                                        <span className="w-fit h-8 rounded-full flex items-center justify-center gap-3 pl-4 pr-2 -translate-x-4 text-gray-800 group-hover:bg-white group-hover:text-purple-600 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(.3,_1,_.16,_1)]">
                                            <span className="text-sm font-semibold tracking-tighter whitespace-nowrap">{cta}</span>
                                            <FaAngleRight size={14} />
                                        </span>
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