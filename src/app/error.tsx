"use client";

import Image from "next/image";
import styles from "./Error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className={styles.errorScreen}>
      {/* Ambient glow */}
      <div className={styles.ambientGlow} />

      {/* Logo */}
      <div className={styles.logoWrapper}>
        <Image
          src="/images/golden-logo.png"
          alt="خطأ"
          width={140}
          height={110}
          className={styles.logo}
        />
      </div>

      {/* Error message */}
      <div className={styles.content}>
        <h2 className={styles.title}>عذراً، حدث خطأ</h2>
        <p className={styles.message}>
          نأسف لهذا الخلل. يرجى المحاولة مرة أخرى.
        </p>
        <button className={styles.retryBtn} onClick={() => reset()}>
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
