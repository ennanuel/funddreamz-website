
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";


const PRICES = [
    {
        title: "No fee to create a fundraiser",
        price: "$0.00",
        description: "There’s no fee to start or manage your fundraiser.",
        color1: "var(--color-green-300)",
        color2: "var(--color-light-green)",
        textColor: "var(--color-dark-green)",
        cta: "Start a fundraiser"
    },
    {
        title: "Donor contributions to FundDreamz are optional",
        price: "$0.00",
        description: "Donors can help power GoFundMe with an optional contribution, but it’s never required.",
        color1: "var(--color-purple-300)",
        color2: "var(--color-light-purple)",
        textColor: "var(--color-dark-purple)",
        cta: "Get started"
    },
    {
        title: "One transaction fee",
        price: "2.9% + $0.30",
        description: "Automatically deducted from each donation, so you never have to worry about paying a bill. International transaction and conversion fees may apply based on your payment method. ",
        color1: "var(--color-orange-300)",
        color2: "var(--color-light-orange)",
        textColor: "var(--color-dark-orange)",
        cta: "Get started",
        containsLink: true,
        Icon: BsFillArrowDownCircleFill,
        extraDescription: "*GST Included"
    }
];

export default function Hero() {

    return (
        <div className="px-10">
            <section className="mx-auto max-w-lg w-full pt-24 pb-20">
                <div className="flex flex-col items-center justify-center gap-10">
                    <h2 className="text-6xl font-bold tracking-tighter text-center max-w-[20ch]">
                        <span className="text-purple-300">Simple pricing, powerful fundraising</span>
                    </h2>
                    <div className="w-fit flex items-center p-1 border-3 border-purple-500 rounded-full text-center">
                        <span className="flex items-center justify-center px-8 font-semibold tracking-tighter">
                            <span className="text-lg font-semibold tracking-tighter text-purple-300">FundDreamz Pricing in</span>
                        </span>
                        <button className="flex items-center justify-center gap-6 h-12 p-1 pl-8 rounded-full bg-purple-300 text-dark-green">
                            <span className="font-semibold tracking-tighter text-lg">Nigeria</span>
                            <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-dark-green text-purple-200">
                                <FaAngleDown size={18} />
                            </span>
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <ul className="grid grid-cols-3 gap-4">
                            {
                                PRICES.map(({ title, description, price, color1, color2, textColor, containsLink, Icon, extraDescription, cta}) => (
                                    <li 
                                        key={title} 
                                        style={{ 
                                            '--main': color1,
                                            '--secondary': textColor,
                                            '--tetiary': color2
                                        } as React.CSSProperties}
                                        className="flex flex-col justify-between gap-20 p-6 bg-[var(--main)] rounded-3xl overflow-hidden"
                                    >
                                        <div className="flex flex-col-reverse gap-3">
                                            <h3 className="text-2xl font-semibold tracking-tighter"><span className="text-[var(--secondary)]">{title}</span></h3>
                                            <h4 className="text-5xl font-semibold tracking-tighter"><span className="text-[var(--secondary)]">{price}</span></h4>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <p className="text-base font-semibold tracking-tighter">
                                                    <span className="text-[var(--secondary)]">
                                                        <span>{description}</span>
                                                        {
                                                            containsLink && <Icon /> ?
                                                                <span className="inline-flex items-center justify-center"><Icon size={20} className="text-[var(--secondary)" /></span> 
                                                                : null
                                                        }
                                                    </span>
                                                </p>
                                                {
                                                    extraDescription ?
                                                        <p className="text-base font-semibold tracking-tighter"><span className="text-[var(--secondary)]">{extraDescription}</span></p> :
                                                        null
                                                }
                                            </div>
                                            <button className="flex items-center justify-center h-14 px-4 rounded-full bg-[var(--tetiary)] text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--tetiary)]">
                                                <span className="text-lg font-semibold tracking-tighter">{cta}</span>
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <p className="mt-4 text-xl max-w-[64ch] font-semibold tracking-tighter">
                        <span className="text-purple-300">One small transaction fee per donation covers all your fundraising needs. Everything else goes directly to your cause, because that&apos;s what matters most. Here&apos;s how it works.</span>
                    </p>
                </div>
            </section>
        </div>
    )
}