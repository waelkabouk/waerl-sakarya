import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Dynamically import below-the-fold components to reduce initial bundle size
const ScheduleSection = dynamic(() => import("@/components/ScheduleSection"), { ssr: true });
const WaveDivider = dynamic(() => import("@/components/WaveDivider"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ScheduleSection />
        <WaveDivider variant="schedule-to-footer" />
        <Footer />
      </main>
    </>
  );
}
