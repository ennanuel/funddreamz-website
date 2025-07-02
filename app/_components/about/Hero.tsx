import Image from "next/image";
import { community } from '../../_assets/images';


export default function Hero() {

    return (
        <div className="px-10 bg-light-purple">
            <section className="relative mx-auto max-w-lg w-full min-h-[calc(100dvh_-_64px)] pt-24 pb-20 flex flex-col gap-20">
                <div className="relative flex-1 flex flex-col gap-6 items-center justify-center">
                    <h2 className="text-center text-6xl max-w-[16ch]">
                        <span className="font-semibold tracking-tighter text-purple-900">Helping people help each other</span>
                    </h2>
                    <button className="flex items-center justify-center h-12 px-6 rounded-full bg-purple-900 text-purple-200 hover:bg-purple-900/80">
                        <span className="font-semibold tracking-tighter whitespace-nowrap">Start your Dream</span>
                    </button>
                </div>
                <Image src={community} alt="Image of people holding each other" className="w-full h-auto max-h-[calc(100vh_-_64px)] rounded-2xl object-cover" />
            </section>
        </div>
    )
}