import { Play } from "lucide-react";
import heroArena from "@/assets/images/hero-arena.png";

const orb = "font-orbitron";
const rob = "font-roboto";

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative w-full">
        <img
          src={heroArena}
          alt="Robotics arena"
          className="w-full h-[400px] md:h-[520px] lg:h-[650px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bl-bg via-bl-bg/70 to-transparent" />

        <div className="absolute top-4 right-30 flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur px-3 py-1.5 rounded text-[10px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-bl-red font-semibold">
            <span className="w-2 h-2 rounded-full bg-bl-red animate-pulse" />
            LIVE
          </span>
          <span className="text-white/80 hidden sm:inline">: Episode 14 - Bengaluru Regionals</span>
          <a
            href="#"
            className="flex items-center gap-1 text-bl-red font-semibold hover:text-bl-red-2"
          >
            <Play className="w-3 h-3 fill-current" /> WATCH LIVE
          </a>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="max-w-[1440px] mx-auto w-full px-6">
            <div className="max-w-[860px]">
              <h1
                className={`${orb} uppercase tracking-wider text-white leading-[1.05] text-[32px] sm:text-[48px] md:text-[60px] font-semibold`}
              >
                India's Ultimate
                <br />
                Robotics Arena
              </h1>
              <p
                className={`${rob} text-white/80 max-w-xl text-[16px] sm:text-[20px] md:text-[24px] font-normal`}
              >
                Build. Compete. Rank. The National <br />
                Ecosystem for Robotics Arena
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  className={`${rob} px-5 py-2.5 rounded uppercase bg-bl-red text-white hover:bg-bl-red-2 transition text-[14px] md:text-[18px] font-normal`}
                >
                  Create Account
                </button>
                <button
                  className={`${rob} px-5 py-2.5 rounded uppercase bg-white/10 border border-white/20 text-white hover:bg-white/15 transition text-[14px] md:text-[18px] font-normal`}
                >
                  Explore Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
