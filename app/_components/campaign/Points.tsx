import { LiaHandHoldingHeartSolid, LiaTelegramPlane } from "react-icons/lia"
import { TbHeartHandshake } from "react-icons/tb"


const POINTS = [
    {
        title: "Easy",
        description: "Donate quickly and easily",
        Icon: LiaTelegramPlane
    },
    {
        title: "Powerful",
        description: "Send help right to the people and causes you care about",
        Icon: LiaHandHoldingHeartSolid
    },
    {
        title: "Trusted",
        description: "Your donation is protected by the GoFundMe Giving Guarantee",
        Icon: TbHeartHandshake
    }
];

export default function Points() {

    return (
        <div className="px-10 bg-light-purple py-20">
            <section className="mx-auto max-w-lg w-full">
                <h3 className="text-2xl font-semibold tracking-tighter"><span className="text-dark-purple">Your easy, powerful, and trusted home for help</span></h3>
                <ul className="mt-8 grid grid-cols-3 gap-6">
                    {
                        POINTS.map(({ title, description, Icon }) => (
                            <li key={title} className="flex items-start gap-4 rounded-xl p-4 border border-dark-purple/20">
                                <span className="w-12 aspect-square flex items-center justify-center rounded-full bg-dark-purple/10 text-dark-purple">
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <h4 className="text-base font-semibold tracking-tighter"><span className="text-dark-purple">{title}</span></h4>
                                    <p className="text-sm font-semibold tracking-tighter"><span className="text-dark-purple/60">{description}</span></p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}