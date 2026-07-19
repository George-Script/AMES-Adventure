import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";

const steps = [
  {
    id: "01",
    title: "Fill The Form",
    desc: "Share your name, index number, phone number and email. Takes under 2 minutes.",
    badge: "2 Minutes",
  },
  {
    id: "02",
    title: "Join The WhatsApp Group",
    desc: "You'll get a direct link straight after submitting, for updates and coordination before the trip.",
    badge: "Instant",
  },
  {
    id: "03",
    title: "Secure Your Seat",
    desc: "Pay GHS 250 to confirm your place — reach the organizers on the contact numbers below for payment details.",
    badge: "GHS 250",
  },
  {
    id: "04",
    title: "Show Up On 8th August",
    desc: "Be at the assembly point at UMaT by 5:00 AM. The coach departs sharp.",
    badge: "5:00 AM",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[10%]
            top-0
            h-[28rem]
            w-[28rem]
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
            h-[24rem]
            w-[24rem]
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />
      </div>

      <div className="container-premium relative">
        <SectionHeader
          badge="Getting On The Bus"
          title={
            <>
              Register.
              <span className="block text-gradient">Show Up.</span>
            </>
          }
          subtitle="Four simple steps between reading this page and being on the coach."
        />

        <div className="relative mt-(--spacing-content)">
          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[6.25rem]
              hidden
              h-px
              bg-linear-to-r
              from-primary-soft
              via-primary
              to-sun
              lg:block
            "
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="card-premium transition-premium relative p-8"
              >
                <div
                  className="
                    gradient-ocean
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    shadow-soft
                  "
                >
                  <span className="font-display text-3xl font-black text-white">
                    {step.id}
                  </span>
                </div>

                <div className="mt-6 inline-flex rounded-full bg-primary/5 px-4 py-2">
                  <span className="font-sora text-xs font-bold text-primary">
                    {step.badge}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-3xl font-black text-text">
                  {step.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-text-muted">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            gradient-ocean
            mt-(--spacing-content)
            overflow-hidden
            rounded-[var(--radius-xl)]
            p-10
            text-white
            shadow-floating
          "
        >
          <div className="section-heading">
            <div className="inline-flex rounded-full bg-white/10 px-5 py-2">
              <span className="font-sora text-xs font-bold uppercase tracking-[0.35em]">
                Seats Are Limited
              </span>
            </div>

            <h3 className="mt-8 font-display text-4xl font-black">
              Registration Is First Come, First Served
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Your form entry gets you into the WhatsApp group and the
              attendee list. Your seat is only confirmed once payment is
              received.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
