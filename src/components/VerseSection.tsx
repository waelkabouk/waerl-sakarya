"use client";

import styles from "./VerseSection.module.css";
import { useEffect, useRef, useState } from "react";

export default function VerseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="verse" ref={sectionRef} className={styles.verse}>
      {/* Ambient organic glow */}
      <div className={styles.ambientGlow} />

      {/* Decorative top ornament */}
      <div className={`${styles.ornamentTop} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.ornLine} />
        <span className={styles.ornStar}>✦</span>
        <div className={styles.ornLine} />
      </div>

      {/* The Verse */}
      <div className={`${styles.verseContent} ${isVisible ? styles.visible : ""}`}>
        <p className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <div className={styles.verseWrapper}>
          <h2 className={styles.verseText}>
            وَعَجِلْتُ إِلَيْكَ رَبِّ لِتَرْضَىٰ
          </h2>
        </div>
        <p className={styles.verseRef}>— سورة طه، آية ٨٤</p>
      </div>

      {/* Decorative bottom ornament */}
      <div className={`${styles.ornamentBottom} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.ornLine} />
        <span className={styles.ornStar}>✦</span>
        <div className={styles.ornLine} />
      </div>
    </section>
  );
}
