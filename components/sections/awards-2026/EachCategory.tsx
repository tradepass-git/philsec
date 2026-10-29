import React from 'react'
import customCalss from "@/public/css/CustomClass.module.css";
const EachCategory = () => {
    const categories = [
        {
            id: "01",
            title: "Latest Insights & Trends",
            description:
                "To highlight the most impactful developments, we analyse the latest advancements in data protection, AI & ML, threat intelligence, compliance, zero trust architecture and many other key domains.",
        },
        {
            id: "02",
            title: "Expert & Stakeholder Consultation",
            description:
                "Our categories are further refined based on discussions with industry leaders, technology experts, and key stakeholders, ensuring they align with market needs and benchmarks.",
        },
        {
            id: "03",
            title: "Recognition of Excellence",
            description:
                "We identify areas where professionals, organizations, and solution providers have demonstrated outstanding innovation, leadership, and operational excellence.",
        },
        {
            id: "04",
            title: "Diversity & Inclusivity",
            description:
                "The categories span across various domains, company sizes, and expertise levels, ensuring that all players—from startups to industry giants—get the recognition they deserve.",
        },
    ];
    return (
        <section className='relative py-[120px] bg-[#f2f2f2]'>
            <div className='max-w-7xl mx-auto w-full px-[20px]'>
                <div className='flex flex-col gap-[90px] w-full mx-auto'>
                    <div className='flex flex-col gap-[30px] justify-center items-center'>
                        <h2 className='mil-up uppercasemil-up flex flex-col items-center text-[clamp(1.3rem,3vw,2rem)] font-black uppercase leading-[1] gap-[10px] text-center  text-black font-montserrat'>Each category<span className='text-[clamp(1.8rem,4vw,2.6rem)] font-light leading-[1.4]'>is selected based on</span></h2>
                    </div>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]'>
                        {categories.map((item, index) => (
                            <div key={index} className='group'>
                                <div className={`${customCalss["mil-service-card"]} cursor-pointer mil-up sm:min-h-[550px] min-h-full py-[100px] px-[20px] bg-[#fff] overflow-hidden flex flex-col relative border-[5px] border-[#0000001a] group-hover:pt-[80px] group-hover:pb-[40px]`}>
                                    <div className='absolute top-[30px] left-[30px] font-extrabold text-[1.3rem] text-[#0000001a]'>{item.id}</div>
                                    <div className='w-full text-center flex flex-col gap-[20px] items-center justify-center'>
                                        <div className='text-[1.3rem] font-bold text-black uppercase'>{item.title}</div>
                                        <div className={`${customCalss["mil-divider-sm"]} h-[5px] w-[60px] bg-transparent border-[3px] border-[#0000001a] group-hover:bg-[#ffcd7f]`}></div>
                                        <p className='text-[#4a4a4a] leading-[1.6] transform translate-y-0 scale-100 transition-all duration-400 ease-[cubic-bezier(0,0,0.3642,1) group-hover:scale-80'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EachCategory