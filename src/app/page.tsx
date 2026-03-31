import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import AiLab from "@/components/sections/AiLab";
import Contact from "@/components/sections/Contact";
import AiChat from "@/components/AiChat";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Research />
      <AiLab />
      <Contact />
      <AiChat />
    </>
  );
}
