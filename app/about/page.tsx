
import Description from "../_components/about/Description";
import Description2 from "../_components/about/Description2";
import Footer from "../_components/home/Footer";
import Header from "../_components/home/Header";
import Hero from "../_components/about/Hero";
import MoreSection from "../_components/about/MoreSection";


const HEADER_COLORS = { 
    '--background': 'var(--color-light-purple)',
    '--icon-background': 'var(--color-green-300 )',
    '--icon-color': 'var(--color-main)',
    '--main': 'var(--color-dark-orange)',
    '--secondary': 'var(--color-purple-100)',
    '--text-color': 'var(--color-dark-orange)',
    '--search-background': 'var(--color-purple-100)',
} as React.CSSProperties;

export default function About() {

    return (
        <div className="bg-light-purple">
            <Header colors={HEADER_COLORS} />
            <Hero />
            <Description />
            <Description2 />
            <MoreSection />
            <Footer />
        </div>
    )
}