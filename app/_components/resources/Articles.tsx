import { ARTICLES, OTHER_RESOURCES, RESOURCE_CATEGORIES } from "@/app/_assets/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PAGES = [1, 2, 3, 4, 5];


export default function Articles() {

    return (
        <div className="px-10 pt-24 pb-20 bg-gray-50">
            <section className="mx-auto max-w-lg w-full">
                <div className="grid grid-cols-[2fr_1fr] gap-12">
                    <div>
                        <h3 className="text-3xl font-semibold tracking-tighter">All articles</h3>
                        <ul className="mt-6 flex flex-col">
                            {
                                ARTICLES.map(({ title, readDuration, date }) => (
                                    <li key={title} className="border-b border-gray-200/50 hover:border-transparent">
                                        <Link href="" className="group py-10 px-6 flex flex-col gap-4 rounded-xl hover:bg-white">
                                            <div className="flex items-center gap-2 font-semibold tracking-tighter text-gray-500 group-hover:text-gray-400 -translate-x-6 group-hover:translate-x-0 transition-transform duration-500 ease-expo">
                                                <span>{date}</span>
                                                <span>•</span>
                                                <span>{readDuration}</span>
                                            </div>
                                            <h4 className="text-2xl font-semibold tracking-tighter -translate-x-6 group-hover:translate-x-0 transition-transform duration-500 ease-expo">
                                                <span className="text-gray-800 group-hover:text-main">{title}</span>
                                            </h4>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="pt-10">
                            <ul className="flex gap-2">
                                <li>
                                    <button className="flex items-center justify-center w-12 aspect-square rounded-full hover:bg-white">
                                        <span className="font-semibold tracking-tighter text-lg">
                                            <FaArrowLeft size={16} />
                                        </span>
                                    </button>
                                </li>
                                {
                                    PAGES.map((page) => (
                                        <li key={page}>
                                            <button className={`${page === 1 ? 'bg-white text-blue-900 outline-gray-300' : 'outline-gray-200'} flex items-center justify-center w-12 aspect-square rounded-full outline-2 hover:bg-white`}>
                                                <span className="font-semibold tracking-tighter text-lg">{page}</span>
                                            </button>
                                        </li>
                                    ))
                                }
                                <li>
                                    <button className="flex items-center justify-center w-12 aspect-square rounded-full hover:bg-white">
                                        <span className="font-semibold tracking-tighter text-lg">
                                            <FaArrowRight size={16} />
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-8 border-l border-gray-200">
                        <h3 className="font-semibold tracking-tighter text-3xl"><span className="">Categories</span></h3>
                        <ul className="mt-8 flex flex-col">
                            {
                                RESOURCE_CATEGORIES.map(({ title, href }) =>(
                                    <li key={title}>
                                        <Link href={href} className="flex items-center group min-h-10 px-4 py-2 rounded-md hover:bg-white">
                                            <span className="text-base font-semibold tracking-tighter text-gray-600 group-hover:text-main">{title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className="mt-12 flex flex-col gap-10">
                            {
                                OTHER_RESOURCES.map(({ title, image }) => (
                                    <li key={title}>
                                        <Link href="" className="flex flex-col gap-4 group">
                                            <Image src={image} alt={`${title} image`} width={400} height={400} className="w-full rounded-xl object-cover aspect-square max-h-60" />
                                            <span className="text-xl font-semibold tracking-tighter underline text-gray-700 group-hover:text-main">{title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}