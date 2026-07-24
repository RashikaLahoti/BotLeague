import React, { useState } from "react";
import { toast } from "sonner";

const orb = "font-orbitron";
const rob = "font-roboto";

interface EcosystemCardProps {
  title: string;
}

function EcosystemCard({ title }: EcosystemCardProps) {
  const [formData, setFormData] = useState({ name: "", location: "", enroll: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.location.trim() || !formData.enroll.trim()) {
      toast.error(`Please fill in all details to sign up as a ${title}!`);
      return;
    }

    toast.success(`Successfully signed up as a ${title}! Welcome to the Ecosystem.`);
    setFormData({ name: "", location: "", enroll: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[396px] bg-bl-panel border border-bl-border rounded-lg p-6 flex flex-col"
      style={{ height: "460px" }}
    >
      <h3 className={`${orb} uppercase text-white`} style={{ fontSize: "28px" }}>
        {title}
      </h3>
      <div className="mt-5 space-y-3 flex flex-col w-full">
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border border-bl-border rounded px-3 py-2 text-[20px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red"
          style={{ height: "60px" }}
        />
        <input
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full bg-transparent border border-bl-border rounded px-3 py-2 text-[20px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red"
          style={{ height: "60px" }}
        />
        <input
          placeholder="Enroll"
          value={formData.enroll}
          onChange={(e) => setFormData({ ...formData, enroll: e.target.value })}
          className="w-full bg-transparent border border-bl-border rounded px-3 py-2 text-[20px] text-white placeholder:text-bl-muted focus:outline-none focus:border-bl-red"
          style={{ height: "60px" }}
        />
      </div>
      <button
        type="submit"
        className={`${rob} w-full mt-auto rounded bg-bl-red text-white hover:bg-bl-red-2 transition cursor-pointer`}
        style={{ height: "61px", fontSize: "28px" }}
      >
        Sign Up
      </button>
    </form>
  );
}

export function EcosystemSection() {
  const forms = ["Become In Judge", "Volunteer", "Community Member"];
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      <h2
        className={`${orb} text-[32px] md:text-[48px] font-bold uppercase tracking-wider text-white leading-tight`}
      >
        Join the Ecosystem
      </h2>

      <div className="mt-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {forms.map((title) => (
          <EcosystemCard key={title} title={title} />
        ))}
      </div>
    </section>
  );
}
export default EcosystemSection;
