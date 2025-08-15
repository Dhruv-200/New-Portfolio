import {
  BriefcaseBusiness,
  Contact as ContactIco,
  House,
  UserRound,
} from "lucide-react";
import { Navbar } from "@/app/_components/ui/Navbar";
import HeroSection from "@/app/_components/HeroSection";
import Skills from "@/app/_components/Skills";
import ProjectsSection from "@/app/_components/ProjectsSection";
import Footer from "@/app/_components/Footer";
import Container from "@/app/_components/ui/Container";

const navItems = [
  { name: "Home", link: "#home", icon: <House /> },
  { name: "Work", link: "#work", icon: <BriefcaseBusiness /> },
  { name: "About", link: "#about", icon: <UserRound /> },
  { name: "Contact", link: "#contact", icon: <ContactIco /> },
];

const Homepage = () => {
  return (
    <main className="flex flex-col relative">
      <Container>
        <Navbar navItems={navItems} />
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <Footer />
      </Container>
    </main>
  );
};

export default Homepage;
