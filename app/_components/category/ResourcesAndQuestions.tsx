import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";
import { FiArrowRight, FiPlus } from "react-icons/fi";


const RESOURCES = [
    {
        title: "FundDreamz's top fundraising tips",
        href: ""
    },
    {
        title: "How to Raise Money for a Business",
        href: ""
    },
    {
        title: "20 Fundraiser Sharing Tips to Increase Donations",
        href: ""
    }
];

const FAQs = [
    {
        question: "Does my business need to reach its fundraising goal in order to receive the money I’ve raised?",
        answer: "No, you can securely set up your bank transfer and start receiving your money within 3-5 days. You can also adjust your fundraising goal throughout the process. "
    },
    {
        question: "What details should I include in my business fundraiser on GoFundMe?",
        answer: "The more details you feel comfortable sharing about the costs you need for your business, the more confident your potential donors will feel in supporting you."
    },
    {
        question: "How do I invite team members to help me?",
        answer: "If you have members of your business that you want to help run your fundraiser, you can add them as team members to your fundraiser. Once you’ve set up and published your fundraiser, you’ll see an option on your fundraising dashboard to add team members. For a detailed guide on adding your team members, view our Help Center article. "
    },
    {
        question: "How long will it take to receive the money?",
        answer: "The process of setting up and verifying transfers can take 3-7 business days or longer to complete. Then, once your first transfer is sent, it will take on average 2-5 business days for the funds to safely be deposited into the bank account on file."
    },
    {
        question: "Can I upload videos to my fundraiser?",
        answer: "Yes, videos are a great way to showcase your business and connect with friends, community members, and anyone who would potentially support your business. Try these tips for using video in your fundraiser."
    },
    {
        question: "How much of the money will I keep?",
        answer: "One small transaction fee (2.9% + $0.30) is automatically deducted per donation—that’s it. Everything else goes directly to your cause. For more information and to estimate what you will receive, check out the GoFundMe pricing calculator."
    },
    {
        question: "What countries are supported to fundraise for on GoFundMe?",
        answer: "There are currently 20 countries where our payment processors can send funds. Review our list of supported countries and currencies to help ensure that your country is supported."
    }
]

export default function ResourcesAndQuestions() {

    return (
        <div className="px-10 bg-gray-50">
            <section className="mx-auto max-w-lg w-full pt-24 pb-10">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter">
                        <span>Resources for business fundraising</span>
                    </h3>
                    <button className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More ideas</span>
                        <FaArrowRight size={16} />
                    </button>
                </div>
                <ul className="mt-12 flex gap-5">
                    {
                        RESOURCES.map(({ title, href }) => (
                            <li key={title} className="flex-1">
                                <Link href={href} className="flex items-center gap-10 p-8 h-full rounded-xl bg-white outline-2 outline-transparent hover:outline-gray-300">
                                    <span className="flex-1 text-lg font-semibold tracking-tighter">{title}</span>
                                    <FiArrowRight size={24} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className="mx-auto max-w-lg w-full pt-24 pb-20">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-3xl font-semibold tracking-tighter">
                        <span>Questions about business fundraising on FundDreamz</span>
                    </h3>
                    <button className="flex items-center justify-center h-10 gap-3 rounded-full px-4 bg-gray-100 hover:bg-gray-50">
                        <span className="font-semibold tracking-tighter">More FAQs</span>
                        <FaArrowRight size={16} />
                    </button>
                </div>
                <ul className="mt-10 flex flex-col gap-4">
                    {
                        FAQs.map(({ question, answer }, index) => (
                            <li key={question} className="flex flex-col gap-4 rounded-2xl bg-white">
                                <div className={`flex-1 flex justify-between items-center gap-8 p-6 border-b ${index === 0 ? 'border-gray-100' : 'border-transparent'}`}>
                                    <h4 className="font-semibold tracking-tighter text-xl"><span>{question}</span></h4>
                                    <button className="flex items-center justify-center w-12 hover:bg-gray-100 rounded-full aspect-square">
                                        <FiPlus size={20} />
                                    </button>
                                </div>
                                <p className={`${index === 0 ? 'block' : 'hidden'} text-lg max-w-[80ch] tracking-tighter px-6 pb-8`}><span>{answer}</span></p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}