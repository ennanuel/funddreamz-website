
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

interface HeroProps {
    categoryTitle: string;
    categoryTagLine: string;
    images: string[];
    mainSectionTitle: string;
    callToActionTop: {
        text: string;
        link: string;
    }
};


export default function Hero({ categoryTitle, categoryTagLine, images, mainSectionTitle, callToActionTop }: HeroProps) {

    return (
        <div>
            <div className="px-10 overflow-hidden">
                <section className="mx-auto max-w-lg w-full min-h-[calc(100vh_-_64px)] flex">
                    <div className="py-20 flex-1 flex flex-col justify-center">
                        <h2 className="font-bold tracking-tighter text-5xl max-w-[20ch]">
                            <span>{categoryTitle}</span>
                        </h2>
                        <p className="mt-10 font-semibold tracking-tighter text-xl max-w-[40ch]">
                            <span>{categoryTagLine}</span>
                        </p>
                        <a href={callToActionTop.link} className="mt-6 w-fit h-14 px-6 flex items-center justify-center min-w-[200px] rounded-full bg-green-400 text-dark-green outline-3 outline-dark-green">
                            <span className="font-semibold tracking-tighter">{callToActionTop.text}</span>
                        </a>
                    </div>
                    <div className="flex-1 flex gap-2 items-center justify-center">
                        <div className="flex flex-col justify-center items-end gap-2">
                            <Image1 src={images[0]} />
                            <Image3 src={images[1]} />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image2 src={images[2]} />
                        </div>
                    </div>
                </section>
            </div>
            <div className="relative px-10">
                <section className="relative pb-20 mx-auto max-w-lg w-full min-h-[400px] flex flex-col gap-10 items-center justify-center">
                    <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-main border-3 border-white">
                        <FaQuoteRight size={20} className="text-white" />
                    </span>
                    <h2 className="relative text-center text-4xl font-bold tracking-tighter max-w-[40ch]">
                        <span className="text-dark-green">{mainSectionTitle}</span>
                    </h2>
                </section>
            </div>
        </div>
    )
};

function Image1({ src }: { src: string }) {

    return (
        <div className="relative h-70 w-50">
            <Image src={src} alt="First hero image" fill className="object-cover rounded-xl" />
        </div>
    )
};

function Image2({ src }: { src: string }) {

    return (
        <div className="relative h-60 w-70">
            <Image src={src} alt="Second hero Image" fill className="object-cover rounded-xl" />
        </div>
    )
};

function Image3({ src }: { src: string }) {

    return (
        <div className="relative h-50 w-80">
            <Image src={src} alt="Third hero image" fill className="object-cover rounded-xl" />
        </div>
    )
};