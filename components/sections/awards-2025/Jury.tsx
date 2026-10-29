import { getJury } from "@/lib/wordpress/jury";
import JuryComponent from "@/components/ui/JuryComponent";

const Jury = async () => {
  const allJury = await getJury(2025);

  console.log(allJury);

  return (
    <section className="bg-black py-[60px] md:py-[80px]">
      <div className='max-w-7xl mx-auto w-full px-[20px]'>
        <div className='flex flex-wrap gap-y-[60px] items-center justify-center'>
          <h2 className="text-center font-black uppercase text-[clamp(2rem,4vw,3.5rem)] text-white font-montserrat">
            Jury Members
          </h2>

          <div className="grid grid-cols-1 gap-[20px] gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
            {allJury.map((speaker) => {
              const fullName =
                speaker?.title?.rendered?.trim() || "";

              return (
                <JuryComponent
                  key={speaker.id}
                  bgcolor="#6b6b69"
                  name={fullName}
                  company={speaker?.acf?.company || ""}
                  designation={speaker?.acf?.designation || ""}
                  imageSrc={Number(speaker?.acf?.speaker_image || 0)}
                />
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Jury;