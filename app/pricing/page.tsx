"use client";
import { useEffect } from "react";

import DoingTheMath from "../_components/pricing/DoingTheMath";
import Explanations from "../_components/pricing/Explanations";
import Hero from "../_components/pricing/Hero";
import CallToAction from "../_components/pricing/CallToAction";

import { setDefaultHeaderColors } from "../_utils/header";


const HEADER_COLORS = { 
    '--background': 'var(--color-dark-green)',
    '--icon-background': '#b9f8cf',
    '--icon-color': '#02a85c',
    '--main': 'var(--color-purple-200)',
    '--secondary': 'var(--color-green-900)',
    '--text-color': 'var(--color-purple-300)',
    '--search-background': 'var(--color-green-900)',
} as React.CSSProperties;

export default function Pricing() {
    useEffect(() => {
        setDefaultHeaderColors(HEADER_COLORS);
    }, [])

    return(
        <div className="bg-dark-green">
            <Hero />
            <DoingTheMath />
            <Explanations />
            <CallToAction />
        </div>
    )
}