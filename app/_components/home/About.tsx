import { FiArrowDown } from "react-icons/fi";



export default function About() {

    return (
        <div className="px-10 bg-green-300 py-20">
            <section className="mx-auto w-full max-w-lg">
                <h3 className="text-6xl font-bold tracking-tighter"><span className="text-dark-green">Hi There! 🤗</span></h3>
                <p className="mt-10 text-xl font-semibold tracking-tighter max-w-[64ch]">
                    <span className="text-dark-green/60">Welcome to <span className="text-dark-green">FundDreamz</span>, your go-to platform for turning dreamz into reality. FundDreamz is a crowdfunding platform designed to help individuals, communities, startups, NGOs, and charities raise funds for their projects and initiatives. Whether you're an individual looking to get funding for a quick need/goal/dream, and enterpreneur with a groundbreaking idea, a community looking to make a positive change, or a chirty in need of support, FundDreamz provides you with the tools and resources to bring your dreams to life.</span>
                </p>
                <a href="#more" className="mt-4 w-fit flex items-center justify-center gap-2 hover:underline">
                    <FiArrowDown size={16} className="-mt-0.5" />
                    <span className="font-semibold text-base text-dark-green tracking-tighter">Learn more about us</span>
                </a>
            </section>
        </div>
    )
}