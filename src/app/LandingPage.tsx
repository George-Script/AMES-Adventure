import Hero from "../sections/Hero";
import TrustStrip from "../sections/TrustStrip";
import Destinations from "../sections/Destinations";
import ExperienceTimeline from "../sections/ExperienceTimeline";
import HowItWorks from "../sections/HowItWorks";
import RegistrationForm from "../sections/RegistrationForm";
import FAQSection from "../sections/FAQSection";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <main>
        <TrustStrip />

        <Destinations />

        <ExperienceTimeline />

        <HowItWorks />

        <RegistrationForm />

        <FAQSection />
      </main>

      <Footer />
    </>
  );
}
