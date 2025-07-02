
import DoingTheMath from "../_components/pricing/DoingTheMath";
import Explanations from "../_components/pricing/Explanations";
import Footer from "../_components/home/Footer";
import Header from "../_components/home/Header";
import Hero from "../_components/pricing/Hero";
import CallToAction from "../_components/pricing/CallToAction";


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

    return(
        <div className="bg-dark-green">
            <Header colors={HEADER_COLORS} />
            <Hero />
            <DoingTheMath />
            <Explanations />
            <CallToAction />
            <Footer />
        </div>
    )
}