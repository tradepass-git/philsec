import Image from "next/image";
import Hero from "@/components/sections/hero"
import Speakers from "@/components/sections/Speakers"
import Overview from "@/components/sections/Overview"
import WhyPhilippines from "@/components/sections/WhyPhilippines";
import PowerHouse from "@/components/sections/PowerHouse";
import KeyStatistics from "@/components/sections/KeyStatistics";
import Industry from "@/components/sections/Industry";
import Topics from "@/components/sections/Topics";
import Happenings from "@/components/sections/Happenings-2";
import Happenings4 from "@/components/sections/Happenings-4";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
export default function Home() {
  return (
    <main>
      <Hero />
      <Speakers />
      <Overview />
      <PowerHouse />
      <WhyPhilippines />
      <KeyStatistics />
      <Industry />
      <Happenings4 />
      <Happenings />
      <Topics />
      <WhyChooseUs />
    </main>
  );
}
