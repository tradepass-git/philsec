import type { Metadata } from "next";
import Banner from "@/components/sections/awards-2025/Banner";
import Jury from "@/components/sections/awards-2025/Jury";
import Financial from "@/components/sections/awards-2025/Financial";
import WhySection from "@/components/sections/awards-2025/WhySection";
import WhyBecomeSection from "@/components/sections/awards-2025/WhyBecomeSection";
import NominationSection from "@/components/sections/awards-2025/NominationSection";
import KeyBenefits from "@/components/sections/awards-2025/KeyBenefits";
import HowAward from "@/components/sections/awards-2025/HowAward";
import EachCategory from "@/components/sections/awards-2025/EachCategory";
import JudgingProcedure from "@/components/sections/awards-2025/JudgingProcedure";
import TeamMember from "@/components/sections/awards-2025/TeamMember";
import MoreThanJust from "@/components/sections/awards-2025/MoreThanJust";
import BecomeSponsor from "@/components/sections/awards-2025/BecomeSponsor";
import SponsorForm from "@/components/sections/awards-2025/SponsorForm";
import AwardsAnimations from "@/components/sections/awards-2025/AwardsAnimations";


export const metadata: Metadata = {
  title: "PhilSec 2025 Awards - Recognizing Cybersecurity Achievements",

  description:
    "Explore the PhilSec 2025 Awards page highlighting Jury members and award categories in cybersecurity excellence from public & private sectors",

  alternates: {
    canonical: "https://www.philsecsummit.com/awards-2025/",
  },

  openGraph: {
    title: "PhilSec 2025 Awards - Recognizing Cybersecurity Achievements",

    description:
      "Explore the PhilSec 2025 Awards page highlighting Jury members and award categories in cybersecurity excellence from public & private sectors",

    url: "https://www.philsecsummit.com/awards-2025/",

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

    title: "PhilSec 2025 Awards - Recognizing Cybersecurity Achievements",

    description:
      "Explore the PhilSec 2025 Awards page highlighting Jury members and award categories in cybersecurity excellence from public & private sectors",

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