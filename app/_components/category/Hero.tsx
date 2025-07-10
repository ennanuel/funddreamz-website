
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";


export default function Hero() {

    return (
        <div>
            <div className="px-10 overflow-hidden">
                <section className="mx-auto max-w-lg w-full min-h-[calc(100vh_-_64px)] flex">
                    <div className="py-20 flex-1 flex flex-col justify-center">
                        <h2 className="font-bold tracking-tighter text-5xl max-w-[20ch]">
                            <span>Start a Business Fundraiser on FundDreamz</span>
                        </h2>
                        <p className="mt-10 font-semibold tracking-tighter text-xl max-w-[40ch]">
                            <span>With no fee to start a fundraiser or pressure to reach your goal, fundraising on GoFundMe is a trusted choice for business owners.</span>
                        </p>
                        <button className="mt-6 w-fit h-14 px-6 flex items-center justify-center min-w-[200px] rounded-full bg-green-400 text-dark-green outline-3 outline-dark-green">
                            <span className="font-semibold tracking-tighter">Start your Dream</span>
                        </button>
                    </div>
                    <div className="flex-1 flex gap-2 items-center justify-center">
                        <div className="flex flex-col justify-center items-end gap-2">
                            <Image1 />
                            <Image3 />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image2 />
                        </div>
                    </div>
                </section>
            </div>
            <div className="relative px-10">
                <section className="relative pb-20 mx-auto max-w-lg w-full min-h-[400px] flex flex-col gap-10 items-center justify-center">
                    <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-main border-3 border-white">
                        <FaQuoteRight size={20} className="text-white" />
                    </span>
                    <h2 className="relative text-center text-4xl font-bold tracking-tighter max-w-[40ch]">
                        <span className="text-dark-green">Everything you need to help your fundraiser succeed is here- Start fundraising on FundDreamz today</span>
                    </h2>
                </section>
            </div>
        </div>
    )
};

function Image1() {

    return (
        <div className="relative h-70 w-50">
            <Image src="/home/emergency1.jpg" alt="First hero image" fill className="object-cover rounded-xl" />
        </div>
    )
};

function Image2() {

    return (
        <div className="relative h-60 w-70">
            <Image src="/home/business2.jpg" alt="Second hero Image" fill className="object-cover rounded-xl" />
        </div>
    )
};

function Image3() {

    return (
        <div className="relative h-50 w-80">
            <Image src="/home/agriculture3.jpg" alt="Third hero image" fill className="object-cover rounded-xl" />
        </div>
    )
};