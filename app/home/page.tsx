"use client";

import { useEffect } from "react";

import Badges from "../_components/home/Badges";
import Categories from "../_components/home/Categories";
import Demo from "../_components/home/Demo";
import Description1 from "../_components/home/Description1";
import Description2 from "../_components/home/Description2";
import Discover from "../_components/home/Discover";
import FeaturedTopics from "../_components/home/FeaturedTopics";
import Hero from "../_components/home/Hero";
import HowItWorks from "../_components/home/HowItWorks";
import Tips from "../_components/home/Tips";

import { changeHeaderColors } from "../_utils/header";


export default function Home2() {

    useEffect(() => {
        changeHeaderColors(undefined, true);
    }, [])

    return (
        <div className="font-dm-sans bg-gray-100">
            <Hero />
            <Badges />
            <Demo />
            <Discover />
            <FeaturedTopics />
            <Description1 />
            <Description2 />
            <HowItWorks />
            <Categories />
            <Tips />
        </div>
    )
}