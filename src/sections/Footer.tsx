import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const calculateTime = () => {
    const target = +new Date("2026-08-08T05:00:00");
    const now = +new Date();

    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (value: number) => String(value).padStart(2, "0");

  const countdown = [
    { value: pad(time.days), label: "Days" },
    { value: pad(time.hours), label: "Hours" },
    { value: pad(time.minutes), label: "Minutes" },
    { value: pad(time.seconds), label: "Seconds" },
  ];

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[34rem] w-[34rem] rounded-full bg-ocean/20 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky/15 blur-[180px]" />
      </div>

      <div className="container-premium relative footer-section">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-8 md:p-12"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full bg-white/5 px-5 py-2">
              <span className="font-sora text-xs font-bold uppercase tracking-[0.35em] text-sky">
                AMES Adventure 2026
              </span>
            </div>

            <h2 className="mt-8 font-display text-4xl font-black leading-none md:text-6xl">
              Four Stops. One Coach.
              <span className="mt-2 block bg-linear-to-r from-sky via-white to-sand bg-clip-text text-transparent">
                One Unforgettable Day.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65">
              Register now, join the WhatsApp group, and secure your seat
              with the GHS 250 payment.
            </p>

            <button
              onClick={scrollToForm}
              className="
                transition-premium
                mt-10
                rounded-lg
                bg-sun
                px-10
                py-5
                font-sora
                text-base
                font-bold
                text-ink
                shadow-soft
                hover:-translate-y-1
              "
            >
              Register Now
            </button>
          </div>

          <div className="mt-content">
            <p className="text-center font-sora text-xs font-bold uppercase tracking-[0.35em] text-sky">
              Departure Countdown
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
              {countdown.map((item) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  key={item.label}
                  className="rounded-lg border border-white/8 bg-white/[0.03] p-8 text-center"
                >
                  <div className="font-display text-5xl font-black tabular-nums">
                    {item.value}
                  </div>

                  <div className="mt-3 font-sora text-[11px] uppercase tracking-[0.3em] text-white/40">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div
          className="
            mt-content
            flex
            flex-col
            gap-8
            border-t
            border-white/8
            pt-10
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3 className="font-display text-2xl font-black">AMES ADVENTURE</h3>

            <p className="mt-3 text-sm text-white/45">
              Organized by the Association of Mechanical Engineering
              Students, UMaT
            </p>

            <p className="mt-1 text-sm text-white/30">
              Site design by George Adusei
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="font-sora text-xs uppercase tracking-[0.3em] text-white/35">
              Enquiries
            </p>

            <div className="mt-3 space-y-2 text-sm text-white/65">
              <p>0500 906 879</p>
              <p>0595 697 832</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
