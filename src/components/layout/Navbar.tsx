import { Link } from "@tanstack/react-router";
import logo from "@/assets/images/logo.png";

const orb = "font-orbitron";
const rob = "font-roboto";

export function Navbar() {
  const links = [
    { name: "Events", path: "/events" as const },
    { name: "Programs", path: "/programs" as const },
    { name: "Community", path: "/community" as const },
    { name: "Ranks", path: "/ranks" as const },
  ];
  return (
    <header className="w-full bg-bl-bg border-b border-bl-border/40">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={logo} alt="BotLeague" className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer" />
        </Link>
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
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/login"
            className={`${rob} uppercase text-[11px] sm:text-xs md:text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded border border-white text-white hover:bg-white/5 transition flex items-center justify-center`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={`${rob} uppercase text-[11px] sm:text-xs md:text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded bg-bl-red text-white hover:bg-bl-red-2 transition flex items-center justify-center`}
          >
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
