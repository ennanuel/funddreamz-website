import { goats, volunteer1, volunteer2, volunteer3 } from "@/app/_assets/images"
import Image from "next/image"


const BLOG_ARTICLES = [
    {
        title: "Our Giving Guarantee",
        image: goats
    },
    {
        title: "FundDreamz pricing",
        image: volunteer1
    },
    {
        title: "Our supported locations",
        image: volunteer3
    },
    {
        title: "FundDreamz for developers",
        image: volunteer2
    }
]

export default function MoreSection() {

    return (
        <div className="px-10 bg-gray-100">
            <section className="mx-auto max-w-lg w-full pb-30 flex flex-col gap-12">
                <h3 className="text-3xl font-semibold tracking-tighter"><span className="text-gray-800">Learn more about FundDreamz</span></h3>
                <div className="grid grid-cols-4 gap-5">
                    {
                        BLOG_ARTICLES.map(({ title, image }) => (
                            <article key={title} className="relative min-h-[440px] flex rounded-md overflow-hidden">
                                <Image src={image} alt={`${title} image`} fill className="object-cover" />
                                <div className="p-4 relative flex-1 flex flex-col justify-between text-white bg-gradient-to-b from-gray-700/20 via-gray-700/20 to-gray-700">
                                    <span className="w-fit flex items-center justify-center px-4 rounded-full h-8 bg-black/20 backdrop-blur">
                                        <span className="text-sm font-semibold tracking-tighter">Featured</span>
                                    </span>
                                    <span className="text-xl font-semibold tracking-tighter">{title}</span>
                                </div>
                            </article>
                        ))
                    }
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <h2 className="text-3xl font-semibold tracking-tighter"><span>Want to join us?</span></h2>
                    <p className="text-base font-semibold tracking-tighter max-w-[64ch]"><span>We are a growing global team working to build the most helpful place in the world. <span className="underline">Click here</span> to visit our careers page and learn how you can help us help others.</span></p>
                </div>
            </section>
        </div>
    )
}