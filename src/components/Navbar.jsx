import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import BackgroundColorPicker from "./BackgroundColorPicker";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const Navbar = ({
  theme,
  onToggleTheme,
  bgColor,
  onBgColorChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-foreground flex items-center"
        >
          <span className="relative z-10">
            Iker Luna Portfolio
          </span>
        </button>

        {/* Desktop nav + theme + bg color */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <BackgroundColorPicker
              currentColor={bgColor}
              onColorChange={onBgColorChange}
            />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* Mobile: bg color + theme + menu button */}
        <div className="flex md:hidden items-center gap-1">
          <BackgroundColorPicker
            currentColor={bgColor}
            onColorChange={onBgColorChange}
          />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
