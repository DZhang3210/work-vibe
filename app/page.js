import BrandCarousel from "@/components/Hero/BrandCarousel";
import EngagementSection from "@/components/Hero/EngagementSection";
import Hero from "@/components/Hero/Hero";
import AssessComponent from "@/components/Review/AssessComponent";
import ReviewComponent from "@/components/Review/ReviewComponent";
import Summary from "@/components/Review/Summary";
import WhyTry from "@/components/Review/WhyTry";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <EngagementSection/>
      <ReviewComponent/>
      <WhyTry/>
      <AssessComponent/>
      <Summary/>
    </main>
  );
}
