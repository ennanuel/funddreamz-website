import { FiShield } from "react-icons/fi";



export default function Description2() {

    return (
        <section className="bg-dark-green text-white px-4 sm:px-6 md:px-10">
            <div className="mx-auto max-w-lg min-h-screen max-h-[720px] flex flex-col justify-center gap-10 py-20">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    <span className="text-white">We've got you covered.</span>
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[2.2rem] md:leading-[2.6rem] lg:leading-[3rem] max-w-[44ch]">
                    <span className="text-white">FundDreams is a trusted leader in online fundraising. With simple pricing and a team of Trust & Safety experts in your corner, you can raise money or make a donation with peace of mind.</span>
                </p>
                <div className="flex items-center gap-2">
                    <FiShield size={16} />
                    <span className="text-xs">Read the <span className="underline">FundDreams Giving Guarantee</span></span>
                </div>
            </div>
        </section>
    )
}