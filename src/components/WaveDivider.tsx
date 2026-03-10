import styles from "./WaveDivider.module.css";

type WaveVariant = "hero-to-verse" | "verse-to-schedule" | "schedule-to-footer";

interface WaveDividerProps {
  variant: WaveVariant;
  flipColor?: boolean;
}

export default function WaveDivider({ variant, flipColor }: WaveDividerProps) {
  return (
    <div
      className={`${styles.wave} ${styles[variant]} ${flipColor ? styles.flipped : ""}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {variant === "hero-to-verse" && (
          <path
            d="M0,60 C180,120 360,0 540,60 C720,120 900,20 1080,60 C1200,85 1320,40 1440,60 L1440,120 L0,120 Z"
            className={styles.wavePath}
          />
        )}
        {variant === "verse-to-schedule" && (
          <path
            d="M0,80 C120,40 240,100 420,60 C600,20 720,90 900,50 C1080,10 1260,80 1440,50 L1440,120 L0,120 Z"
            className={styles.wavePath}
          />
        )}
        {variant === "schedule-to-footer" && (
          <path
            d="M0,40 C200,100 400,20 600,70 C800,120 1000,30 1200,70 C1320,90 1380,50 1440,60 L1440,120 L0,120 Z"
            className={styles.wavePath}
          />
        )}
      </svg>
    </div>
  );
}
