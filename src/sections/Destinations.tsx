import { motion } from "framer-motion";

import Fort from "../assets/fort-metal-cross.jpeg";
import Mahaa from "../assets/maaha-beach.jpeg";
import Nzulezu from "../assets/nzulezu2.jpeg";
import VeniceView from "../assets/Vernice View Resort2.jpeg";
import SectionHeader from "../components/ui/SectionHeader";

const destinations = [
  {
    number: "01",
    label: "Historical Stop",
    title: "Fort Metal Cross",
    image: Fort,
    description:
      "A British-built coastal fort dating to 1683, perched on a promontory overlooking the fishing community of Infuma in Dixcove. It has been a UNESCO World Heritage Site since 1979, with panoramic Atlantic views from the ramparts.",
  },
  {
    number: "02",
    label: "Beach & Leisure",
    title: "Mahaa Beach",
    image: Mahaa,
    description:
      "A relaxing stop along the journey where the group can stretch their legs, enjoy the ocean breeze, purchase food and drinks, and take a short break before continuing to the day's main destination.",
  },
  {
    number: "03",
    label: "UNESCO Tentative Site",
    title: "Nzulezu",
    image: Nzulezu,
    description:
      "A centuries-old stilt village built entirely over Lake Tadane near Beyin, reached by a short canoe ride through the Amansuri wetland. Home to several hundred residents living on water.",
  },
  {
    number: "04",
    label: "The Main Experience",
    title: "Venice View",
    image: VeniceView,
    description:
      "A private beach resort with a pool, loungers, and stunning ocean views—where the group enjoys beach volleyball, mini golf, board games, an included meal, and time to relax before the journey back to campus.",
  },
];

const activities = [
  "Beach Volleyball",
  "Mini Golf",
  "Board & Card Games",
  "Swimming (Pay if Interested)",
  "Horse Riding (Pay if Interested)",
  "More Surprises",
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="section relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-primary-soft/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            top-[40%]
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div className="container-premium relative">
        <SectionHeader
          badge="The Route"
          title={
            <>
              Four Stops.
              <span className="block text-gradient">One Coastline.</span>
            </>
          }
          subtitle="Fort Metal Cross sits on its own, roughly two hours out. Mahaa Beach, Nzulezu and Venice View are clustered together, minutes apart, in the far west of the Western Region."
        />

        <div className="space-y-[6rem] py-14">
          {destinations.map((place, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.div
                key={place.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`
                  grid
                  items-center
                  gap-16
                  lg:grid-cols-2
                  ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                <div className="relative">
                  <div className="glass rounded-[var(--radius-xl)] p-4">
                    <div className="overflow-hidden rounded-[calc(var(--radius-xl)-0.75rem)]">
                      {place.image ? (
                        <img
                          src={place.image}
                          alt={place.title}
                          className="
                            h-[32rem]
                            w-full
                            object-cover
                            transition-premium
                            hover:scale-[1.04]
                          "
                        />
                      ) : (
                        <div
                          className="
                            gradient-ocean
                            flex
                            h-[32rem]
                            w-full
                            flex-col
                            items-center
                            justify-center
                            gap-4
                            text-white
                          "
                        >
                          <span className="text-7xl">🏰</span>
                          <span className="font-sora text-sm font-semibold uppercase tracking-[0.3em]">
                            Dixcove, Western Region
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      rounded-[var(--radius-lg)]
                      bg-surface
                      px-6
                      py-4
                      shadow-soft
                    "
                  >
                    <p className="font-display text-4xl font-black text-primary">
                      {place.number}
                    </p>
                    <p className="text-sm text-text-muted">Stop</p>
                  </div>
                </div>

                <div>
                  <div className="inline-flex rounded-full bg-primary/5 px-4 py-2">
                    <span className="font-sora text-xs font-bold uppercase tracking-[0.3em] text-primary">
                      {place.label}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-5xl font-black text-text">
                    {place.title}
                  </h3>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-text-muted">
                    {place.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            glass
            mt-(--spacing-section)
            rounded-[var(--radius-xl)]
            p-10
            text-center
          "
        >
          <p className="font-sora text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Activities
          </p>

          <h3 className="mt-5 font-display text-5xl font-black text-text">
            More Than A Fun Trip
          </h3>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {activities.map((item) => (
              <div
                key={item}
                className="
                  card-premium
                  transition-premium
                  px-6
                  py-4
                  hover:-translate-y-1
                "
              >
                <span className="font-sora font-semibold text-text">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
