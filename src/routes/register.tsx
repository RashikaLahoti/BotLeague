import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar, Footer } from "@/components/layout";

export const Route = createFileRoute("/register")({
  component: RegisterComponent,
});

function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      toast.error("Please fill in all details!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Account created successfully! Welcome to BotLeague.");
    navigate({ to: "/login" });
  };

  return (
    <main className="min-h-screen bg-bl-bg text-white font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-tr from-[rgba(52,45,45,1)] to-[rgba(175,94,94,0.1)]">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-[480px] bg-bg-card border border-border-subtle/40 rounded-xl p-8 shadow-2xl flex flex-col gap-5"
        >
          <div className="text-center">
            <h2 className="font-orbitron uppercase text-white tracking-wider text-[32px] font-bold">
              Register
            </h2>
            <p className="font-roboto text-bl-muted mt-2 text-[16px]">
              Join the official national robotics ecosystem
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="font-roboto text-white text-sm">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-2.5 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-roboto text-white text-sm">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-2.5 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-roboto text-white text-sm">Password</label>
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-2.5 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-roboto text-white text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border border-bl-border rounded px-3 py-2.5 text-[16px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="font-roboto w-full py-3 rounded bg-bl-red text-white hover:bg-bl-red-2 transition uppercase text-[18px] font-semibold tracking-wider cursor-pointer mt-2"
          >
            Create Account
          </button>

          <div className="text-center font-roboto text-sm mt-2">
            <span className="text-bl-muted">Already have an account? </span>
            <Link to="/login" className="text-bl-red hover:underline font-medium">
              Sign In
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </main>
  );
}
