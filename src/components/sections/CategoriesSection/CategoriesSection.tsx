import { ArrowRight } from "lucide-react";
import { categories } from "@/data/sectionsData";

const orb = "font-orbitron";
const rob = "font-roboto";

export function CategoriesSection() {
  return (
    <section className="w-full bg-[#1A1919]">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <h2
          className={`${orb} uppercase text-white tracking-wider`}
          style={{ fontSize: "50px", fontWeight: 700 }}
        >
          Categories
        </h2>
        <div className="mt-8 flex flex-wrap gap-5 justify-center lg:justify-start">
          {categories.map((c) => (
            <div
              key={c.title}
              className="w-full max-w-[310px] bg-bl-panel border border-bl-border rounded-lg p-5 hover:border-bl-yellow transition flex flex-col"
              style={{ height: "391px" }}
            >
              <c.icon
                className="text-bl-yellow"
                strokeWidth={1.5}
                style={{ width: "110px", height: "110px" }}
              />
              <h3
                className={`${orb} uppercase text-white mt-6 leading-tight`}
                style={{ fontSize: "32px", fontWeight: 700 }}
              >
                {c.title.split(" ").map((w, i) => (
                  <span key={i} className="block">
                    {w}
                  </span>
                ))}
              </h3>
              <p className={`${rob} text-bl-muted mt-2`} style={{ fontSize: "20px" }}>
                {c.desc}
              </p>
              <a
                href="#"
                className={`${rob} mt-auto inline-flex items-center gap-1 text-bl-red hover:text-bl-red-2`}
                style={{ fontSize: "23px" }}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CategoriesSection;
