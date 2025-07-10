"use client";

import Cta from "@/app/_components/category/Cta";
import Examples from "@/app/_components/category/Examples";
import Hero from "@/app/_components/category/Hero";
import LinksAndSteps from "@/app/_components/category/LinksAndSteps";
import ResourcesAndQuestions from "@/app/_components/category/ResourcesAndQuestions";
import Tips from "@/app/_components/category/Tips";
import { setDefaultHeaderColors } from "@/app/_utils/header";
import { useEffect } from "react";

const HEADER_COLORS = {
    '--background': 'var(--color-gray-50)',
    '--main': '#022d19',
    '--secondary': '#fafafa',
    '--text-color': '#1e2939',
    '--search-background': 'var(--color-white)'
} as React.CSSProperties;

export default function Category() {

    useEffect(() => {
        setDefaultHeaderColors(HEADER_COLORS);
    }, []);

    return (
        <div className="bg-gray-50">
            <Hero />
            <LinksAndSteps />
            <Tips />
            <Examples />
            <ResourcesAndQuestions />
            <Cta />
        </div>
    )
}