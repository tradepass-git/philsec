import type { Metadata } from "next";
import { getAgendaByID } from "@/lib/wordpress/agenda";
import Tabs from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "PhilSec Summit 2024 Agenda | Key Sessions & Topics",

  description:
    "Check the complete PhilSec 2024 agenda with sessions on national privacy, cloud security, ransomware evolution, SOC response, and identity management.",

  alternates: {
    canonical: "https://www.philsecsummit.com/agenda-2024/",
  },

  openGraph: {
    title: "PhilSec Summit 2024 Agenda | Key Sessions & Topics",

    description:
      "Check the complete PhilSec 2024 agenda with sessions on national privacy, cloud security, ransomware evolution, SOC response, and identity management.",

    url: "https://www.philsecsummit.com/agenda-2024/",

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

    title: "PhilSec Summit 2024 Agenda | Key Sessions & Topics",

    description:
      "Check the complete PhilSec 2024 agenda with sessions on national privacy, cloud security, ransomware evolution, SOC response, and identity management.",

    images: ["/images/og-image.png"],

    creator: "@tradepass",
    site: "@tradepass",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = async () => {
  const agenda = await getAgendaByID(9193);
  return (
    <div className="page-content bg-white pt-[120px]">
      <section className="bg-style4 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
          <div className="flex flex-col justify-end items-center gap-[30px] py-[60px]">
            <h1 className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-black">2024 Agenda</h1>
            <div className="bg-[var(--main-color)] w-[150px] h-[3px] hidden"></div>
          </div>
        </div>
      </section>
      <section className="py-[80px] pt-0 relative">
        <div className="relative z-10 max-w-[85rem] mx-auto w-full px-[20px]">
          <Tabs agenda={agenda.acf?.tabs} year="2024" />
          <div className='text-[1rem] agenda-text text-black font-montserrat mt-[40px]'>*The above is a running agenda and is subject to change</div>
        </div>
      </section>
    </div>
  )
}

export default page