import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import {
  getStoredBgColor,
  setStoredBgColor,
} from "../components/BackgroundColorPicker";

const THEME_KEY = "theme";

const Home = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  });
  const [bgColor, setBgColor] = useState(() => getStoredBgColor());

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [theme]);

  useEffect(() => {
    if (bgColor) {
      setStoredBgColor(bgColor);
      document.documentElement.style.setProperty("--custom-bg", bgColor);
      document.documentElement.style.background = bgColor;
    } else {
      setStoredBgColor(null);
      document.documentElement.style.removeProperty("--custom-bg");
      document.documentElement.style.background = "";
    }
  }, [bgColor]);

  const handleBgColorChange = (hexOrNull) => {
    setBgColor(hexOrNull);
  };

  return (
    <div
      className="min-h-screen text-foreground overflow-x-hidden transition-colors duration-300"
      style={
        bgColor
          ? { backgroundColor: bgColor }
          : { backgroundColor: "hsl(var(--background))" }
      }
    >
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        bgColor={bgColor}
        onBgColorChange={handleBgColorChange}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
