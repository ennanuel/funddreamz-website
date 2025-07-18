
import Image from "next/image";

interface CtaProps {
    whyStartSection: {
        title: string;
        description: string;
    };
    callToActionBottom: {
        text: string;
        link: string;
    };
}

export default function Cta({ whyStartSection, callToActionBottom }: CtaProps) {

    return (
        <div className="px-10 bg-dark-green">
            <section className="mx-auto max-w-lg w-full pt-40 pb-30">
                <div className="flex justify-center gap-12">
                    <div className="flex-1 relative">
                        <Image src="/home/business2.jpg" alt="Business image" fill className="object-cover rounded-2xl" />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-4xl max-w-[24ch] font-semibold tracking-tigther">
                            <span className="text-green-200">{whyStartSection.title}</span>
                        </h3>
                        <p className="mt-8 text-xl font-semibold tracking-tighter">
                            <span className="text-green-200/60">{whyStartSection.description}</span>
                        </p>
                        <a href={callToActionBottom.link} className="mt-14 w-fit rounded-full flex items-center justify-center h-12 px-6 text-dark-green bg-green-200 hover:bg-green-300">
                            <span className="font-semibold tracking-tighter">{callToActionBottom.text}</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}