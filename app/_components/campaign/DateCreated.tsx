import Link from "next/link";

export default function DateCreated() {

    return (
        <p className="px-4 pt-8 flex items-center gap-2 text-sm tracking-tighter">
            <span>Created 4 d ago</span>
            <span>·</span>
            <Link href="" className="underline text-gray-800">Funerals & Memorials</Link>
        </p>
    )
}