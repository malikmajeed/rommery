import { Header } from "@/compnenets/Header";
import HeroSection from "@/compnenets/HeroSection";
import ServicesSection from "@/compnenets/ServicesSection";
import HowItWorkSection from "@/compnenets/HowItWorkSection";
import { WhoWeServeSection } from "@/compnenets/WhoWeServeSection";
import { Footer } from "@/compnenets/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <HowItWorkSection />
      <WhoWeServeSection />
      <Footer />
    </>
  );
}
