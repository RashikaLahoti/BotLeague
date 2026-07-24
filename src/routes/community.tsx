import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar, Footer } from "@/components/layout";

export const Route = createFileRoute("/community")({
  component: CommunityComingSoon,
});

function CommunityComingSoon() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address!");
      return;
    }

    toast.success(`Successfully subscribed! We'll keep you updated at ${email}.`);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-bl-bg text-white font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-24 bg-gradient-to-tr from-[rgba(52,45,45,1)] to-[rgba(175,94,94,0.05)]">
        <div className="max-w-xl text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-bl-red/10 flex items-center justify-center border border-bl-red animate-pulse">
            <span className="font-orbitron text-bl-red font-bold text-xl">BL</span>
          </div>

          <h1 className="font-orbitron uppercase text-white tracking-widest text-[40px] md:text-[50px] font-extrabold leading-tight">
            Athlete Community
          </h1>

          <p className="font-orbitron uppercase text-bl-red tracking-widest text-[20px] md:text-[24px] font-semibold">
            Coming Soon
          </p>

          <p className="font-roboto text-bl-muted text-[18px] md:text-[22px] max-w-lg leading-relaxed">
            Connect with elite builders, form tournament alliances, and swap strategies. The central
            hub is under construction.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              placeholder="Enter email to get notified"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-bl-border rounded px-4 py-3 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
            />
            <button
              type="submit"
              className="font-roboto py-3 px-6 rounded bg-bl-red text-white hover:bg-bl-red-2 transition uppercase text-[16px] font-semibold tracking-wider cursor-pointer"
            >
              Notify Me
            </button>
          </form>

          <div className="mt-4">
            <Link
              to="/"
              className="font-roboto text-sm border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded transition uppercase tracking-wider"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
