import { FaArrowRight, FaEarListen, FaQrcode } from "react-icons/fa6";
import { RiMicAiLine } from "react-icons/ri";

const TIPS = [
    {
        Icon: FaEarListen,
        title: "Craft a compelling story of your business",
        description: "Clearly articulate your business vision challenges and how the fund will be used. Engage your audience with photos or even a video of you explaining your business story and asking for support. If possible, include estimate funds or where funds will be going. For example, if you need help raising the remaining $15,000 for a food truck."
    },
    {
        Icon: RiMicAiLine,
        title: "Ask for people to help spread the word",
        description: "When asking for support, ensure donors know their contribution is greatly appreciated and if they can share your fundraiser link with their own network. It would help you even further."
    },
    {
        Icon: FaQrcode,
        title: "Share your fundraiser regularly",
        description: "Besides reaching out using social media, text and email. Try printing out a QR code that links to your fundraiser and put the flyers around the community where potential supporters can find then easily donate."
    }
]

export default function Tips() {

    return (
        <div className="bg-white px-10 overflow-hidden">
            <section className="pt-20 pb-10 mx-auto max-w-lg w-full">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter max-w-[24ch]">
                        <span>Tips for your business fundraiser on FundDreamz</span>
                    </h3>
                    <button className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More tips</span>
                        <FaArrowRight size={16} />
                    </button>
                </div>
                <div className="mt-12 max-w-lg w-full">
                    <ul className="grid grid-cols-[repeat(3,_45%)] gap-5">
                        {
                            TIPS.map(({ title, description, Icon }) => (
                                <li key={title} className="flex flex-col p-8 bg-gray-50 rounded-4xl">
                                    <span className="w-16 aspect-square bg-gray-100 rounded-3xl flex items-center justify-center">
                                        <Icon size={32} />
                                    </span>
                                    <h4 className="mt-6 text-2xl font-semibold tracking-tighter max-w-[24ch]">
                                        <span>{title}</span>
                                    </h4>
                                    <p className="mt-8 tracking-tighter text-lg">
                                        <span>{description}</span>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-14 mx-auto w-full max-w-100 rounded-lg bg-gray-100 overflow-hidden">
                    <div className="block h-2.5 rounded-full w-1/2 bg-main"></div>
                </div>
            </section>
        </div>
    )
}