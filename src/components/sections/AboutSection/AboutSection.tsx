import { aboutItems } from "@/data/sectionsData";
import aboutIllustration from "@/assets/images/about-illustration.png";

const orb = "font-orbitron";
const rob = "font-roboto";

export function AboutSection() {
  return (
    <section className="w-full bg-[#1A1919]">
      <div className="max-w-[1440px] mx-auto px-6 py-26">
        <h2
          className={`${orb} text-[32px] md:text-[48px] font-bold uppercase tracking-wider text-white leading-tight`}
        >
          What is BotLeague?
        </h2>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {aboutItems.map((it) => (
              <div key={it.title}>
                <p className={`${orb} text-bl-red`} style={{ fontSize: "36px", fontWeight: 600 }}>
                  {it.n}
                </p>
                <h3 className={`${rob} text-white`} style={{ fontSize: "36px", fontWeight: 600 }}>
                  {it.title}
                </h3>
                <p
                  className={`${rob} text-bl-muted `}
                  style={{ fontSize: "22px", fontWeight: 400 }}
                >
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
          <img
            src={aboutIllustration}
            alt=""
            className="opacity-80 justify-self-center w-full max-w-[375px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
