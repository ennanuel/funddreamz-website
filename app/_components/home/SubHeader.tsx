import { SubHeader as SubHeaderType, SubHeaderProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function SubHeader({ subLinks, href, article, isGrid, index, openSubHeader, closeSubHeader }: SubHeaderProps) {
    return (
        <div 
            id={`sub-header-${index}`} 
            className="sub-header absolute top-full left-0 hidden w-full h-[calc(100dvh_-_64px)] overflow-y-auto bg-white text-gray-800  px-10"
            onMouseOver={openSubHeader}
            onMouseOut={closeSubHeader}
        >
            <div className="mx-auto max-w-lg w-full h-full flex gap-10 overflow-x-clip">
                <ul className={`${isGrid ? 'grid grid-cols-3 gap-6' : 'flex flex-col gap-5'} flex-1 h-fit pt-20 pb-10`}>
                    {
                        subLinks?.map((subLink) => (
                            <li key={subLink.title}>
                                {
                                    subLink.description ?
                                        <NavLinkAlt {...subLink} /> :
                                        <NavLink {...subLink} />
                                }
                            </li>
                        ))
                    }
                </ul>
                {
                    article ?
                        <div className="flex-1 pt-20 pb-10 flex">
                            <article className="w-full flex flex-col justify-start">
                                <div className="relative flex-1 max-h-[320px] mb-6">
                                    <Image src={article.image} alt={article.title} fill className="block object-cover" />
                                </div>
                                {
                                    article.date ?
                                        <span className="text-lg font-semibold tracking-tighter text-gray-500">
                                            <span>News • </span>
                                            <span>{article.date}</span>
                                        </span> :
                                        null
                                }
                                <div className="mt-2 flex justify-between gap-4">
                                    <span className="text-2xl font-semibold tracking-tighter">{article.title}</span>
                                    <Link href={href} className="px-4 flex items-center justify-center rounded-full bg-green-200 text-dark-green h-10">
                                        <span className="whitespace-nowrap font-semibold tracking-tighter">{article.cta}</span>
                                    </Link>
                                </div>
                            </article>
                        </div> :
                        null
                }
            </div>
        </div>
    )
};

function NavLink({ title, href, isExternalLink }: SubHeaderType) {
    return (
        <Link href={href} className="flex items-center gap-1 hover:text-gray-700 hover:underline">
            <span className="text-2xl font-semibold tracking-tighter">{title}</span>
            {isExternalLink ? <FiArrowUpRight size={26} /> : null}
        </Link>
    )
};
function NavLinkAlt({ title, Icon, description, href }: SubHeaderType) {
    return (
        <Link href={href} className="flex gap-4 p-2 py-4 rounded-xl hover:bg-green-100">
            <span className="flex items-center justify-center h-8 w-8">
                {
                    Icon ? <Icon size={28} className="text-green-600" /> : null
                }
            </span>
            <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight">{title}</span>
                <span className="text-base tracking-tight font-normal text-gray-500">{description}</span>
            </div>
        </Link>
    )
};