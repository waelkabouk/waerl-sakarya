import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaveDivider from "@/components/WaveDivider";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";

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
