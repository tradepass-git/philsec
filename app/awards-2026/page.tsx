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
  title: "DCCI Malaysia Awards 2026 : Digital Infrastructure&#039;s Very Best",

  description:
    "Recognizing the top minds across data centers, cloud services, digital transformation and crucial digital infrastructure domains amidst the most elite audience.",

  alternates: {
    canonical: "https://malaysia.dccisummit.com/awards-2026/",
  },

  openGraph: {
    title: "DCCI Malaysia Awards 2026 : Digital Infrastructure&#039;s Very Best",

    description:
      "Recognizing the top minds across data centers, cloud services, digital transformation and crucial digital infrastructure domains amidst the most elite audience.",

    url: "https://malaysia.dccisummit.com/awards-2026/",

    siteName: "DCCI Malaysia",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DCCI Malaysia Awards 2026",
      },
    ],

    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DCCI Malaysia Awards 2026 : Digital Infrastructure&#039;s Very Best",

    description:
      "Recognizing the top minds across data centers, cloud services, digital transformation and crucial digital infrastructure domains amidst the most elite audience.",

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