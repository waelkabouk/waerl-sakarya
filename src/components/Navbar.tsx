"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import { useEffect, useState, useRef } from "react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Set initial scroll position
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (scrollTimeout.current !== null) {
        cancelAnimationFrame(scrollTimeout.current);
      }

      scrollTimeout.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Show/hide based on scroll direction (hide when scrolling down past 200px)
        const shouldHide = currentScrollY > lastScrollY.current && currentScrollY > 200;
        setHidden((prev) => {
          if (prev !== shouldHide) return shouldHide;
          return prev;
        });

        // Glassmorphism effect after scrolling past hero
        const shouldScroll = currentScrollY > 80;
        setScrolled((prev) => {
          if (prev !== shouldScroll) return shouldScroll;
          return prev;
        });
        
        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${hidden ? styles.hidden : ""}`}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <button
          className={styles.logoBtn}
          onClick={() => scrollToSection("hero")}
          aria-label="الرئيسية"
        >
          <Image
            src="/images/white-logo.png"
            alt="معتكف سكاريا الخامس"
            width={120}
            height={96}
            priority
            className={styles.logo}
          />
        </button>

        {/* Navigation Links */}
        <div className={styles.links}>
          <button
            className={styles.link}
            onClick={() => scrollToSection("schedule")}
          >
            برنامج الاعتكاف
          </button>
          <div className={styles.socialGroup}>
            <a
              href="https://chat.whatsapp.com/CXvzENlLZsQ7gUuVdh08Ws?mode=hq1tcli"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="مجموعة الواتساب"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/waerl_sakarya"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="حساب الانستغرام"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
