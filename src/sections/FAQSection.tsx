import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";

const faqs = [
  {
    question: "What does the GHS 250 cover?",
    answer:
      "Coach transport from UMaT to all four stops and back, a free meal, and included activities — beach volleyball, mini golf and board games.",
  },
  {
    question: "Are swimming and horse riding included?",
    answer:
      "No — they're available on-site at Mahaa Beach and Venice View, but you pay for them separately if you're interested.",
  },
  {
    question: "How do I confirm my seat?",
    answer:
      "Fill the registration form, join the WhatsApp group, then pay GHS 250 through the organizers to lock in your seat. Registration alone doesn't guarantee a spot.",
  },
  {
    question: "What time do we leave and return?",
    answer:
      "The coach departs UMaT at 5:00 AM on 8th August 2026. It's a long day — expect a late-night return given the distance to the Jomoro District.",
  },
  {
    question: "Do we definitely visit Nzulezu?",
    answer:
      "Nzulezu is reached by canoe from the Beyin visitor centre, so the visit depends on canoe availability and conditions on the day.",
  },
  {
    question: "Who do I contact with questions?",
    answer: "Reach the organizers on 0500906879 or 0595697832.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-sky/10 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ocean/10 blur-[180px]" />
      </div>

      <div className="container-premium relative">
        <SectionHeader
          badge="Good To Know"
          title={
            <>
              Questions.
              <span className="block text-gradient">Answered Clearly.</span>
            </>
          }
          subtitle="Everything worth knowing before you register."
        />

        <div className="mt-content mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                layout
                key={faq.question}
                className="card-premium overflow-hidden border border-ink/5"
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  className="
                    flex
                    w-full
                    items-start
                    justify-between
                    gap-6
                    p-card
                    text-left
                  "
                >
                  <div>
                    <div className="mb-4 inline-flex rounded-full bg-ocean/5 px-3 py-1">
                      <span className="font-sora text-[11px] font-bold text-ocean">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-ink">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: active ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-ocean/5
                      text-3xl
                      text-ocean
                    "
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <div className="px-card pb-card">
                        <div className="border-t border-ink/5 pt-6">
                          <p className="max-w-3xl text-base leading-8 text-ink-60">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-content
            rounded-xl
            gradient-ocean
            p-10
            text-center
            text-white
            shadow-floating
          "
        >
          <p className="font-sora text-xs font-bold uppercase tracking-[0.35em]">
            Final Reminder
          </p>

          <h3 className="mt-5 font-display text-3xl font-black md:text-4xl">
            Register Early. Seats Are Limited.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            The coach only has so many seats — register and pay early to
            guarantee your spot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
