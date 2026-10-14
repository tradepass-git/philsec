import { getNews } from "@/lib/wordpress/news";
import { NewsCard } from "@/components/ui/News";
const News = async () => {
    const news = await getNews(10);
    return (
        <section className="news relative overflow-hidden py-[80px]" data-gradient-section="default">
           {/* <img src="/images/bg-wave.png" className="absolute w-full h-full top-0 left-0 opacity-70" /> */} 
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:gap-[80px] px-[10px]">

                <div className="flex flex-col items-center gap-[60px]">
                    <div data-anim="fade-up" data-speed="1" data-delay="0.3" className="heading flex flex-col items-center gap-[40px]">
                        <div className="flex flex-col gap-[20px]">
                            <h2
                                className="font-oswald text-center text-[clamp(1.2rem,4vw,2.53rem)] font-bold uppercase leading-[1.2]  text-white">
                                News & Articles</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 items-stretch gap-[20px]">
                        <NewsCard newsdata={news} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;