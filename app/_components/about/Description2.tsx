import Image from "next/image";

import { GoTasklist } from "react-icons/go";
import { LuHeartHandshake } from "react-icons/lu";
import { MdDevicesOther } from "react-icons/md";

import { children } from "@/app/_assets/images";

const POINTERS = [
    {
        title: "Easy",
        description: "Start fundraising in just a few steps.",
        Icon: GoTasklist
    },
    {
        title: "Powerful",
        description: "Connect with your community and amplify your cause.",
        Icon: MdDevicesOther
    },
    {
        title: "Trusted",
        description: "Chosen by over 190 million people worldwide.",
        Icon: LuHeartHandshake
    }
]

export default function Description2() {

    return (
        <div className="px-10 bg-gray-100">
            <section className="pt-30 pb-20 mx-auto max-w-lg w-full flex gap-16">
                <div className="flex-1 grid gap-5 grid-cols-3 grid-rows-2">
                    <div className="relative row-span-2 col-span-1 min-h-[400px]">
                        <Image src={children} alt="Image of a mother and her daughter" fill className="object-cover rounded-xl" />
                    </div>
                    {
                        POINTERS.map(({ title, description, Icon }, index) => (
                            <div key={title} className={`${index === 0 ? 'col-span-2' : 'col-span-1'} bg-gray-200 row-span-1 p-4 flex flex-col gap-4 rounded-2xl overflow-hidden`}>
                                <span className="w-fit h-fit flex items-center justify-center">
                                    <Icon size={24} />
                                </span>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl font-semibold tracking-tighter"><span>{title}</span></h4>
                                    <p className="text-base font-semibold tracking-tighter"><span>{description}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter">
                        <span>Want to know more?</span>
                    </h3>
                    <p className="text-base max-w-[40ch] font-semibold tracking-tighter">
                        <span className="">Learn more about the process of starting a GoFundMe, tips and tricks, and see examples of fundraisers.</span>
                    </p>
                    <button className="mt-4 flex items-center justify-center px-6 h-10 w-fit rounded-full bg-green-400 text-dark-green">
                        <span className="font-semibold tracking-tighter">Learn more</span>
                    </button>
                </div>
            </section>
        </div>
    )
}