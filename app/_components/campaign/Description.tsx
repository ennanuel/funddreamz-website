import { FaRegCircle } from "react-icons/fa6"


export default function Description() {
    return (
        <article className="mx-4 pt-4 pb-16 text-sm tracking-tighters">
            <h3 className="text-lg font-semibold tracking-tighter"><span>Description</span></h3>
            <p className="mt-6">
                <span>On Saturday, 28 June, a tragic incident occurred in Chalkwell Park, Southend-on-Sea. During what should have been a joyful afternoon, a large, ageing tree near the rose garden partially collapsed, striking a group of children.
                </span>
            </p><br />
            <p>
                <span>Other people in the park at the time, including local cricketers, rushed to help, trying to lift the heavy branches off the trapped children in an act of community bravery.</span>
            </p><br />
            <p>
                <span>Emergency services arrived quickly to the scene, including two Air Ambulances, who all worked incredibly hard to treat the children and take them to hospital.</span>
            </p><br />
            <p>
                <span>Sadly, a seven‑year‑old girl tragically lost her life. Her family now faces an unimaginable loss.</span>
            </p><br />
            <p>
                <span>If you wish to donate in memory of the little girl, these funds will be offered to the family to help cover:</span>
            </p><br />
            <ol className="flex flex-col gap-2">
                <li>
                    <p className="flex items-center gap-4">
                        <FaRegCircle size={12} />
                        <span>Funeral and associated family expenses</span>
                    </p>
                </li>
                <li>
                    <p className="flex items-center gap-4">
                        <FaRegCircle size={12} />
                        <span>A possible memorial creation and installation</span>
                    </p>
                </li>
                <li>
                    <p className="flex items-center gap-4">
                        <FaRegCircle size={12} />
                        <span>Ongoing support for bereaved family members</span>
                    </p>
                </li>
                <li>
                    <p className="flex items-center gap-4">
                        <FaRegCircle size={12} />
                        <span>A donation to the Air Ambulance charities that attended</span>
                    </p>
                </li>
            </ol><br />
            <p>
                <span>Another six‑year‑old remains in a critical condition in hospital and it is proposed that she, and her family, are also supported by these community funds, when appropriate.</span>
            </p><br />
            <p>
                <span>The grieving family will be contacted through appropriate channels when the time is right, to ask for their preferences. An update will then be published.</span>
            </p><br />
            <p>
                <span>100% of the funds raised will remain within this GoFundMe fundraiser account until the family decide in their own time how they wish for them to be used.</span>
            </p><br />
            <p>
                <span>This fundraiser was set up after many suggestions and requests from the Southend community. It is being facilitated by YourSouthend</span>
            </p>
        </article>
    )
};