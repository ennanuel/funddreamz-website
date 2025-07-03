import { children3 } from "@/app/_assets/images";
import Image from "next/image";


export default function CampaignImage() {

    return (
        <div className="relative w-full aspect-video">
            <Image src={children3} alt="Fundraiser image" fill className="object-cover block rounded-xl border-2 border-gray-200" />
        </div>
    )
}