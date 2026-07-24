import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/layout";
import HeroSection from "@/components/sections/HeroSection";
import EventsSection from "@/components/sections/EventsSection";
import JourneySection from "@/components/sections/JourneySection";
import AboutSection from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import DisciplinesSection from "@/components/sections/DisciplinesSection";
import RegisterSection from "@/components/sections/RegisterSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import SponsorsSection from "@/components/sections/SponsorsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-bl-bg text-white font-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <JourneySection />
      <AboutSection />
      <CategoriesSection />
      <DisciplinesSection />
      <RegisterSection />
      <EcosystemSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
