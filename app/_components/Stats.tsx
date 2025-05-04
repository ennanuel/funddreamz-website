import { GoPeople } from "react-icons/go"
import { HiOutlineBolt } from "react-icons/hi2"
import { LiaDonateSolid } from "react-icons/lia"


const STATS = [
    {
        title: "No fee to start fundraising",
        Icon: HiOutlineBolt
    },
    {
        stat: '1',
        title: "Donation made every second",
        Icon: LiaDonateSolid
    },
    {
        stat: '8K+',
        title: "Fundraisers started daily",
        Icon: GoPeople
    },
]

export default function Stats() {

    return (
        <div className="px-4 sm:px-6 md:px-10 mt-10 bg-light-orange text-dark-orange">
            <div className="py-6 sm:py-8 md:py-12 w-full mx-auto max-w-[960px] flex items-center gap-6 lg:gap-8">
                {
                    STATS.map(({ stat, title, Icon }, index) => (
                        <div key={title} className={`${index === 0 ? 'flex-1 flex justify-center md:justify-start' : 'flex-auto hidden md:flex' } items-center gap-8`}>
                            {index !== 0 ? <hr className="h-0 flex-1 border-0 border-t-1 border-dashed border-gray-600 outline-none" /> : null}
                            <div className="flex items-center gap-3">
                                <Icon size={20} />
                                <div className="flex items-center gap-1">
                                    { stat ? <span className="font-semibold text-sm">{stat}</span> : null }
                                    <span className="whitespace-nowrap text-xs lg:text-sm">{title}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}