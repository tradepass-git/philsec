import Image from "next/image";
import Hero from "@/components/sections/hero"
import Speakers from "@/components/sections/Speakers"
import Overview from "@/components/sections/Overview"
import WhyPhilippines from "@/components/sections/WhyPhilippines";
import PowerHouse from "@/components/sections/PowerHouse";
import KeyStatistics from "@/components/sections/KeyStatistics";
export default function Home() {
  return (
    <main>
      <Hero />
      <Speakers />
      <Overview />
      <PowerHouse />
      <WhyPhilippines />
      <KeyStatistics />
    </main>
  );
}
