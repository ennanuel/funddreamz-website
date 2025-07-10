"use client";

import { usePathname } from "next/navigation";

import { ProgressProvider } from "@bprogress/next/app";

import Footer1 from "./footers/Footer1";
import Footer2 from "./footers/Footer2";
import Header1 from "./headers/Header1";
import Header2 from "./headers/Header2";
import Header3 from "./headers/Header3";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname.includes('/donate')) return (
        <div>
            <Header3 />
            {children}
        </div>
    )
    else if (pathname.includes('/support')) return (
        <div>
            <Header2 />
            {children}
            <Footer2 />
        </div>
    );
    else return (
        <ProgressProvider 
            height="4px" 
            color="#02a85c" 
            options={{ showSpinner: false }}
            shallowRouting
        >
            <div>
                <Header1 />
                {children}
                <Footer1 />
            </div>
        </ProgressProvider>
    )
};