

export default function Hero() {

    return (
        <div className="px-10">
            <section className="mx-auto max-w-lg w-full pt-24">
                <h2 className="text-6xl max-w-[16ch] font-bold tracking-tighter">
                    <span className="text-gray-800">Browse fundraisers by category</span>
                </h2>
                <p className="mt-6 text-xl font-semibold tracking-tighter max-w-[36ch]">
                    <span className="text-gray-600">People around the world are raising money for what they are passionate about.</span>
                </p>
                <button className="mt-8 flex items-center justify-center px-6 h-12 rounded-full bg-green-400 text-dark-green">
                    <span className="font-semibold tracking-tighter">Start your Dream</span>
                </button>
            </section>
        </div>
    )
}