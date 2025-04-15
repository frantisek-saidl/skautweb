"use client";

import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Activities from "@/components/sections/Activities";
import AgeGroups from "@/components/sections/AgeGroups";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import JoinForm from "@/components/sections/JoinForm";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Mission />
      <Activities />
      <AgeGroups />
      <Events />
      <Gallery />
      <JoinForm />
      <Contact />
    </main>
  );
}
