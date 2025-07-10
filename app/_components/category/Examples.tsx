import { chef } from "@/app/_assets/images"
import Image from "next/image"


const EXAMPLES = [
    {
        title: "New coffee shop location",
        value: "new-coffe-shop-location",
        isActive: true
    },
    {
        title: "Starting a Bakery",
        value: "starting-a-bakery"
    },
    {
        title: "New skills",
        value: "new-skills"
    }
]

export default function Examples() {

    return (
        <div className="px-10 bg-white">
            <section className="pt-20 pb-24">
                <h3 className="text-center text-3xl font-semibold tracking-tighter">
                    <span>Examples of business fundraisers on GoFundMe</span>
                </h3>
                <ul className="mt-12 flex items-center justify-center gap-1">
                    {
                        EXAMPLES.map(({ title, value, isActive }) => (
                            <li key={title}>
                                <button value={value} className={`${isActive ? 'bg-black/90 text-white' : 'hover:bg-gray-100 text-gray-800' } flex items-center justify-center min-w-30 h-10 rounded-lg px-4`}>
                                    <span className="font-semibold tracking-title">{title}</span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex mt-12 gap-10">
                    <div className="flex-1 relative aspect-square max-h-[480px]">
                        <Image src={chef} alt="image of fundraiser" fill className="object-cover rounded-xl" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col gap-8">
                            <h4 className="font-semibold tracking-tighter text-3xl underline hover:text-main">
                                <span>Starting a Bakery</span>
                            </h4>
                            <p className="text-lg tracking-tighter font-semibold">
                                <span>Simone is a pastry chef establishing her bakery, Patisserie By Simone, in Livermore, CA, after years of creating delectable treats. Her friends, fueled by love for both Simone and her creations, have set up a GoFundMe to help her cover the remaining costs of bakery equipment and electrical and lighting work… </span>
                                <button className="inline-flex items-center justify-center underline">
                                    <span>Read more</span>
                                </button>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="block bg-gray-100 rounded-full">
                                <span className="block w-1/2 h-2 rounded-full bg-main"></span>
                            </span>
                            <span className="font-semibold tracking-tighter text-gray-800">$20,440.00 raised of $20,000.00 goal</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}