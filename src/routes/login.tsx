import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar, Footer } from "@/components/layout";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter both email and password!");
      return;
    }

    toast.success("Welcome back to BotLeague! Logged in successfully.");
    navigate({ to: "/" });
  };

  return (
    <main className="min-h-screen bg-bl-bg text-white font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-tr from-[rgba(52,45,45,1)] to-[rgba(175,94,94,0.1)]">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-[450px] bg-bg-card border border-border-subtle/40 rounded-xl p-8 shadow-2xl flex flex-col gap-6"
        >
          <div className="text-center">
            <h2 className="font-orbitron uppercase text-white tracking-wider text-[32px] font-bold">
              Sign In
            </h2>
            <p className="font-roboto text-bl-muted mt-2 text-[16px]">
              Access your athlete leaderboard and tournaments
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-roboto text-white text-sm">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-3 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-roboto text-white text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-3 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="font-roboto w-full py-3 rounded bg-bl-red text-white hover:bg-bl-red-2 transition uppercase text-[18px] font-semibold tracking-wider cursor-pointer"
          >
            Sign In
          </button>

          <div className="text-center font-roboto text-sm mt-2">
            <span className="text-bl-muted">Don't have an account? </span>
            <Link to="/register" className="text-bl-red hover:underline font-medium">
              Register Now
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
