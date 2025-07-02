import { BiSearch } from "react-icons/bi";


export default function Hero() {

    return (
        <div className="px-10">
            <section className="mx-auto max-w-lg w-full pt-24 pb-36">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h2 className="text-6xl max-w-[20ch] text-center">
                        <span className="font-bold text-blue-300 tracking-tighter text-center">FundDreamz Resources</span>
                    </h2>
                    <p className="text-2xl max-w-[40ch] text-center">
                        <span className="font-semibold text-blue-300 tracking-tighter text-center">Fundraising resources and tips to help raise more money</span>
                    </p>
                    <button className="mt-6 h-12 px-8 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-300 text-blue-900">
                        <span className="font-semibold tracking-tighter">Start your Dream</span>
                    </button>
                </div>
                <form className="mt-16 mx-auto max-w-[400px] flex items-center bg-blue-800 rounded-full pr-1 text-blue-300 outline-3 outline-transparent has-[input:focus]:outline-blue-300">
                    <input type="text" placeholder="Search resources" className="px-4 tracking-tighter font-semibold text-[var(--color-blue-300)_!important] placeholder:text-blue-400 focus:outline-none flex-1 h-12 rounded-full" />
                    <button type="button" className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-blue-900">
                        <BiSearch size={20} />
                    </button>
                </form>
            </section>
        </div>
    )
}