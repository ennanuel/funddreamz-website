
import Header from "../_components/home/Header";
import Hero from "../_components/categories/Hero";
import Footer from "../_components/home/Footer";
import CategoriesContainer from "../_components/categories/CategoriesContainer";
import CategoryFundRaisers from "../_components/categories/CategoryFundraisers";


export default function Categories() {

    return (
        <div className="bg-gray-100">
            <Header />
            <Hero />
            <CategoriesContainer />
            <CategoryFundRaisers />
            <Footer />
        </div>
    )
}