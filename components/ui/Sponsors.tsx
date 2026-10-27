import SponsorsImg from "@/components/ui/SponsorsImg";

const UISponsor = ({ sponsorData }: any) => {

    return (
        <section className="sponsors-section relative pb-[40px] py-[80px]">
            <div className="mx-auto w-full max-w-[1320px] flex flex-col gap-[40px] px-[20px]">

                {sponsorData?.map((sponsor: any, index: number) => {
                    const layout_column = sponsor?.acf?.layout_column;

                    let layoutClass = "";

                    switch (layout_column) {
                        case "col-12 col-sm-10":
                            layoutClass = "w-full sm:w-[83%]";
                            break;
                        case "col-11":
                            layoutClass = "w-[91%]";
                            break;

                        case "col-10":
                            layoutClass = "w-[83%]";
                            break;

                        case "col-9":
                            layoutClass = "w-[75%]";
                            break;

                        case "col-8":
                            layoutClass = "w-[66%]";
                            break;

                        default:
                            layoutClass = "w-full";
                    }

                    const sponsorContent = (
                        <div
                            key={index}
                            id={String(sponsor?.id)}
                            className={`flex flex-col gap-[30px] justify-center items-center ${layoutClass} mx-auto`}
                        >
                            <h3
                                className="font-satoshi text-[clamp(1.4rem,3vw,1.5rem)] font-bold uppercase leading-[1.4] text-black text-center"
                                dangerouslySetInnerHTML={{
                                    __html: sponsor?.title?.rendered || "",
                                }}
                            />

                            <div className="flex flex-wrap justify-center items-center w-full mx-auto">
                                {sponsor?.acf?.logos?.map(
                                    (logo: any, logoIndex: number) => {
                                        const loop_column_class =
                                            logo?.loop_column_class;

                                        let logoClass = "";

                                        switch (loop_column_class) {
                                            case "col-12 col-md-4":
                                                logoClass =
                                                    "w-full sm:w-1/3 md:w-1/3";
                                                break;

                                            case "col-12 col-md-4 platinum":
                                            case "col-12 col-sm-4 platinum":
                                                logoClass =
                                                    "w-full sm:w-[30.33%]";
                                                break;

                                            case "col-12 col-sm-4 col-md-4":
                                            case "col-12 col-sm-4":
                                                logoClass =
                                                    "w-full sm:w-1/3 md:w-1/3";
                                                break;

                                            case "col-12 col-sm-3 col-md-4":
                                                logoClass =
                                                    "w-full sm:w-1/4 md:w-1/3";
                                                break;

                                            case "col-12 col-sm-3":
                                                logoClass =
                                                    "w-full sm:w-1/4";
                                                break;

                                            case "col-10 col-sm-3 col-md-3":
                                                logoClass =
                                                    "w-[83.33%] sm:w-1/4 md:w-1/4";
                                                break;

                                            case "col-6 col-sm-2":
                                                logoClass =
                                                    "w-1/2 sm:w-1/6";
                                                break;

                                            case "col-6 col-sm-2 media":
                                                logoClass =
                                                    "max-[568px]:w-[40%] w-[14.66%] media";
                                                break;

                                            case "col-6 col-sm-2 exhibit":
                                                logoClass =
                                                    "w-1/2 sm:w-1/6 md:w-[17.66%] exhibit";
                                                break;

                                            case "col-6 col-sm-3 exhibit":
                                                logoClass =
                                                    "w-1/2 sm:w-1/4 md:w-[17.66%] exhibit";
                                                break;

                                            case "col-6 col-sm-3":
                                                logoClass =
                                                    "w-1/2 sm:w-1/3 md:w-1/4";
                                                break;

                                            case "col-12 col-sm-6 col-md-4":
                                                logoClass =
                                                    "w-full sm:w-1/2 md:w-1/3";
                                                break;

                                            case "col-6 col-sm-6":
                                                logoClass =
                                                    "w-1/2 md:w-1/2";
                                                break;

                                            case "col-12":
                                                logoClass = "w-full";
                                                break;

                                            case "col-4 col-sm-2":
                                                logoClass = "w-1/3 sm:w-1/6";
                                                break;

                                            default:
                                                logoClass =
                                                    "w-1/2 sm:w-1/3 md:w-1/4";
                                        }

                                        return (
                                            <SponsorsImg
                                                key={logoIndex}
                                                imgUrl={
                                                    logo?.logo_image || ""
                                                }
                                                companyname=""
                                                hubspotId={
                                                    logo?.hubspot_id || ""
                                                }
                                                weblink={
                                                    logo?.website_link || ""
                                                }
                                                modaltitle={
                                                    sponsor?.title?.rendered
                                                }
                                                widthclass={logoClass}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    );

                    return sponsorContent;
                })}

            </div>
        </section>
    )

};


export default UISponsor;