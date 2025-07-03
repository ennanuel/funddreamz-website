"use client";

import { useEffect } from "react";

import CampaignImage from "@/app/_components/campaign/CampaignImage";
import UserDetails from "@/app/_components/campaign/UserDetails";
import Description from "@/app/_components/campaign/Description";
import Updates from "@/app/_components/campaign/Updates";
import ActionButtons from "@/app/_components/campaign/ActionButtons";
import OrganizerDetails from "@/app/_components/campaign/OrganizerDetails";
import Comments from "@/app/_components/campaign/Comments";
import DateCreated from "@/app/_components/campaign/DateCreated";
import ReportCampaign from "@/app/_components/campaign/ReportCampaign";
import DonationDetails from "@/app/_components/campaign/DonationDetails";
import Points from "@/app/_components/campaign/Points";

import { setDefaultHeaderColors } from "@/app/_utils/header";

const HEADER_COLORS = { 
    '--background': 'var(--color-gray-50)',
    '--icon-background': 'var(--color-light-green)',
    '--icon-color': 'var(--color-main)',
    '--main': 'var(--color-dark-green)',
    '--secondary': 'var(--color-light-green)',
    '--text-color': 'var(--color-gray-800)',
    '--search-background': 'var(--color-white)',
} as React.CSSProperties;

export default function CampaignDetails() {

    useEffect(() => {
        setDefaultHeaderColors(HEADER_COLORS)
    }, [])

    return (
        <div className="bg-gray-50">
            <section className="px-10">
                <div className="mx-auto max-w-lg w-full pt-16">
                    <h2 className="text-3xl font-semibold tracking-tighter max-w-[56ch]"><span>Leonna Ruka, aged 7, who lost her life in Chalkwell Park</span></h2>
                    <div className="my-8 grid grid-cols-[1fr_400px] gap-8">
                        <div>
                            <div className="w-full max-w-[720px]">
                                <CampaignImage />
                                <UserDetails />
                                <Description />
                                <Updates />
                                <ActionButtons />
                                <OrganizerDetails />
                                <Comments />
                                <DateCreated />
                                <ReportCampaign />
                            </div>
                        </div>
                        <div>
                            <DonationDetails />
                        </div>
                    </div>
                </div>
            </section>
            <Points />
        </div>
    )
};