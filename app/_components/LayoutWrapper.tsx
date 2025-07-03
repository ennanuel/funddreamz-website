"use client";

import { usePathname } from "next/navigation";

import { ProgressProvider } from "@bprogress/next/app";

import Footer from "./footers/Footer";
import Footer1 from "./footers/Footer1";
import Footer2 from "./footers/Footer2";
import Header from "./headers/Header";
import Header1 from "./headers/Header1";
import Header2 from "./headers/Header2";

const MAIN_PAGES = [
    '/home',
    '/about',
    '/campaign',
    '/categories',
    '/category',
    '/pricing',
    '/resource',
    '/supported-countries',
];

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if(MAIN_PAGES.some((page) => pathname.includes(page))) return (
        <ProgressProvider 
            height="4px" 
            color="#02a85c" 
            options={{ showSpinner: true }}
            shallowRouting
        >
            <div>
                <Header1 />
                {children}
                <Footer1 />
            </div>
        </ProgressProvider>
    );
    else if (pathname.includes('/support')) return (
        <div>
            <Header2 />
            {children}
            <Footer2 />
        </div>
    );
    else return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
};