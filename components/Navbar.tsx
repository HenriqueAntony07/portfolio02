"use client";
  import { useState, useEffect } from "react";
  import { useTheme } from "next-themes";
  import { Menu, Moon, Sun, X } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
      { name: "Sobre", href: "#about" },
      { name: "Projetos", href: "#projects" },
      { name: "Contato", href: "#contact" },
    ];

    const handleNavClick = (href: string) => {
      setMobileMenuOpen(false);
      if (isHome) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/" + href;
      }
    };

    return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-sm font-black uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity">
            Henrique Antony
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors text-sm">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-1 text-muted-foreground">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1 text-foreground">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-background border-b border-border py-4 px-6 flex flex-col gap-4 md:hidden">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2">
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }
  