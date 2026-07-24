import { journeySteps } from "@/data/sectionsData";

const orb = "font-orbitron";
const rob = "font-roboto";

export function JourneySection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-10 mt-10 text-center">
      <p
        className={`${rob} text-[22px] md:text-[30px] font-semibold uppercase text-bl-red tracking-widest leading-tight`}
      >
        User Journey
      </p>
      <h2 className={`${orb} text-[32px] md:text-[48px] font-bold uppercase text-white leading-tight mt-1`}>
        Your Path To The League
      </h2>
      <p className={`${rob} text-[16px] md:text-[20px] text-bl-muted mt-2 max-w-2xl mx-auto`}>
        Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </p>

      <div className="mt-20 relative">
        <div className="hidden md:block absolute top-[70px] left-[12.5%] right-[12.5%] h-px bg-bl-blue/50" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {journeySteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="rounded-full bg-[#1e1e28] border border-[#2a2a38] flex items-center justify-center relative z-10"
                style={{ width: "140px", height: "140px" }}
              >
                <div
                  className="rounded-full border-2 border-bl-blue bg-bl-bg flex items-center justify-center"
                  style={{ width: "112px", height: "112px" }}
                >
                  <s.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <p className={`${rob} uppercase text-bl-red mt-4`} style={{ fontSize: "26px" }}>
                Step {i + 1}
              </p>
              <p
                className={`${rob} uppercase text-white mt-1`}
                style={{ fontSize: "26px", fontWeight: 600 }}
              >
                {s.lines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default JourneySection;
