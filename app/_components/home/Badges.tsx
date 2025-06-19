import { PiPlantFill } from "react-icons/pi";


export default function Badges() {

    return (
        <section className="px-10 bg-light-orange">
            <div className="mx-auto max-w-lg h-20 flex items-center justify-between gap-8">
                <h3 className="flex items-center gap-2 tracking-tighter text-3xl font-semibold">
                    <PiPlantFill size={24} className="text-dark-orange" />
                    <span className="text-dark-orange">Just a click away from getting funded!</span>
                </h3>
                <button className="flex items-center justify-center gap-4 h-12 rounded-full px-6 bg-dark-orange text-light-orange">
                    <span className="font-semibold tracking-tight">Start fundraiser</span>
                </button>
            </div>
        </section>
    )
}