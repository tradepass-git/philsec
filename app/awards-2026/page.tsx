import type { Metadata } from "next";
import Banner from "@/components/sections/awards-2026/Banner";
import Jury from "@/components/sections/awards-2026/Jury";
import Financial from "@/components/sections/awards-2026/Financial";
import WhySection from "@/components/sections/awards-2026/WhySection";
import WhyBecomeSection from "@/components/sections/awards-2026/WhyBecomeSection";
import NominationSection from "@/components/sections/awards-2026/NominationSection";
import KeyBenefits from "@/components/sections/awards-2026/KeyBenefits";
import HowAward from "@/components/sections/awards-2026/HowAward";
import EachCategory from "@/components/sections/awards-2026/EachCategory";
import JudgingProcedure from "@/components/sections/awards-2026/JudgingProcedure";
import TeamMember from "@/components/sections/awards-2026/TeamMember";
import MoreThanJust from "@/components/sections/awards-2026/MoreThanJust";
import BecomeSponsor from "@/components/sections/awards-2026/BecomeSponsor";
import SponsorForm from "@/components/sections/awards-2026/SponsorForm";
import AwardsAnimations from "@/components/sections/awards-2026/AwardsAnimations";


export const metadata: Metadata = {
  title: "PhilSec Awards 2026 - Honouring Cybersecurity Excellence",

  description:
    "Celebrate the Philippines’ leading cybersecurity minds at the PhilSec Awards 2026, recognising achievements, innovation & excellence in cybersecurity",

  alternates: {
    canonical: "https://www.philsecsummit.com/awards-2026/",
  },

  openGraph: {
    title: "PhilSec Awards 2026 - Honouring Cybersecurity Excellence",

    description:
      "Celebrate the Philippines’ leading cybersecurity minds at the PhilSec Awards 2026, recognising achievements, innovation & excellence in cybersecurity",

    url: "https://www.philsecsummit.com/awards-2026/",

    siteName: "PhilSec",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PhilSec",
      },
    ],

    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "PhilSec Awards 2026 - Honouring Cybersecurity Excellence",

    description:
      "Celebrate the Philippines’ leading cybersecurity minds at the PhilSec Awards 2026, recognising achievements, innovation & excellence in cybersecurity",

    images: ["/images/og-image.png"],

    creator: "@tradepass",
    site: "@tradepass",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <>
      <main id="awardpage" className="bg-white">
        <AwardsAnimations />
        <Banner />
        <Jury />
        <Financial />
        <WhySection />
        <WhyBecomeSection />
        <KeyBenefits />
        <HowAward />
        <EachCategory />
        <JudgingProcedure />
        <NominationSection />
        <TeamMember />
        <MoreThanJust />
        <BecomeSponsor />
        <SponsorForm />
      </main>
    </>
  );
};

export default Page;