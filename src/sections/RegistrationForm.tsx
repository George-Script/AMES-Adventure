import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

interface FormData {
  fullName: string;
  whatsappNumber: string;
  email: string;
  department: string;
  otherProgramme: string;
  level: string;
  reason: string;
}

const totalSteps = 3;

const progressTitles = ["Personal", "Academic", "Motivation"];

const departments = ["Mechanical Engineering", "Other"];

const levels = ["Level 100", "Level 200", "Level 300", "Level 400"];

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LYMCb0MsMJWDsGyM3kIIeJ";

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatsappNumber: "",
    email: "",
    department: departments[0],
    otherProgramme: "",
    level: levels[0],
    reason: "",
  });

  function update(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, totalSteps));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    if (step < totalSteps) {
      next();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/mwvgbepg", {
        method: "POST",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          programme:
            formData.department === "Other" && formData.otherProgramme.trim()
              ? formData.otherProgramme
              : formData.department,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitted(true);
    } catch {
      setError("Submission failed. Check your connection and retry.");
    } finally {
      setLoading(false);
    }
  }

  const input = `
    w-full
    rounded-[var(--radius-md)]
    border
    border-ink-20
    bg-surface
    px-5
    py-4
    text-base
    text-ink
    outline-none
    transition-premium
    focus:border-ocean
    focus:ring-4
    focus:ring-sky/10
  `;

  return (
    <Section id="registration-form" atmosphere>
      <Container size="narrow">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            glass
            rounded-[var(--radius-xl)]
            p-8
            md:p-14
          "
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div
                className="
                  gradient-ocean
                  mx-auto
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  text-4xl
                  text-white
                  shadow-floating
                "
              >
                ✓
              </div>

              <h2 className="mt-10 font-display text-5xl font-black">
                You're On The List
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-60">
                Your details have been recorded. Join the WhatsApp group below
                for updates, then reach the organizers to complete your GHS 250
                payment and confirm your seat.
              </p>

              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  transition-premium
                  mt-10
                  inline-flex
                  items-center
                  gap-3
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
                Join The WhatsApp Group
              </a>
            </div>
          ) : (
            <>
              <div className="text-center">
                <div className="glass inline-flex rounded-full px-5 py-2">
                  <span className="font-sora text-xs font-bold uppercase tracking-[0.35em] text-ocean">
                    Limited Selection
                  </span>
                </div>

                <h2 className="mt-8 font-display text-5xl font-black md:text-6xl">
                  Apply for the AMES Adventure
                </h2>

                <p className="mt-5 text-base text-ink-60">
                  Estimated completion time: under 2 minutes
                </p>
              </div>

              <div className="mt-14">
                <div className="flex justify-between">
                  {progressTitles.map((item, index) => (
                    <div key={item} className="text-center">
                      <div
                        className={`
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          font-sora
                          font-bold
                          transition-premium
                          ${
                            step >= index + 1
                              ? "gradient-ocean text-white"
                              : "bg-surface-soft text-ink-60"
                          }
                        `}
                      >
                        {index + 1}
                      </div>

                      <p className="mt-3 text-xs font-semibold text-ink-60">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-surface-soft">
                  <motion.div
                    animate={{
                      width: `${(step / totalSteps) * 100}%`,
                    }}
                    className="gradient-ocean h-full"
                  />
                </div>
              </div>

              <form onSubmit={submit} className="mt-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -20,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {step === 1 && (
                      <div className="space-y-5">
                        <input
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={update}
                          placeholder="Full Name"
                          className={input}
                        />

                        <input
                          required
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={update}
                          placeholder="WhatsApp Number"
                          className={input}
                        />

                        <input
                          name="email"
                          value={formData.email}
                          onChange={update}
                          placeholder="Email (Optional)"
                          className={input}
                        />
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <select
                          name="department"
                          value={formData.department}
                          onChange={update}
                          className={input}
                        >
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>

                        {formData.department === "Other" && (
                          <input
                            type="text"
                            name="otherProgramme"
                            value={formData.otherProgramme}
                            onChange={update}
                            placeholder="Enter your programme (Optional)"
                            className={input}
                          />
                        )}

                        <select
                          name="level"
                          value={formData.level}
                          onChange={update}
                          className={input}
                        >
                          {levels.map((lvl) => (
                            <option key={lvl} value={lvl}>
                              {lvl}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {step === 3 && (
                      <>
                        <textarea
                          rows={6}
                          name="reason"
                          value={formData.reason}
                          onChange={update}
                          placeholder="What are your expectations for this Adventure?"
                          className={`${input} resize-none`}
                        />

                        <p className="mt-4 text-sm text-ink-40">
                          Your response helps us plan this adventure with you.
                        </p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {error && (
                  <div
                    className="
                      mt-6
                      rounded-[var(--radius-md)]
                      border
                      border-danger/20
                      bg-danger/5
                      p-4
                      text-danger
                    "
                  >
                    {error}
                  </div>
                )}

                <div className="mt-10 flex gap-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={back}
                      className="
                        rounded-[var(--radius-md)]
                        border
                        border-ink-20
                        px-8
                        transition-premium
                        hover:bg-surface-soft
                      "
                    >
                      Back
                    </button>
                  )}

                  <button
                    disabled={loading}
                    className="
                      gradient-ocean
                      flex-1
                      rounded-[var(--radius-md)]
                      px-8
                      py-5
                      font-sora
                      font-bold
                      text-white
                      shadow-card
                      transition-premium
                      disabled:opacity-50
                    "
                  >
                    {loading
                      ? "Submitting..."
                      : step === totalSteps
                        ? "Submit Application"
                        : "Continue"}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
