"use client";

import Image from "next/image";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingScreen}>
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Logo with breathing animation */}
      <div className={styles.logoWrapper}>
        <div className={styles.ring} />
        <Image
          src="/images/golden-logo.png"
          alt="جاري التحميل..."
          width={200}
          height={160}
          priority
          className={styles.logo}
        />
      </div>

      {/* Loading dots */}
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}
