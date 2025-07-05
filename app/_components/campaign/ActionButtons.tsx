


export default function ActionButtons() {

    return (
        <div className="mx-4 pb-1 flex items-center gap-4">
            <button className="flex-1 flex items-center justify-center h-10 px-4 rounded-full outline-2 outline-gray-400 bg-white hover:bg-gray-100 text-gray-700">
                <span className="font-semibold tracking-tighter text-sm">Make a donation</span>
            </button>
            <button className="flex-1 flex items-center justify-center h-10 px-4 rounded-full outline-2 outline-gray-400 bg-white hover:bg-gray-100 text-gray-700">
                <span className="font-semibold tracking-tighter text-sm">Share</span>
            </button>
        </div>
    )
}