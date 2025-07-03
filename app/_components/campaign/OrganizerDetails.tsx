import { FiUser } from "react-icons/fi";


export default function OrganizerDetails() {

    return (
        <div className="px-4 bg-white rounded-2xl py-6 mt-10 border-2 border-gray-100">
            <h3 className="text-xl font-semibold tracking-tighter"><span>Organizer</span></h3>
            <div className="mt-4 flex gap-4">
                <div>
                    <span className="flex items-center justify-center bg-gray-200 w-10 aspect-square rounded-full">
                        <FiUser size={18} />
                    </span>
                </div>
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold tracking-tighter">Your Southend</span>
                    <span className="mt-2 text-sm tracking-tighter">Organizer</span>
                    <span className="text-sm tracking-tighter">England</span>
                    <button className="mt-4 flex items-center justify-center h-10 rounded-full bg-gray-50 hover:bg-gray-100 px-4">
                        <span className="text-sm font-semibold tracking-tighter">Contact</span>
                    </button>
                </div>
            </div>
        </div>
    )
}