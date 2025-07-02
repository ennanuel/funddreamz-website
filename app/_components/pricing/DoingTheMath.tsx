import { FaAngleDown } from "react-icons/fa6";
import { MdHelpOutline } from "react-icons/md";

// const PRICES = [500, 1500, 5000];
// const DONORS = [5, 15, 30];

export default function DoingTheMath() {

    return (
        <div className="bg-light-green px-10">
            <section className="py-20 w-full mx-auto max-w-lg flex flex-col gap-12">
                <h2 className="text-4xl font-semibold tracking-tighter">
                    <span className="text-dark-green">Let&apos;s do the Math together</span>
                </h2>
                <div className="flex rounded-4xl bg-green-200">
                    <div className="flex-1 flex flex-col p-10 justify-between gap-24">
                        <h3 className="text-6xl leading-[4.6rem] font-semibold tracking-tighter">
                            <span className="text-green-800">
                                <span>If you raised </span><br />
                                <div className="inline-block text-dark-green hover:text-dark-purple">
                                    <button className="border-b border-dark-green flex items-center justify-center gap-2">
                                        <span>$1,500</span>
                                        <FaAngleDown size={30} />
                                    </button>
                                </div>
                                <span> from </span><br />
                                <div className="inline-block text-dark-green hover:text-dark-purple">
                                    <button className="border-b border-dark-green flex items-center justify-center gap-2">
                                        <span>5</span>
                                        <FaAngleDown size={30} />
                                    </button>
                                </div>
                                <span> donors</span>
                            </span>
                        </h3> 
                        <p className="text-xl font-semibold tracking-tighter">
                            <span className="text-green-900">Fee to start a fundraiser: <span>$0.00</span></span>
                        </p>
                    </div>
                    <div className="border-l border-green-400 p-10 flex-1 flex flex-col justify-between gap-24">
                        <h3 className="text-6xl leading-[4.6rem] font-semibold tracking-tighter">
                            <span className="text-green-800">
                                <span>You&apos;d receive </span><br />
                                <span className="text-dark-green">$1,455.00</span>
                                <span> in your bank account.</span>
                            </span>
                        </h3>
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-semibold tracking-tighter"><span className="text-green-800">Transaction fee: <span className="text-dark-green">$45.00</span></span></p>
                            <a href="#" className="flex items-center justify-center text-green-800 hover:text-dark-green">
                                <MdHelpOutline size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}