"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import style from "../styles/components/NavBar.module.scss";

interface NavBarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const NavBar = ({ theme, toggleTheme }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    const closeMenuOnClick = () => setMenuOpen(false);
    window.addEventListener("click", closeMenuOnClick);
    return () => window.removeEventListener("click", closeMenuOnClick);
  }, [pathname]);

  return (
    <header className={`${style.navbar} `}>
      <div className={style.navContainer}>
        <Link href="/" className={style.logo}>
          <span className={style.glow}>🌍</span>
        </Link>
        <nav
          className={`${style.navLinks} ${menuOpen ? style.navLinksOpen : ""}`}
        >
          <Link href="/" className={`${style.navLink} ${style.homeIcon}`}>
          <span className={style.glow}>🌍</span>
          </Link>
          <Link href="/about" className={style.navLink}>
            About
          </Link>
          <Link href="/projects" className={style.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={style.navLink}>
            Contact
          </Link>
          <button
            className={style.themeToggle}
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
        <button
          className={`${style.menuToggle} ${menuOpen ? style.open : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          <div
            className={`${style.bar} ${
              menuOpen ? style.menuToggleOpenBar1 : ""
            }`}
          />
          <div
            className={`${style.bar} ${
              menuOpen ? style.menuToggleOpenBar2 : ""
            }`}
          />
          <div
            className={`${style.bar} ${
              menuOpen ? style.menuToggleOpenBar3 : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
