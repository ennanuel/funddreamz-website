import Link from "next/link"
import { SlArrowRight } from "react-icons/sl"

const TOPICS = [
    {
        title: "How to Help: FSU Shooting Relief",
        description: "On April 17, many people were killed and injured at FSU in Tallahassee. Donate to verified fundraisers today to help the people and families affected.",
        cta: "Donate now",
        image: ""
    },
    {
        title: "Los Angeles County Wildfires: How to Help",
        description: "",
        cta: "Donate now",
        image: ""
    },
    {
        title: "Fundraising FAQs: Israel/Gaza",
        description: "",
        cta: "Learn more",
        image: "",
    },
    {
        title: "GoFundMe Profiles",
        description: "",
        cta: "Learn more",
        image: ""
    },
]

export default function FeaturedTopics() {

    return (
        <section className="px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg pt-10 pb-20">
                <h2 className="font-semibold text-lg sm:text-xl md:text-2xl">Featured topics</h2>
                <div className="mt-6 group flex flex-col md:flex-row bg-gray-100/50 rounded-xl overflow-hidden">
                    <div className="relative p-4 flex-1 w-full aspect-square md:aspect-auto max-h-[320px] bg-gray-100">
                        <span className="w-fit flex items-center justify-center h-6 rounded-full bg-light-purple text-purple-700 px-3">
                            <span className="text-xs font-semibold">Urgent cause</span>
                        </span>
                    </div>
                    <div className="flex-1 w-full flex flex-col px-6 md:px-14 py-6 md:py-16">
                        <h3 className="font-semibold text-base md:text-lg">{TOPICS[0].title}</h3>
                        <p className="mt-2 text-sm hidden md:block">{TOPICS[0].description}</p>
                        <span className="mt-6 md:mt-10 w-fit flex items-center justify-center gap-2 h-8 pl-0 group-hover:pl-4 group-hover:bg-background pr-3 rounded-lg">
                            <span className="text-xs font-semibold">{TOPICS[0].cta}</span>
                            <SlArrowRight size={10} />
                        </span>
                    </div>
                </div>
                <div className="mt-6 gap-6 hidden md:grid grid-cols-3">
                    {
                        TOPICS.slice(1,).map(({ title, cta, image }) => (
                            <Link href="/" key={title} className="group flex flex-col rounded-xl overflow-hidden bg-gray-100/50">
                                <div className="relative h-50 p-4 bg-gray-100">
                                    <span className="w-fit flex items-center justify-center h-6 rounded-full bg-light-purple text-purple-700 px-3">
                                        <span className="text-xs font-semibold">Urgent cause</span>
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col justify-between p-8">
                                    <h3 className="font-semibold text-lg">{title}</h3>
                                    <span className="mt-4 w-fit flex items-center justify-center gap-2 h-8 pl-0 group-hover:pl-4 group-hover:bg-background pr-3 rounded-lg">
                                        <span className="text-xs font-semibold">{cta}</span>
                                        <SlArrowRight size={10} />
                                    </span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="mt-6 flex md:hidden items-center justify-center gap-1">
                    {
                        TOPICS.map((sth, index) => (
                            <span key={sth.title} className={`${index === 0 ? 'w-6 bg-secondary' : 'w-1 bg-gray-200'} block h-1 rounded-full`} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}