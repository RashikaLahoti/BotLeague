import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

const orb = "font-orbitron";
const rob = "font-roboto";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Events", path: "/events" as const },
    { name: "Programs", path: "/programs" as const },
    { name: "Community", path: "/community" as const },
    { name: "Ranks", path: "/ranks" as const },
  ];
  return (
    <header className="w-full bg-bl-bg border-b border-bl-border/40 relative">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-3 sm:px-6 py-4">
        <Link to="/">
          <img src={logo} alt="BotLeague" className="h-[26px] min-[360px]:h-8 sm:h-10 md:h-12 w-auto cursor-pointer" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              activeProps={{ className: "text-white border-b-2 border-bl-red pb-1" }}
              inactiveProps={{
                className: "text-white/80 hover:text-white border-b-2 border-transparent pb-1",
              }}
              className={`${orb} transition-colors pb-1`}
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/* CTAs (Visible on all viewports) */}
        <div className="flex items-center gap-1.5 min-[360px]:gap-2 md:gap-3 ml-auto md:ml-0 pl-3">
          <Link
            to="/login"
            className={`${rob} uppercase text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm px-2 py-1 min-[360px]:px-2.5 min-[360px]:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded border border-white text-white hover:bg-white/5 transition flex items-center justify-center`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`${rob} uppercase text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm px-2 py-1 min-[360px]:px-2.5 min-[360px]:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded bg-bl-red text-white hover:bg-bl-red-2 transition flex items-center justify-center`}
          >
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-white hover:text-bl-red transition focus:outline-none z-50 p-1.5 ml-1 min-[360px]:ml-1.5 sm:ml-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`absolute top-full left-0 w-full bg-bl-bg/95 backdrop-blur-md border-b border-bl-border/60 transition-all duration-300 ease-in-out md:hidden flex flex-col px-6 py-6 gap-6 z-40 ${
            isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.path}
                onClick={() => setIsOpen(false)}
                activeProps={{ className: "text-bl-red border-l-2 border-bl-red pl-3" }}
                inactiveProps={{
                  className: "text-white/80 hover:text-white border-l-2 border-transparent pl-3",
                }}
                className={`${orb} transition-colors py-1.5`}
                style={{ fontSize: "18px", fontWeight: 500 }}
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
