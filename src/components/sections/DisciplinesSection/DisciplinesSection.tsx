import { disciplines } from "@/data/sectionsData";

const orb = "font-orbitron";
const rob = "font-roboto";

export function DisciplinesSection() {
  return (
    <section className="w-full py-16 bg-bl-bg">
      <div className="max-w-[1440px] mx-auto px-6">
        <p className={`${orb} uppercase text-bl-red tracking-widest`} style={{ fontSize: "30px" }}>
          Sports
        </p>
        <h2
          className={`${orb} text-[32px] md:text-[48px] font-bold uppercase text-white tracking-wider mt-1 leading-tight`}
        >
          Competition Disciplines
        </h2>

        {/* Cards wrapper with schematic background */}
        <div className="mt-8 relative overflow-hidden p-6 rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] pointer-events-none mix-blend-screen invert"
            style={{ backgroundImage: `url('/circuit-bg.png')` }}
          />

          <div className="relative z-10 flex flex-wrap gap-5 justify-center md:justify-start">
            {disciplines.map((d) => (
              <div
                key={d.name}
                className="w-full max-w-[300px] rounded-lg overflow-hidden bg-bl-panel flex flex-col border border-white/15"
                style={{ height: "317px" }}
              >
                <img src={d.img} alt={d.name} className="w-full h-[236px] object-cover" />
                <div className="flex-1 flex items-center px-3">
                  <p
                    className={`${rob} text-white text-center w-full`}
                    style={{ fontSize: "26px" }}
                  >
                    {d.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default DisciplinesSection;
