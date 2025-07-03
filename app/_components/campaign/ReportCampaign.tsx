import Link from "next/link";
import { LuFlag } from "react-icons/lu";


export default function ReportCampaign() {

    return (
        <Link href="" className="my-8 h-10 px-4 w-fit flex items-center justify-center gap-2 rounded-full hover:bg-gray-100">
            <LuFlag size={18} />
            <span className="text-sm font-semibold tracking-tighter">Report fundraiser</span>
        </Link>
    )
};