import { LiaHandHoldingHeartSolid } from "react-icons/lia";


type CommentProps = {
    name: string;
    currency: string;
    amountDonated: string;
    timeAdded: string;
    comment: string;
}

const COMMENTS: CommentProps[] = [
    {
        name: "Emily Smith",
        currency: "£",
        amountDonated: "40",
        timeAdded: "19 hrs",
        comment: "We will miss your beautiful smile"
    },
    {
        name: "Laurelle Betts",
        currency: "£",
        amountDonated: "10",
        timeAdded: "2 d",
        comment: "❤️"
    },
    {
        name: "Heidi Harragan",
        currency: "£",
        amountDonated: "25",
        timeAdded: "4 d",
        comment: "Thinking of all the family"
    },
    {
        name: "Oh Happy Creative Becky and Jan",
        currency: "£",
        amountDonated: "10",
        timeAdded: "4 d",
        comment: "Thinking of you all. X"
    },
    {
        name: "Matthew Godfrey",
        currency: "£",
        amountDonated: "25",
        timeAdded: "4 d",
        comment: "❤️❤️"
    }
];

export default function Comments() {

    return (
        <article className="mt-6 bg-white rounded-2xl pb-6 border-2 border-gray-100">
            <div className="flex flex-col gap-1 p-4 pt-6 border-b border-gray-100">
                <h3 className="text-xl font-semibold tracking-tighter"><span>Words of support (5)</span></h3>
                <p className="mt-2 text-sm tracking-tighter"><span>Please donate to share words of support.</span></p>
            </div>
            <ul className="flex flex-col">
                {
                    COMMENTS.map((comment) => (
                        <li key={comment.name} className="flex gap-4">
                            <Comment {...comment} />
                        </li>
                    ))
                }
            </ul>
        </article>
    )
};

function Comment({ name, currency, amountDonated, timeAdded, comment }: CommentProps) {

    return (
        <div className="w-full flex items-start gap-4 p-4 border-b border-gray-50">
            <span className="flex items-center justify-center w-9 aspect-square rounded-full bg-gray-200">
                <LiaHandHoldingHeartSolid size={20} />
            </span>
            <div className="flex flex-col text-sm tracking-tighter text-gray-600">
                <h4 className="text-sm font-semibold tracking-tighter"><span>{name}</span></h4>
                <div className="flex items-center gap-2">
                    <span>{currency}{amountDonated}</span>
                    <span>·</span>
                    <span>{timeAdded}</span>
                </div>
                <p><span>{comment}</span></p>
            </div>
        </div>
    )
}