
import Image from "next/image";
import { children2 } from "@/app/_assets/images";
import Link from "next/link";

const PRICES = [
    {
        price: "5,000",
        currency: "N"
    },
    {
        price: "10,000",
        currency: "N",
        isSuggested: true
    },
    {
        price: "25,000",
        currency: "N",
    },
    {
        price: "50,000",
        currency: "N",
    },
    {
        price: "100,000",
        currency: "N",
    },
    {
        price: "150,000",
        currency: "N",
    }
];

const PAYMENT_METHODS = [
    {
        title: "Paystack",
        icon: "/icon/paystack-logo.png",
    },
    {
        title: "Remita",
        icon: "/icon/remita-logo.png",
        isInactive: true
    }
]

export default function DonateToCampaign() {

    return (
        <div className="bg-gray-50">
             <div className="min-h-[calc(100dvh_-_64px)] px-10">
                <section className="mx-auto max-w-lg w-full flex justify-center p-12">
                    <div className="py-12 px-10 w-full max-w-[800px] rounded-4xl bg-white border-3 border-gray-100">
                        <div className="flex items-center gap-4">
                            <Image src={children2} alt="Image of children" className="w-full max-w-30 min-h-20 rounded-lg object-cover" />
                            <p className="flex flex-col gap-1 tracking-tighter">
                                <span className="text-base text-gray-700">You&apos;re supporting <span className="font-semibold">Leonna Ruka, aged 7, who lost her life in Chalkwell Park</span></span>
                                <span className="text-sm text-gray-500">Your donation will benefit <span className="font-semibold">Your Southend</span></span>
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col gap-2">
                            <h3 className="text-base font-semibold tracking-tighter"><span>Enter your donation</span></h3>
                            <ul className="mt-2 flex items-start gap-2">
                                {
                                    PRICES.map(({ price, currency, isSuggested }, index) => (
                                        <li key={index} className="flex-1 flex flex-col justify-center items-center rounded-t-[28px] rounded-b-[10px]">
                                            <button className="px-4 flex items-center justify-center w-full bg-gray-50 hover:bg-light-green text-gray-800 hover:text-dark-green rounded-full h-14">
                                                <span className="font-semibold">{currency}{price}</span>
                                            </button>
                                            <span className={`${isSuggested ? 'flex' : 'hidden'} relative -mt-4 w-fit h-5 rounded-sm flex items-center justify-center px-2 bg-purple-100 text-dark-purple text-[.6rem] uppercase tracking-tighter`}>
                                                <span className="relative">
                                                    <span>💜 </span>
                                                    <span>Suggested</span>
                                                </span>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="flex rounded-[28px] bg-gray-50 has-[input:focus]:bg-gray-100">
                                <label htmlFor="donation-input" className="flex flex-col items-center justify-center p-4 pr-0 tracking-tighter font-semibold">
                                    <span className="text-4xl">£</span>
                                    <span className="text-base">GBP</span>
                                </label>
                                <span className="block relative flex-1 h-30">
                                    <input type="text" id="donation-input" className="pt-8 pl-6 absolute top-0 left-0 w-full h-full focus:outline-none border-none text-[5rem] text-right font-semibold tracking-tighter flex items-end text-[var(--black)_!important]" />
                                </span>
                                <label htmlFor="donation-input" className="flex items-center justify-center p-4 pl-0">
                                    <span className="text-[5rem] font-semibold tracking-tighter">.00</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-base font-semibold tracking-tighter"><span>Payment method</span></h3>
                            <ul className="mt-4 flex flex-col border-2 border-gray-100 gap-0.5 rounded-[28px] bg-gray-100 overflow-hidden">
                                {
                                    PAYMENT_METHODS.map(({ title, icon, isInactive }) => (
                                        <li key={title} className={`${isInactive ? 'cursor-not-allowed *:pointer-events-none grayscale text-gray-400' : 'text-gray-600'} group`}>
                                            <button className="group/group-child flex gap-2 pl-2 p-4 w-full text-left bg-white">
                                                <span className="relative flex items-center justify-center w-8 h-8 rounded-full group-hover/group-child:bg-light-green">
                                                    <input type="radio" name="payment-method" className="w-full h-full absolute top-0 left-0 peer opacity-0" />
                                                    <span className="pointer-events-none relative w-4 aspect-square outline-3 outline-transparent rounded-full bg-white border border-gray-400 peer-checked:bg-white peer-checked:border-main peer-checked:outline-main"></span>
                                                </span>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="font-semibold tracking-tighter text-sm">{title}</span>
                                                    <Image src={icon} alt={`${title} payment method image`} width={120} height={64} className="h-8 w-auto block" />
                                                </div>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <ul className="mt-8 flex flex-col gap-2">
                            <li className="w-full flex flex-row-reverse justify-end items-center gap-2">
                                <label htmlFor="privacy" className="peer mt-0.5 text-sm tracking-tighter text-gray-600">Remain anonymous</label>
                                <span className="w-6 aspect-square rounded-lg flex items-center justify-center peer-hover:bg-light-green">
                                    <input type="checkbox" id="privacy" />
                                </span>
                            </li>
                            <li className="w-full flex flex-row-reverse justify-end gap-2">
                                <label htmlFor="privacy" className="peer mt-0.5 text-sm tracking-tighter text-gray-600">Get occasional marketing updates from GoFundMe. You may unsubscribe at any time.</label>
                                <span className="w-6 aspect-square rounded-lg flex justify-center peer-hover:bg-light-green">
                                    <input type="checkbox" id="privacy" />
                                </span>
                            </li>
                        </ul>
                        <div className="pt-4 mt-8 border-t border-gray-200">
                            <h3 className="text-base font-semibold tracking-tighter"><span>Your donation</span></h3>
                            <p className="mt-4 flex items-center justify-between gap-2 text-sm tracking-tighter">
                                <span>Your donation</span>
                                <span>£93,988.00</span>
                            </p>
                            <p className="mt-2 flex items-center justify-between gap-2 text-sm tracking-tighter">
                                <span>FundDreamz tip</span>
                                <span>£28,988.00</span>
                            </p>
                            <p className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between gap-2 text-sm tracking-tighter">
                                <span className="text-gray-800">Total due today</span>
                                <span className="text-gray-800">£122,184.40</span>
                            </p>
                        </div>
                        <button className="mt-8 w-full flex items-center justify-center px-6 rounded-full h-12 bg-gray-900 text-white">
                            <span className="text-sm font-semibold tracking-tighter">Make payment</span>
                        </button>
                        <p className="mt-10 text-sm tracking-tighter">
                            <span>By clicking &apos;Paystack&apos;, you agree to FundDreamz&apos;s Terms of <span className="font-semibold text-gray-800">Service</span> and <span className="font-semibold text-gray-800">Privacy Notice</span>. Learn more about <span className="font-semibold text-gray-800">pricing and fees</span>.</span>
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
                            <div className="">
                                <Image src="/favicon.svg" width={40} height={40} className="w-9 aspect-square grayscale object-cover rounded-full border-2 border-gray-300" alt="FundDreamz logo" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="font-semibold tracking-tighter"><span>FundDreamz protects your donation</span></h4>
                                <p className="text-sm tracking-tighter">
                                    <span>We guarantee you a full refund for up to a year in the rare case that fraud occurs</span>
                                    <br />
                                    <span>See our <Link href="" className="font-semibold text-gray-800">FundDreamz Giving Guarantee</Link>.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
             </div>
        </div>
    )
}