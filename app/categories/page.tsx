"use client";

import Hero from "../_components/categories/Hero";
import CategoriesContainer from "../_components/categories/CategoriesContainer";
import CategoryFundRaisers from "../_components/categories/CategoryFundraisers";
import { useEffect } from "react";
import { changeHeaderColors } from "../_utils/header";


export default function Categories() {
    useEffect(() => {
        changeHeaderColors();
    }, []);

    return (
        <div className="bg-gray-100">
            <Hero />
            <CategoriesContainer />
            <CategoryFundRaisers />
        </div>
    )
}