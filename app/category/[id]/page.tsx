"use client";

import { redirect, useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

import Cta from "@/app/_components/category/Cta";
import Examples from "@/app/_components/category/Examples";
import Hero from "@/app/_components/category/Hero";
import LinksAndSteps from "@/app/_components/category/LinksAndSteps";
import ResourcesAndQuestions from "@/app/_components/category/ResourcesAndQuestions";
import Tips from "@/app/_components/category/Tips";
import { setDefaultHeaderColors } from "@/app/_utils/header";

import CATEGORIES from "@/app/_assets/data/CATEGORIES.json";

const HEADER_COLORS = {
    '--background': 'var(--color-gray-50)',
    '--main': '#022d19',
    '--secondary': '#fafafa',
    '--text-color': '#1e2939',
    '--search-background': 'var(--color-white)'
} as React.CSSProperties;

function getCategory(id: string) {
    const category = CATEGORIES.find(({ categoryId }) => categoryId === id);
    return category;
}

export default function Category() {
    const { id } = useParams();

    const category = useMemo(() => getCategory(String(id)), [id]);
    
    useEffect(() => {
        setDefaultHeaderColors(HEADER_COLORS);
    }, []);

    if(!category) redirect('/categories');

    return (
        <div className="bg-gray-50">
            <Hero 
                categoryTitle={category.categoryTitle} 
                categoryTagLine={category.categoryTagline} 
                images={category.images} 
                mainSectionTitle={category.mainSectionTitle} 
                callToActionTop={category.callToActionTop} 
            />
            <LinksAndSteps
                howItWorks={category.howItWorks}
                callToActionMiddle={category.callToActionMiddle} 
            />
            <Tips {...category.tipsSection} />
            <Examples {...category.examplesSection} />
            <ResourcesAndQuestions resourcesSection={category.resourcesSection} faqSection={category.faqSection} />
            <Cta whyStartSection={category.whyStartSection} callToActionBottom={category.callToActionBottom} />
        </div>
    )
}