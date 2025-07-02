import { BiSolidDonateHeart } from "react-icons/bi"


const STATS = [
    {
        title: "$40 billion",
        description: "raised through our technology since 2010"
    },
    {
        title: "190 million+",
        description: "people worldwide helping one another"
    },
    {
        title: "2 donations/sec",
        description: "toward people and causes in need of support"
    }
]

export default function Description() {

    return (
        <div className="overflow-hidden px-10 bg-light-purple">
            <section className="mx-auto max-w-lg pt-10 pb-20 w-full flex flex-col gap-20">
                <div className="flex gap-16">
                    <p className="flex-1 text-2xl font-semibold tracking-tighter max-w-[40ch]">
                        <span className="text-dark-purple/60">
                            <span>Since its launch in 2010, GoFundMe has been committed to helping people help each other. In 2022, FundDreamz acquired Classy, which operates today as <span className="text-purple-900">FundDreamz Pro</span>.</span>
                            <br />
                            <br />
                            <span>GoFundMe Pro is the next evolution in nonprofit fundraising, combining Classy&apos;s powerful software with FundDreamz&apos;s scale and intelligence, ensuring organizations have even more opportunities to inspire giving and drive impact.</span>
                            <br />
                            <br />
                            <span>Learn about our commitment to your data <span className="text-purple-900">privacy</span> here.</span>
                        </span>
                    </p>
                    <div className="relative flex-1 flex">
                        <div className="absolute w-full h-full top-12 left-12 flex justify-center">
                            <BiSolidDonateHeart className="text-[360px] text-purple-300" />
                        </div>
                        <div className="absolute w-full h-full top-6 left-6 flex justify-center">
                            <BiSolidDonateHeart className="text-[360px] text-purple-400" />
                        </div>
                        <div className="relative flex-1 flex justify-center">
                            <BiSolidDonateHeart className="text-[360px] text-purple-800" />
                        </div>
                    </div>
                </div>
                <ul className="flex gap-10">
                    {
                        STATS.map(({ title, description }) => (
                            <li key={title} className="flex flex-col gap-6">
                                <h3 className="max-w-[16ch] text-4xl font-semibold tracking-tighter"><span className="text-purple-900">{title}</span></h3>
                                <p className="font-semibold text-lg tracking-tighter max-w-[24ch]"><span className="text-purple-900/60">{description}</span></p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}