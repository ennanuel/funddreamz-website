import { children2 } from "@/app/_assets/images";
import Image from "next/image";


export default function Updates() {

    return (
        <article className="mx-4 py-10 border-t border-gray-200">
            <h3 className="text-xl font-semibold tracking-tighter"><span>Updates (2)</span></h3>
            <div className="mt-8 flex items-center gap-2 text-gray-500 tracking-tighter text-sm">
                <span className="font-semibold text-gray-800">July 1st, 2025</span>
                <span>·</span>
                <span>by Your Southend, Organizer</span>
            </div>
            <div className="mt-2 text-sm tracking-tighter">
                <p>
                    <span>Thank you to every donor who has contributed so far to this fundraising campaign – your generosity will go so far. As such, we are proposing to use a proportion of the funds raised to also support the other seriously injured girl, aged six, who remains in a critical condition in hospital.</span>
                </p>
                <br />
                <p><span>A relative has also provided another comment on behalf of the family of the 7-year-old girl who died:</span></p>
                <p>
                    <span>He said: “Thank you very much for all the efforts Your Southend has made to support the family during this unimaginably difficult time. We are truly grateful for the compassion and care shown by the community.</span>
                </p>
                <br />
                <p>
                    <span>“The family is currently overwhelmed with grief, and as you can imagine, the immediate family - mum, dad, and their daughter - are struggling to process what has happened.</span>
                </p>
                <br />
                <p>
                    <span>Once again, thank you for your ongoing support, and for handling this with such respect and care.”</span>
                </p>
                <br />
                <p>
                    <span>The family have confirmed they will reach out when the time is right and they feel ready to engage further.</span>
                </p>
                <br />
                <Image src={children2} alt="Fundraiser update image" width={400} height={300} className="w-full max-w-80 aspect-video object-cover rounded-xl block" />
                <button className="mt-2 underline flex items-center justify-center">
                    <span>See older updates</span>
                </button>
            </div>
        </article>
    )
};