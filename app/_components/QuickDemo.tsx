import { FaPlay } from "react-icons/fa";


const DEMOS = [
    {
        subTitle: "Our tools",
        title: "Use our tools to create your fundraiser",
        description: "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.\n Get tips for starting your fundraiser.",
        image: "",
        extraTips: true
    },
    {
        subTitle: "Reach and share",
        title: "Reach donors by sharing",
        description: "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
        image: "",
        extraTips: false
    },
    {
        subTitle: "Security ensured",
        title: "Securely receive funds",
        description: "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
        image: "",
        extraTips: false
    },
]

export default function QuickDemo() {

    return (
        <section className="px-4 sm:px-6 md:px-10 bg-[#fbfaf8]">
            <div className="mx-auto max-w-lg pt-30 pb-20 flex flex-col items-center gap-20">
                <h2 className="font-semibold max-w-[36ch] text-center text-lg sm:text-xl md:text-2xl">Fundraising on FundDreams is easy, powerful, and trusted</h2>
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center lg:items-stretch justify-between w-full">
                    <div className="flex flex-col gap-16 lg:gap-60">
                        <ul className="flex items-center gap-3 sm:gap-6">
                            {
                                DEMOS.map(({ subTitle }, index) => (
                                    <li key={subTitle}>
                                        <button className={`${index === 0 ? 'border-main/40 text-main pr-3' : 'border-gray-200 text-secondary/80 pr-1 sm:pr-3'} border flex items-center justify-center gap-2 rounded-full p-1 font-semibold`}>
                                            <span className={`${index === 0 ? 'bg-main text-background' : 'bg-secondary/80 text-background'} w-5 sm:w-7 aspect-square rounded-full flex items-center justify-center  text-sm`}>{index + 1}</span>
                                            <span className={`${index === 0 ? '' : 'hidden sm:block'} text-xs sm:text-sm whitespace-nowrap`}>{subTitle}</span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col">
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold max-w-[32ch]">{DEMOS[0].title}</h3>
                            <p className="text-base sm:text-lg lg:text-xl max-w-[40ch] mt-6">{DEMOS[0].description}</p>
                            <p className="text-xs mt-4">Get tips for start your <span className="underline">fundraiser</span></p>
                        </div>
                    </div>
                    <div className="relative flex-1 min-h-[400px] w-full max-w-[640px] flex flex-col">
                        <div className="relative flex-1 flex rounded-2xl bg-main text-background overflow-hidden pt-10 px-4 md:px-6">
                            <button className="absolute top-2 left-2 flex items-center justify-center w-12 rounded-full border border-transparent hover:border-background aspect-square text-background">
                                <FaPlay size={20} className="ml-1" />
                            </button>
                            <div className="mx-auto w-full max-w-[320px] rounded-t-4xl bg-background"></div>
                        </div>
                        <span className="relative overflow-hidden block h-1.5 mt-2 rounded-full bg-gray-200 after:absolute after:top-0 after:left-0 after:w-1/2 after:h-full after:bg-secondary"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}