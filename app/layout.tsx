import { Montserrat, Oswald, Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/Header";
import Footer from "@/components/FooterNew";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
//import GSAPAnimations from "@/components/GSAPAnimations";
import localFont from "next/font/local";

import "@/public/css/icomoon.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


const mangoGrotesque = localFont({
  src: [
    {
      path: "../public/fonts/MangoGrotesque-Regular.woff",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-mango",
});


// --------------------------------------------------
// Metadata
// --------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL("https://www.philsecsummit.com/"),

  title: "PhilSec 2027 - The Philippines’ Premier Cybersecurity Event",

  description:
    "Being also one of the leading information security conferences, Philsec will unite public, private security leaders on 20–21 April 2027 at Manila Marriott Hotel",

  alternates: {
    canonical: "https://www.philsecsummit.com/",
  },

  keywords: [
    "Philsec 2027",
    "CISO Summit",
    "CIO CISO Summit",
    "Cybersecurity and Privacy Professionals Conference",
    "Cybersecurity Networking Events",
    "Security Networking Events",
    "Security Professionals Conference",
    "Information Security Conferences",
    "Information Security Event",
    "Infosec Conference",
    "Annual Information Security Summit",
    "Information Security Summit",
    "Infosec Show",
    "Infosec Summit",
    "Infosecurity Summit",
    "Cyber Security Exhibition",
    "Cyber Security Expo",
    "Cybersecurity Exhibition",
    "Cybersecurity Expo",
    "Security Exhibition",
    "Cloud & Cyber Security Expo",
    "Cloud and Cyber Security Expo",
    "Cyber Exhibition",
    "Cyber Security Cloud Expo",
    "Cyber Security Shows",
    "Cyber Security Trade Show",
    "The Official Cyber Security Summit",
    "Top Cybersecurity Conferences",
    "Top Security Conferences",
    "Best Cybersecurity Conferences",
    "Biggest Cybersecurity Conferences",
    "Current Cybersecurity Events",
    "Official Cyber Security Summit",
    "Top Cybersecurity Events",
    "Upcoming Cybersecurity Conferences",
    "Upcoming Cybersecurity Events",
    "Upcoming Security Conferences",
    "Global Cyber Summit",
    "Global Security Summit",
    "Global Cyber Conference",
    "Global Security Conference",
    "International Conference on Cyber Security",
    "National Cyber Security Conference",
    "National Cyber Summit",
    "National Cybersecurity Summit",
    "Public Sector Cyber Security Conference",
    "Critical Infrastructure Summit",
    "Sector Security Conference",
    "Cloud Security Conferences",
    "Cloud Security Events",
    "Cloud Security Summit",
    "Data Protection Conferences",
    "Data Protection Events",
    "Data Protection Summit",
    "Data Security Conference",
    "Data Security Conferences",
    "Data Security Summit",
    "Network Security Conferences",
    "Network Security Events",
    "Data Security Events",
    "Cyber Defense Summit",
    "Cyber Resilience Summit",
    "Cyber Threat Intelligence Conference",
    "AI Cybersecurity Conference",
    "AI Security Conference",
    "Cyber Defense Conference",
    "Cyber Resilience Conference",
    "Cyber Risk Conference",
    "Cyber Risk Management Conference",
    "Innovation Cybersecurity Summit",
    "Security & Risk Management Summit",
    "Security and Risk Management Summit",
    "Security and Risk Summit",
    "Threat Intelligence Conference",
    "IT Security Conference",
    "Security Conference",
    "Security Summit",
    "IT Security Summit",
    "Security Industry Conferences",
    "Security Industry Events",
    "Conferences Cybersecurity",
    "Cyber Conferences",
    "Cybersec Conference",
    "Cyber Summit",
    "Summit Cyber Security",
    "Cyber Event",
    "Events in Cyber Security",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "PhilSec 2027 - The Philippines’ Premier Cybersecurity Event",

    description:
      "Being also one of the leading information security conferences, Philsec will unite public, private security leaders on 20–21 April 2027 at Manila Marriott Hotel",

    url: "https://www.philsecsummit.com/",

    siteName: "PhilSec",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "PhilSec",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "PhilSec 2027 - The Philippines’ Premier Cybersecurity Event",

    description:
      "Being also one of the leading information security conferences, Philsec will unite public, private security leaders on 20–21 April 2027 at Manila Marriott Hotel",

    images: ["/images/og-image.png"],

    creator: "@tradepass",
    site: "@tradepass",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "PhilSec 2027",
    startDate: "2027-04-20",
    endDate: "2027-04-21",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    description:
      "Recognised as a leading cybersecurity event in the Philippines, PhilSec will bring together public and private sector security leaders on 20–21 April 2027 in Manila.",
    url: "https://www.philsecsummit.com/",
    image:
      "https://www.philsecsummit.com/wp-content/themes/PhilSec-v2/assets/img/philsec-logo.svg",
    location: {
      "@type": "Place",
      name: "Manila Marriott Hotel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Resorts Drive, Newport City, Pasay City",
        addressLocality: "Manila",
        addressRegion: "Metro Manila",
        postalCode: "1309",
        addressCountry: "PH",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Tradepass",
      url: "https://tradepassglobal.com",
    },
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${mangoGrotesque.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="philsec-event-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventSchema),
          }}
        />
        <SmoothScroll />
        <Header />
        <div id="smooth-wrapper" className="overflow-hidden">
          <div id="smooth-content" className="will-change-transform">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
