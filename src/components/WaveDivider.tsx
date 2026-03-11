import styles from "./WaveDivider.module.css";

type WaveVariant = "hero-to-verse" | "verse-to-schedule" | "schedule-to-footer";

interface WaveDividerProps {
  variant: WaveVariant;
  flipColor?: boolean;
}

const IslamicCrescent = ({ cx, cy }: { cx: number; cy: number }) => (
  <g>
    {/* Base pole, extending down into the geometry (cy + 15) to avoid gaps at the peak */}
    <path 
      d={`M ${cx - 1},${cy - 12} L ${cx + 1},${cy - 12} L ${cx + 1},${cy + 15} L ${cx - 1},${cy + 15} Z`} 
      className={styles.wavePath}
    />
    {/* Symmetrical crescent, rotated perfectly from the tip of the pole */}
    <path 
      d={`M ${cx - 7},${cy - 24} C ${cx - 7},${cy - 0} ${cx + 7},${cy - 0} ${cx + 7},${cy - 24} C ${cx + 4},${cy - 8} ${cx - 4},${cy - 8} ${cx - 7},${cy - 24} Z`} 
      transform={`rotate(25 ${cx} ${cy - 12})`}
      className={styles.wavePath}
    />
  </g>
);

export default function WaveDivider({ variant, flipColor }: WaveDividerProps) {
  return (
    <div
      className={`${styles.wave} ${styles[variant]} ${flipColor ? styles.flipped : ""}`}
    >
      <svg
        viewBox={variant === "schedule-to-footer" ? "0 -25 1440 145" : "0 0 1440 120"}
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
          <>
            <path
              d="M0,120 L0,100 L142,100 L145,45 L141,45 L141,42 L146,42 L148,25 L150,10 L152,25 L154,42 L159,42 L159,45 L155,45 L158,100 L180,100 C180,85 240,85 240,100 L250,100 C250,85 310,85 310,100 L320,100 C320,85 380,85 380,100 L390,100 L394,30 L390,30 L390,27 L395,27 L396,15 L392,15 L392,12 L396.5,12 L398,8 L400,0 L402,8 L403.5,12 L408,12 L408,15 L404,15 L405,27 L410,27 L410,30 L406,30 L410,100 L440,100 C440,80 510,70 520,85 C520,55 590,45 600,60 C600,0 840,0 840,60 C850,45 920,55 920,85 C930,70 1000,80 1000,100 L1030,100 L1034,30 L1030,30 L1030,27 L1035,27 L1036,15 L1032,15 L1032,12 L1036.5,12 L1038,8 L1040,0 L1042,8 L1043.5,12 L1048,12 L1048,15 L1044,15 L1045,27 L1050,27 L1050,30 L1046,30 L1050,100 L1060,100 C1060,85 1120,85 1120,100 L1130,100 C1130,85 1190,85 1190,100 L1200,100 C1200,85 1260,85 1260,100 L1282,100 L1285,45 L1281,45 L1281,42 L1286,42 L1288,25 L1290,10 L1292,25 L1294,42 L1299,42 L1299,45 L1295,45 L1298,100 L1440,100 L1440,120 Z"
              className={styles.wavePath}
            />
            <IslamicCrescent cx={150} cy={10} />
            <IslamicCrescent cx={400} cy={0} />
            <IslamicCrescent cx={720} cy={16} />
            <IslamicCrescent cx={1040} cy={0} />
            <IslamicCrescent cx={1290} cy={10} />
          </>
        )}
      </svg>
    </div>
  );
}
