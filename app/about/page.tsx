"use client";

import { useEffect } from "react";

import Description from "../_components/about/Description";
import Description2 from "../_components/about/Description2";
import Hero from "../_components/about/Hero";
import MoreSection from "../_components/about/MoreSection";
import { setDefaultHeaderColors } from "../_utils/header";


const HEADER_COLORS = { 
    '--background': 'var(--color-light-purple)',
    '--main': 'var(--color-dark-orange)',
    '--secondary': 'var(--color-purple-100)',
    '--text-color': 'var(--color-dark-orange)',
    '--search-background': 'var(--color-purple-100)',
} as React.CSSProperties;

export default function About() {
    useEffect(() => {
        setDefaultHeaderColors(HEADER_COLORS);
    }, []);

    return (
        <div className="bg-light-purple">
            <Hero />
            <Description />
            <Description2 />
            <MoreSection />
        </div>
    )
}