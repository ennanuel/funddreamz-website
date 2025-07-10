
import Image from "next/image";


export default function Cta() {

    return (
        <div className="px-10 bg-dark-green">
            <section className="mx-auto max-w-lg w-full pt-40 pb-30">
                <div className="flex justify-center gap-12">
                    <div className="flex-1 relative">
                        <Image src="/home/business2.jpg" alt="Business image" fill className="object-cover rounded-2xl" />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-4xl max-w-[24ch] font-semibold tracking-tigther">
                            <span className="text-green-200">Why start a business fundraiser on FundDreamz?</span>
                        </h3>
                        <p className="mt-8 text-xl font-semibold tracking-tighter">
                            <span className="text-green-200/60">Launching a business fundraiser on GoFundMe provides a straightforward and effective path to turning your entrepreneurial dreams into reality. As the world&apos;s leading community-powered fundraising platform, GoFundMe empowers business owners to connect directly with a supportive network of donors eager to support new ventures and innovative ideas. Whether you are beginning a startup, expanding your small business, or overcoming financial hurdles, FundDream&apos;s platform offers easy-to-use tools for your business needs.</span>
                        </p>
                        <button className="mt-14 w-fit rounded-full flex items-center justify-center h-12 px-6 text-dark-green bg-green-200 hover:bg-green-300">
                            <span className="font-semibold tracking-tighter">Start your Dream</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}