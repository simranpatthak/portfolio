
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 my-4 px-4 py-3 rounded-full">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            Simram.dev
          </Link>
          
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {loading && (
        <div className="h-0.5 bg-primary/20">
          <div className="h-full bg-primary animate-loader" />
        </div>
      )}
    </header>
  );
};
