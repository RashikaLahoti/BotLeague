import { sponsors } from "@/data/sectionsData";

const orb = "font-orbitron";
const rob = "font-roboto";

export function SponsorsSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      <h2
        className={`${orb} uppercase tracking-wider text-white`}
        style={{ fontSize: "35px", fontWeight: 700 }}
      >
        Sponsors
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
        {sponsors.map((s, i) => (
          <div key={i} className="flex items-center gap-3 md:gap-6">
            <img
              src={s.img}
              alt={s.name}
              className="h-16 w-16 md:h-28 md:w-28 object-contain opacity-80"
            />
            <span
              className={`${rob} uppercase opacity-80 text-white text-[16px] sm:text-[22px] md:text-[30px] font-medium`}
            >
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default SponsorsSection;
