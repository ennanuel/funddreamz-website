import { CATEGORIES_3 } from "@/app/_assets/data";
import Link from "next/link";


export default function CategoriesContainer() {

    return (
        <div className="px-10">
            <div className="mx-auto max-w-lg w-full pt-16 pb-20">
                <ul className="grid grid-cols-[repeat(4,_1fr)] gap-6">
                    {
                        CATEGORIES_3.slice(0, 16).map(({ title, href, hoverColor, Icon }) => (
                            <li key={title} className="flex">
                                <Link href={href} className={`${hoverColor} group w-full h-full relative overflow-hidden rounded-2xl bg-white border border-white text-gray-700 flex items-end min-h-40 p-4`}>
                                    <span className="absolute -bottom-2 -right-2 flex items-center justify-center">
                                        <Icon size={80} className="opacity-20" />
                                    </span>
                                    <span className="text-xl font-semibold tracking-tighter">{title}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}