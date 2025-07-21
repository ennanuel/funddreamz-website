import Link from "next/link";
import { FiArrowDown } from "react-icons/fi";



export default function About() {

    return (
        <div className="px-4 xs:px-6 sm:px-10 bg-green-300 py-20">
            <section className="mx-auto w-full max-w-lg">
                <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter"><span className="text-dark-green">Hi There! 🤗</span></h3>
                <p className="mt-10 text-base lg:text-xl font-semibold tracking-tighter max-w-[64ch]">
                    <span className="text-dark-green/60">Welcome to <span className="text-dark-green">FundDreamz</span>, your go-to platform for turning dreams into reality FundDreamz is a powerful crowdfunding platform that helps individuals, enterpreneurs, communities, organizations, and chirities raise funds for their goals and initiative. Whether you&apos;re seeking support for a personal need, a groundbreaking idea, a community project, or a charitable cause, FundDreamz provides the tools and visibilty you need to bring your dream to life.</span>
                    <br />
                    <span className="text-dark-green/60">Join a growing network of dremer and supporters making real impact, one <span className="text-dark-green">DREAM</span> at a time</span>
                </p>
                <Link href="/about" className="mt-4 w-fit flex items-center justify-center gap-2 hover:underline">
                    <FiArrowDown size={16} className="-mt-0.5" />
                    <span className="font-semibold text-base text-dark-green tracking-tighter">Learn more about us</span>
                </Link>
            </section>
        </div>
    )
}