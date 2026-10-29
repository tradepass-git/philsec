import HubSpotForm from "@/components/HubSpotForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Speaker Registration | DCCI Malaysia Expo 2027",

    robots: {
        index: false,
        follow: false,
    },

    openGraph: {
        title: "Speaker Registration | DCCI Malaysia Expo 2027",

    },

    twitter: {

        title: "Speaker Registration | DCCI Malaysia Expo 2027",

    }
}

export default function Page() {
    return (
        <main className="w-full bg-white">
            <section className="bg-style4 relative overflow-hidden">
                <img
                    src="/images/inner-banner-bg.jpg"
                    alt="Agenda Background"
                    className="inner-banner-img absolute top-0 left-0 object-cover w-full h-full !hidden"
                />

                <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                    <div className="h-[400px] lg:h-[300px] flex flex-col justify-end items-center gap-[30px] pb-[80px]">
                        <h1 className={`text-[clamp(2.4rem,8vw,4rem)] text-white uppercase font-satoshi font-black`}>Speaker Registration</h1>
                    </div>
                </div>
                <div className="absolute top-0 bottom-0 left-0 w-full h-full flex items-end">
                    <img src="/images/pattern3.webp" alt="Pattern" className="w-[80%] h-[100%]" />
                </div>
            </section>
            <section className="py-[80px] relative">
                <div className="relative z-10 max-w-7xl mx-auto w-full px-[20px]">
                    <div className="hb-custom-form">
                        <HubSpotForm
                            formId="ba9714ef-15d8-449b-a82c-65dc185a27fe"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}