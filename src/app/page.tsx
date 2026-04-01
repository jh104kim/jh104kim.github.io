import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import AiLab from "@/components/sections/AiLab";
import Leadership from "@/components/sections/Leadership";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import AiChat from "@/components/AiChat";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <About />
      <Projects />
      <Research />
      <AiLab />
      <Leadership />
      <Resume />
      <Contact />
      <AiChat />
    </>
  );
}
