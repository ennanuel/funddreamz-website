import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";


export default function Header() {

    return (
        <header className="px-10 bg-white border-b border-gray-100">
            <nav className="h-16 mx-auto max-w-lg w-full grid grid-cols-[1fr_auto_1fr] gap-6">
                <div className="flex justify-start items-center">
                    <Link href="/campaign/123" className="pl-2 pr-4 rounded-full h-8 flex items-center justify-center gap-2 hover:bg-gray-50">
                        <FaAngleLeft size={14} />
                        <span className="text-sm font-semibold tracking-tighter">Back to fundraiser</span>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <span className="flex flex-col items-center justify-center text-main">
                        <Image src="/favicon.svg" alt="FundDreamz logo" width={40} height={40} className="-mt-4 border w-10 h-auto" />
                        <span className="-mt-4 text-main font-bold tracking-tighter">FundDreamz</span>
                    </span>
                </div>
                <div className="flex justify-end items-center">
                    <p className="text-sm tracking-tighter text-gray-500">
                        <span>Already have an account? <Link href="" className="font-semibold text-gray-800">Sign in</Link></span>
                    </p>
                </div>
            </nav>
        </header>
    )
}