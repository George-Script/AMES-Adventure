import { motion } from "framer-motion";

const timeline = [
  {
    time: "05:00",
    title: "Assembly & Departure",
    desc: "Registered students meet at UMaT. Tickets are ticked against the registration list before the coach pulls out.",
  },
  {
    time: "07:40",
    title: "Fort Metal Cross, Dixcove",
    desc: "First stop — about 2h from campus. Time to explore the fort, take in the ramparts view of Infuma, and get photos.",
  },
  {
    time: "10:00",
    title: "On The Road West",
    desc: "The longer leg — roughly 3 hours further west through the Western Region to the Jomoro District, where Mahaa Beach, Nzulezu and Venice View all sit within minutes of each other.",
  },
  {
    time: "12:30",
    title: "Mahaa Beach",
    desc: "Arrive at the Mahaa Beach for a refreshing break. Guests will have time to stretch, explore the beach surroundings, unwind, and enjoy a meal before the next leg of the trip.",
  },
  {
    time: "13:30",
    title: "Nzulezu Canoe Tour",
    desc: "A short drive to the Beyin visitor centre, then a canoe ride across Lake Tadane to the stilt village — weather and canoe availability permitting.",
  },
  {
    time: "15:30",
    title: "Vernice View Resort",
    desc: "Arrival at the resort beach. Free meal, beach volleyball, card and board games, with swimming and horse riding available for those who want it.",
  },
  {
    time: "17:30",
    title: "Return Journey Begins",
    desc: "Back on the coach for the ride home, retracing the route east through Dixcove and back to UMaT Campus.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="relative overflow-hidden bg-canvas py-32">
      <div className="absolute inset-0">
        <div className="absolute left-[20%] top-0 h-100 w-100 rounded-full bg-sky/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-ocean/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex rounded-full border border-ocean/10 bg-white/60 px-5 py-2">
            <span className="font-sora text-xs font-bold uppercase tracking-[0.35em] text-ocean">
              Estimated Schedule
            </span>
          </div>

          <h2 className="mt-8 font-display text-5xl font-black text-ink md:text-7xl">
            A Long Day,
            <span className="block bg-linear-to-r from-ocean via-sky to-sun bg-clip-text text-transparent">
              Fully Mapped Out.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-ink/65">
            The Jomoro cluster is roughly 4h45 from campus, so it's an early
            start and a late return. Times below are estimates based on typical
            road conditions and will shift with traffic.
          </p>
        </motion.div>

        <div className="relative mt-28">
          <div
            className="
              absolute
              left-5.5
              top-0
              bottom-0
              w-0.5
              bg-linear-to-b
              from-sky
              via-ocean
              to-sun
            "
          />

          <div className="space-y-10">
            {timeline.map((step, i) => (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative pl-20"
              >
                <div
                  className="
                    absolute
                    left-0
                    top-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    border
                    border-ocean/10
                    shadow-xl
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-ocean" />
                </div>

                <div
                  className="
                    rounded-4xl
                    border
                    border-white/60
                    bg-white/60
                    p-8
                    backdrop-blur-3xl
                    shadow-[0_20px_90px_rgba(15,76,129,.08)]
                    transition
                    hover:-translate-y-1
                  "
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div>
                      <div
                        className="
                          rounded-full
                          bg-ocean/6
                          px-5
                          py-3
                          font-display
                          text-2xl
                          font-black
                          text-ocean
                        "
                      >
                        {step.time}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display text-3xl font-bold text-ink">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-base leading-8 text-ink/65">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="
            mt-20
            rounded-4xl
            border
            border-ocean/10
            bg-linear-to-r
            from-ocean
            to-sky
            p-10
            text-center
            text-white
          "
        >
          <p className="font-sora text-xs font-bold uppercase tracking-[0.3em]">
            Built For Students
          </p>

          <h3 className="mt-4 font-display text-4xl font-black">
            Just Show Up.
          </h3>

          <p className="mt-4 text-white/80">
            Transport and coordination are already handled — expect to be back
            on campus late that night.
          </p>
        </div>
      </div>
    </section>
  );
}
