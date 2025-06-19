import HomeHero from "./_components/HomeHero";
import Stats from "./_components/Stats";
import QuickDemo from "./_components/QuickDemo";
import DiscoverFundraisers from "./_components/DiscoverFundraisers";
import FeaturedTopics from "./_components/FeaturedTopics";
import Description1 from "./_components/Description1";
import HowItWorks from "./_components/HowItWorks";
import Description2 from "./_components/Description2";
import Categories from "./_components/Categories";
import Tips from "./_components/Tips";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HomeHero />
      <Stats />
      <QuickDemo />
      <DiscoverFundraisers />
      <FeaturedTopics />
      <Description1 />
      <HowItWorks />
      <Description2 />
      <Categories />
      <Tips />
      <Footer />
    </div>
  );
}
