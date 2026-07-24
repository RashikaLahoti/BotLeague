 import { registerItems } from "@/data/sectionsData";
import leaderboard from "@/assets/images/leaderboard.png";

const orb = "font-orbitron";
const rob = "font-roboto";

export function RegisterSection() {
  return (
    <section className="w-full bg-[#1A1919]">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <p
          className={`${orb} text-[22px] md:text-[30px] font-semibold uppercase text-bl-red tracking-widest leading-tight`}
        >
          Why Register?
        </p>
        <h2 className={`${orb} text-[32px] md:text-[48px] font-bold uppercase text-white leading-tight mb-5 mt-1`}>
          The League Advantage
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {registerItems.map((it) => (
              <div key={it.title} className="flex items-center gap-4">
                <it.icon
                  className="text-bl-red shrink-0"
                  strokeWidth={1.5}
                  style={{ width: "71px", height: "71px" }}
                />
                <div>
                  <h3 className={`${rob} text-white uppercase`} style={{ fontSize: "30px" }}>
                    {it.title}
                  </h3>
                  <p
                    className={`${rob} text-bl-muted tracking-tight max-w-md`}
                    style={{ fontSize: "20px" }}
                  >
                    {it.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={leaderboard}
            alt="Leaderboard"
            className="max-w-full h-auto max-h-[300px] sm:max-h-[450px] lg:max-h-[680px] justify-self-center lg:justify-self-end"
            style={{ width: "760px", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
export default RegisterSection;
