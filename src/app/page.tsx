"use client";
import Navigation from "@/sections/Navigation";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Team from "@/sections/Team";
export default function App() {
  return (
    <>
      <Navigation />
      <div className="container vh100">
        <Hero />
        <About />
        <Services />
      </div>
    </>
  );
}
