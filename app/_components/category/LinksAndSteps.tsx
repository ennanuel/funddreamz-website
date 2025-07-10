import { FiLink } from "react-icons/fi";
import { LuSchool } from "react-icons/lu";
import { PiBandaidsLight, PiBriefcase, PiFarm, PiPawPrint } from "react-icons/pi";

const LINKS = [
    {
        title: "How to start",
        href: "#how-to-start",
        isActive: true
    },
    {
        title: "Tips",
        href: "#tips"
    },
    {
        title: "Examples",
        href: "#examples"
    },
    {
        title: "Resources",
        href: "#resources"
    },
    {
        title: "FAQs",
        href: "#faqs"
    },
    {
        title: "Why start?",
        href: "#why-start"
    }
];

const STEPS = [
    {
        heading: "Step 1",
        title: "Our tools help create your fundraiser",
        description: "Click the ‘Start a Dream button to get started. You’ll be guided by prompts to add fundraiser details and set your goal, which can be changed anytime.",
        Element: Tools
    },
    {
        heading: "Step 2",
        title: "Share your fundraiser link to reach donors",
        description: "Once live, share your fundraiser link with friends and family to start gaining momentum. You’ll also find helpful resources for running your fundraiser in your GoFundMe dashboard.",
        Element: Share
    },
    {
        heading: "Step 3",
        title: "Securely receive the funds you raise",
        description: "Add your bank information to securely start receiving funds or invite your intended recipient to add theirs. You don’t need to reach your fundraising goal to receive your money.",
        Element: Payment
    }
]


export default function LinksAndSteps() {

    return (
        <div className="px-10 bg-white">
            <ul className="py-34 mx-auto max-w-lg w-full flex justify-center items-center gap-1">
                {
                    LINKS.map(({ title, href, isActive }) => (
                        <li key={title} className="">
                            <a href={href} className="block">
                                <span className={`${isActive ? 'bg-black/90 text-white' : 'hover:bg-gray-100 text-gray-700'} min-w-30 h-10 px-4 flex items-center justify-center rounded-lg`}>
                                    <span className="font-semibold tracking-tighter">{title}</span>
                                </span>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <section className="mx-auto max-w-lg w-full flex flex-col">
                <h3 className="text-3xl text-center font-semibold tracking-tighter">
                    <span>Start fundraising on FundDreamz</span>
                </h3>
                <ul className="mt-10 grid grid-cols-3 gap-5">
                    {
                        STEPS.map(({ heading, title, description, Element }) => (
                            <li key={title} className="pb-8 bg-purple-100 rounded-3xl overflow-hidden">
                                <div className="relative bg-light-purple min-h-60 p-6 pb-0 flex flex-col gap-6 justify-between">
                                    <span className="h-6 w-fit flex items-center justify-center rounded-full px-3 bg-dark-purple text-light-purple text-sm font-semibold tracking-tighter">{heading}</span>
                                    <Element />
                                </div>
                                <div className="mt-6 flex flex-col gap-6 p-6">
                                    <h4 className="text-2xl font-semibold tracking-tighter">
                                        <span className="text-dark-green">{title}</span>
                                    </h4>
                                    <p className="tracking-tighter text-lg">
                                        <span>{description}</span>
                                    </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <button className="my-24 w-fit h-12 px-8 flex items-center justify-center mx-auto rounded-full outline-2 outline-dark-green bg-green-400 text-dark-green">
                    <span className="font-semibold tracking-tighter">Start your Dream</span>
                </button>
            </section>
        </div>
    )
};

function Tools() {

    return (
        <div className="flex-1 overflow-hidden bg-white rounded-lg px-8 py-4 mb-6 flex items-center gap-2">
            {
                [PiBandaidsLight, PiBriefcase, LuSchool, PiFarm, PiPawPrint, ].map((Icon, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        <span className="flex w-20 aspect-square rounded-lg border border-gray-200 items-center justify-center">
                            <Icon size={36} />
                        </span>
                        <span className="block w-14 h-2 rounded-full bg-gray-100"></span>
                    </div>
                ))
            }
        </div>
    )
};

function Share() {
    
    return (
        <div className="flex-1 p-4 mb-6 flex items-center justify-center">
            <span className="w-full max-w-[320px] flex items-start justify-center gap-4 p-2 bg-white rounded-2xl">
                <span className="min-w-12 h-12 rounded-full bg-main text-white flex items-center justify-center">
                    <FiLink size={20} />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                    <span className="text-lg font-semibold tracking-tighter">Copy link</span>
                    <span className="font-semibold tracking-tighter text-gray-600 whitespace-nowrap">funddreamz.com/fund.dre.url...</span>
                    <span className="block max-w-40 h-4 rounded-full bg-gray-100"></span>
                </div>
            </span>
        </div>
    )
};

function Payment() {

    return (
        <div className="flex-1 p-4 pb-0 flex justify-center items-stretch">
            <div className="w-full flex-1 flex flex-col gap-2 overflow-hidden max-w-[400px] bg-white rounded-t-2xl p-4 pb-0">
                <span className="text-lg font-semibold tracking-tighter">Transfers</span>
                <div className="mt-1 flex-1 flex flex-col p-3 rounded-xl bg-dark-green">
                    <span className="text-green-100 text-2xl font-semibold tracking-tighter">$2,305</span>
                    <span className="text-green-100 font-semibold tracking-tighter text-xs">Payment made by <span className="font-bold">person...</span></span>
                </div>
                <span className="block h-4 rounded-t-full bg-light-green"></span>
            </div>
        </div>
    )
}