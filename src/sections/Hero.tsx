import { motion } from "framer-motion";
import Flier from "../assets/flier.jpeg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const trustItems = [
    "Executive Coach",
    "Free Meal Included",
    "4 Coastal Stops",
  ];

  return (
    <section className="hero-section relative overflow-hidden bg-background">
      {/* ATMOSPHERE */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-primary-soft/15 via-background to-background" />

        <div
          className="
            absolute
            left-1/2
            top-[8%]
            h-[42rem]
            w-[42rem]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <motion.div
          animate={{ y: [-16, 18, -16] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="
            absolute
            left-24
            top-48
            h-[24rem]
            w-[24rem]
            rounded-full
            bg-primary-soft/10
            blur-3xl
          "
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="
            absolute
            right-[6%]
            bottom-10
            hidden
            text-[16rem]
            leading-none
            text-accent/5
            lg:block
          "
        >
          ⚙
        </motion.div>
      </div>

      <div className="container-premium relative z-10">
        <div className="grid min-h-screen items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass inline-flex rounded-full px-5 py-2">
              <span className="font-sora text-xs font-bold uppercase tracking-[0.35em] text-ocean">
                AMES · Association of Mechanical Engineering Students
              </span>
            </div>

            <h1 className="mt-8 font-display text-6xl leading-[0.92] font-black tracking-tight text-text md:text-[5.5rem]">
              AMES Adventure
              <span className="text-gradient block">
                Engineered For The Coast
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
              A one-day coastal trip to Fort Metal Cross, Mahaa Beach, Nzulezu
              and Venice View.
              <span className="mt-4 block font-semibold text-text">
                Transport and a free meal included · GHS 250 per person.
              </span>
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("registration-form")}
                className="
                  transition-premium
                  rounded-[var(--radius-lg)]
                  bg-accent
                  px-8
                  py-5
                  font-sora
                  text-lg
                  font-bold
                  text-text
                  shadow-floating
                  hover:-translate-y-1
                "
              >
                Register Now
              </button>

              <button
                onClick={() => scrollTo("destinations")}
                className="
                  glass
                  transition-premium
                  rounded-[var(--radius-lg)]
                  px-8
                  py-5
                  font-sora
                  font-semibold
                  text-text
                  hover:scale-[1.01]
                "
              >
                See The Route
              </button>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <div key={item} className="glass rounded-full px-5 py-3">
                  <span className="font-sora text-sm font-semibold text-primary">
                    ✓ {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="glass p-8 rounded-[var(--radius-xl)]">
              <div className="overflow-hidden rounded-[var(--radius-lg)]">
                <img
                  src={Flier}
                  alt="Adventure Flier"
                  className="
                    h-[42rem]
                    w-full
                    object-cover
                    transition-premium
                    hover:scale-[1.03]
                  "
                />
              </div>
            </div>

            <div
              className="
                surface-premium
                absolute
                -left-8
                top-10
                px-6
                py-5
              "
            >
              <p className="font-display text-5xl font-black text-primary">4</p>
              <p className="mt-1 text-sm text-text-muted">Destinations</p>
            </div>

            <div
              className="
                absolute
                -right-8
                bottom-12
                rounded-[var(--radius-lg)]
                bg-primary
                px-8
                py-6
                text-white
                shadow-floating
              "
            >
              <p className="font-display text-3xl font-black">GHS 250</p>
              <p className="mt-1 text-sm text-white/75">8th August 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
