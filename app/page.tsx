import About from "@/components/about";
import Contact from "@/components/contact";
<<<<<<< HEAD
// import Experience from "@/components/experience";
=======
>>>>>>> e6aa8342538d78d43bdb1836d805ebdef7f762af
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
