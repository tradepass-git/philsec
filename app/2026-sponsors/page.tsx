import type { Metadata } from "next";
import { getSponsors } from "@/lib/wordpress/sponsors";
import UISponsor from "@/components/ui/Sponsors";

export const metadata: Metadata = {
  title: "DCCI Malaysia 2026 Sponsors: Cloud, AI & Data Center Leaders",

  description:
    "The DCCI Malaysia 2026 sponsor lineup features global leaders in digital infrastructure, cloud, AI, cybersecurity, and data center technologies.",

  alternates: {
    canonical: "https://malaysia.dccisummit.com/2026-sponsors/",
  },

  openGraph: {
    title: "DCCI Malaysia 2026 Sponsors: Cloud, AI & Data Center Leaders",

    description:
      "The DCCI Malaysia 2026 sponsor lineup features global leaders in digital infrastructure, cloud, AI, cybersecurity, and data center technologies.",

    url: "https://malaysia.dccisummit.com/2026-sponsors/",

    siteName: "DCCI Malaysia",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DCCI Malaysia Sponsors 2026",
      },
    ],

    locale: "en_MY",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "DCCI Malaysia 2026 Sponsors: Cloud, AI & Data Center Leaders",

    description:
      "The DCCI Malaysia 2026 sponsor lineup features global leaders in digital infrastructure, cloud, AI, cybersecurity, and data center technologies.",

    images: ["/images/og-image.png"],

    creator: "@tradepass",
    site: "@tradepass",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default async function Sponsors2026() {
  const sponsors = await getSponsors(2026);
  //console.log(sponsors);
  return (
    <>
      <div className="page-content bg-white pt-[120px]">
        <section className="bg-style4 relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
            <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
              <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black">2026 Sponsors</h1>
            </div>
          </div>
        </section>

        <UISponsor sponsorData={sponsors} />

      </div>
    </>
  )

}