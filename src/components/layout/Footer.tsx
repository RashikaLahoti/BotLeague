import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const rob = "font-roboto";

export function Footer() {
  const quick = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
  const quick2 = ["Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];
  return (
    <footer className="border-t border-bl-border mt-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between gap-16">
        <div>
          <h4
            className={`${rob} text-white mb-6 uppercase tracking-wider`}
            style={{ fontSize: "25px", fontWeight: 700 }}
          >
            Quick Links
          </h4>
          <div className="flex gap-x-20 md:gap-x-32">
            <ul
              className={`${rob} flex flex-col gap-y-4 text-bl-muted`}
              style={{ fontSize: "18px", fontWeight: 400 }}
            >
              {quick.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <ul
              className={`${rob} flex flex-col gap-y-4 text-bl-muted`}
              style={{ fontSize: "18px", fontWeight: 400 }}
            >
              {quick2.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4
            className={`${rob} text-white mb-6 uppercase tracking-wider`}
            style={{ fontSize: "20px", fontWeight: 700 }}
          >
            Social Media
          </h4>
          <div className="flex gap-6 text-bl-muted">
            <a href="#" aria-label="YouTube" className="hover:text-white transition">
              <Youtube className="w-9 h-9" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <Instagram className="w-9 h-9" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <Facebook className="w-9 h-9" strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <Twitter className="w-9 h-9" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
