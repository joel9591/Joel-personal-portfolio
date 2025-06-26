import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Helmet } from "react-helmet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      // Check if scrolled past the top
      setIsScrolled(window.scrollY > 10);

      // Find the active section
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Joel J | Full Stack Developer </title>
        <meta
          name="description"
          content="Joel J is a full stack software developer skilled in React.js, Node.js, JavaScript, Python, and modern web technologies. Explore his work and get in touch."
        />
        <meta
          name="keywords"
          content="Joel J, hey Joel, Joel portfolio, full stack developer, React developer, portfolio website, web developer Bangalore, joel j, Joel, Software Engineer"
        />
        <meta name="author" content="Joel J" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (for Facebook & LinkedIn) */}
        <meta property="og:title" content="Joel J | Full Stack Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the work of Joel J — a skilled React and Node.js full stack developer."
        />
        <meta property="og:url" content="https://heyjoel.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://heyjoel.vercel.app/images/joel-j1.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joel J | Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Dynamic and results-driven full stack software developer. Explore my portfolio."
        />
        <meta name="twitter:image" content="https://heyjoel.vercel.app/images/joel-j1.jpg" />
      </Helmet>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-300",
          isScrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Joel </span>J
            </a>
          </motion.div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {isDesktop ? (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      activeSection === item.href.replace("#", "")
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.nav>
            ) : (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="mt-8 flex flex-col gap-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-base font-medium transition-colors hover:text-primary",
                          activeSection === item.href.replace("#", "")
                            ? "text-primary"
                            : "text-muted-foreground",
                        )}
                        onClick={() => {
                          document
                            .querySelector(`[data-state="open"]`)
                            ?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
