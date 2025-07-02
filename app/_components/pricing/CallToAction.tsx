

export default function CallToAction() {

    return (
        <div className="px-10 bg-light-green">
            <section className="py-20 mx-auto max-w-lg w-full grid grid-cols-2 gap-6">
                <div>
                    <h3 className="text-4xl font-semibold tracking-tighter max-w-[16ch]">
                        <span className="text-dark-green">Everything you need to fundraise</span>
                    </h3>
                </div>
                <div className="flex flex-col gap-10">
                    <p className="font-semibold tracking-tighter max-w-[48ch]">
                        <span className="text-dark-green/60">Ready to start a fundraiser? If you&apos;re looking for tips on successful fundraising or want to speak to a GoFundMe team member, check out our Help Center.</span>
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="flex items-center justify-center h-12 px-6 rounded-full bg-green-400 text-dark-green border-3 hover:bg-dark-green hover:text-green-400 hover:border-dark-green border-green-400">
                            <span className="font-semibold tracking-tighter">Start your Dream</span>
                        </button>
                        <button className="flex items-center justify-center h-12 px-6 rounded-full bg-white text-green-600 border-3 border-green-400 hover:bg-dark-green hover:border-dark-green hover:text-green-400">
                            <span className="font-semibold tracking-tighter">Visit Help Center</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}