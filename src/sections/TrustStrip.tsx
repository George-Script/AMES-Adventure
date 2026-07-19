import { motion } from "framer-motion";

const items = [
  {
    icon: "🚌",
    title: "Executive Coach",
    desc: "Transport from UMaT to the Western Region coast and back.",
  },
  {
    icon: "🍽",
    title: "Free Meal",
    desc: "A meal is included in your GHS 250 registration.",
  },
  {
    icon: "🐎",
    title: "Optional Add-ons",
    desc: "Swimming and horse riding are available on-site — pay if interested.",
  },
  {
    icon: "⚙",
    title: "GHS 250 Per Person",
    desc: "One flat rate covers transport, meal and included activities.",
  },
];

export default function TrustStrip() {
  return (
    <section className="section relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div
          className="
            absolute
            left-0
            top-0
            h-[24rem]
            w-[24rem]
            rounded-full
            bg-primary-soft/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[22rem]
            w-[22rem]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div className="container-premium relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass overflow-hidden rounded-[var(--radius-xl)]"
        >
          <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-primary-soft/8" />

          <div className="relative">
            <div className="section-heading px-8 pt-12">
              <div
                className="
                  inline-flex
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/5
                  px-4
                  py-2
                "
              >
                <span className="font-sora text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                  What's Covered
                </span>
              </div>

              <h2 className="mt-6 font-display text-4xl font-black tracking-tight text-text md:text-6xl">
                One Flat Rate.
                <span className="text-gradient block">Nothing Hidden.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-(--container-reading) text-base leading-8 text-text-muted md:text-lg">
                GHS 250 covers everything you need for the day — anything extra
                is entirely optional.
              </p>
            </div>

            <div
              className="
                mt-14
                flex
                gap-5
                overflow-x-auto
                px-6
                pb-10
                lg:grid
                lg:grid-cols-5
                lg:overflow-visible
              "
            >
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="
                      card-premium
                      transition-premium
                      relative
                      min-w-[18rem]
                      p-6
                    "
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-soft to-transparent" />

                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{item.icon}</div>

                    <div className="rounded-full bg-primary/5 px-3 py-1">
                      <span className="font-sora text-xs font-bold text-primary">
                        Included
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-bold text-text">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-muted">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-line px-8 py-10">
              <div className="section-heading">
                <p className="text-sm leading-7 text-text-muted">
                  Registration is first come, first served — seats are limited
                  to the coach's capacity.
                </p>

                <p className="mt-3 font-sora text-lg font-semibold text-primary">
                  GHS 250 secures your seat, meal and included activities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
