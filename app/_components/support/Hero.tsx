import { FiSearch } from "react-icons/fi";


export default function Hero() {

    return (
        <div>
            <section className="mx-auto max-w-lg w-full flex flex-col items-center justify-center pt-24">
                <h2>
                    <span className="text-center">How can we help you?</span>
                </h2>
                <form className="flex items-center">
                    <label htmlFor="resource-search" className="flex items-center justify-center">
                        <FiSearch size={16} />
                    </label>
                    <input type="text" placeholder="Search the FundDreamz Help Center" id="resource-search" className="flex-1 h-12 focus:outline-none bg-transparent" />
                </form>
            </section>
        </div>
    )
}