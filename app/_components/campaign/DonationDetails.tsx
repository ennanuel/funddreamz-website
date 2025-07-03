import { GrLineChart } from "react-icons/gr";
import { LuHandHeart } from "react-icons/lu";



type DonationProps = {
    name: string;
    currency: string;
    amountDonated: string;
    label: string;
};

const DONATIONS = [
    {
        name: "Victoria Godman",
        currency: "£",
        amountDonated: "15",
        label: "Recent donation"
    },
    {
        name: "James Holloway",
        currency: "£",
        amountDonated: "500",
        label: "Top donation"
    },
    {
        name: "Pam Fry",
        currency: "£",
        amountDonated: "10",
        label: "First donation"
    }
];

export default function DonationDetails() {

    return (
        <div className="sticky top-20 rounded-2xl border-2 border-main/20 bg-white">
            <div className="flex px-6 pb-4 pt-8 flex-col border-b border-gray-100">
                <div className="flex flex-col gap-1">
                    <h4 className="text-3xl font-semibold tracking-tighter"><span>£41,961 raised</span></h4>
                    <div className="flex items-center gap-2 text-sm tracking-tighter">
                        <span>£1K goal</span>
                        <span>·</span>
                        <span>2.6K donations</span>
                    </div>
                </div>
                <span className="my-4 relative block p-1 rounded-full bg-yellow-100">
                    <span className="block w-1/2 h-1.5 rounded-full bg-yellow-400"></span>
                </span>
                <div className="flex flex-col gap-2">
                    <button className="flex items-center justify-center h-12 border-2 border-dark-green bg-dark-green text-green-200 rounded-full">
                        <span className="font-semibold tracking-tighter text-sm">Donate to Dream</span>
                    </button>
                    <button className="flex items-center justify-center h-12 border-2 border-green-100 bg-green-100 text-dark-green rounded-full">
                        <span className="font-semibold tracking-tighter text-sm">Share</span>
                    </button>
                </div>
                <div className="mt-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-light-green text-dark-green">
                            <GrLineChart size={18} />
                        </span>
                        <span className="text-dark-green font-semibold text-sm tracking-tighter">531 people just donated</span>
                    </div>
                </div>
            </div>
            <ul className="flex flex-col">
                {
                    DONATIONS.map((donation) => (
                        <li key={donation.name} className="last:border-b-0 border-b border-gray-100 hover:bg-gray-50">
                            <Donation {...donation} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

function Donation ({ name, currency, amountDonated, label }: DonationProps) {
    return (
        <div className="flex gap-4 items-start py-4 px-6">
            <span className="flex items-center justify-center w-9 aspect-square rounded-full bg-gray-200">
                <LuHandHeart size={16} />
            </span>
            <div className="flex flex-col">
                <h4 className="text-sm tracking-tighter"><span>{name}</span></h4>
                <div className="flex items-center gap-2 text-sm tracking-tighter">
                    <span className="font-semibold">{currency}{amountDonated}</span>
                    <span className="">·</span>
                    <span className="underline text-xs">{label}</span>
                </div>
            </div>
        </div>
    )
}