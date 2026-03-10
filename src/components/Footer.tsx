"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" ref={footerRef} className={styles.footer}>
      {/* Top ornament */}
      {/* <div className={styles.topOrnament}>
        <div className={styles.ornLine} />
        <span className={styles.ornStar}>       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2 1 1 0 0 0-.35-1 1 1 0 0 0-1.06-.17A10 10 0 1 0 21.92 14a1 1 0 0 0-.28-1Z" />
        </svg></span>
        <div className={styles.ornLine} />
      </div> */}

      {/* Main content */}
      <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
        {/* Golden Logo */}
        <div className={styles.logoWrap}>
          <Image
            src="/images/golden-logo.png"
            alt="معتكف سكاريا الخامس"
            width={260}
            height={200}
            className={styles.logo}
          />
        </div>

        {/* Social Links */}
        <div className={styles.socialWrap}>
          <a
            href="https://chat.whatsapp.com/CXvzENlLZsQ7gUuVdh08Ws?mode=hq1tcli"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <span>مجموعة الواتس</span>
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
          >
            <span>انستغرام</span>

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

      {/* Copyright */}
      <div className={styles.copy}>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
