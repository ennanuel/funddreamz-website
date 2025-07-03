import { FiUser } from "react-icons/fi";
import { LuBadgeCheck } from "react-icons/lu";



export default function UserDetails() {
    return (
        <div className="mx-4 py-4 flex gap-4 items-start">
            <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-gray-200 text-gray-800">
                <FiUser size={18} />
            </span>
            <div className="min-h-10 flex flex-col justify-center gap-1">
                <p className="min-h-10 flex items-center font-semibold tracking-tighter"><span>Your Southend is organizing this fundraiser.</span></p>
                <span className="w-fit flex items-center justify-center gap-3 h-8 pl-2 pr-4 rounded-full outline-2 outline-green-200 bg-white text-main">
                    <LuBadgeCheck size={16} />
                    <span className="whitespace-nowrap font-semibold tracking-tighter text-sm">Fundraiser verified</span>
                </span>
            </div>
        </div>
    )
};