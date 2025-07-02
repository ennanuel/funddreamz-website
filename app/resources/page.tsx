
import Articles from "../_components/resources/Articles";
import Footer from "../_components/home/Footer";
import Header from "../_components/home/Header";
import Hero from "../_components/resources/Hero";
import Highlights from "../_components/resources/Highlights";

const HEADER_COLORS = { 
    '--background': 'var(--color-blue-900)',
    '--icon-background': 'var(--color-green-200)',
    '--icon-color': 'var(--color-main)',
    '--main': 'var(--color-blue-200)',
    '--secondary': 'var(--color-blue-800)',
    '--text-color': 'var(--color-blue-300)',
    '--search-background': 'var(--color-blue-800)',
} as React.CSSProperties;


export default function Resources() {

    return (
        <div className="bg-blue-900">
            <Header colors={HEADER_COLORS} />
            <Hero />
            <Highlights />
            <Articles />
            <Footer />
        </div>
    )
}