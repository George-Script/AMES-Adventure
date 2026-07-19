import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";

// Custom Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/mdaqgvjo";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LYMCb0MsMJWDsGyM3kIIeJ";

interface FormData {
  fullName: string;
  indexNumber: string;
  phoneNumber: string;
  email: string;
}

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    indexNumber: "",
    phoneNumber: "",
    email: "",
  });

  function update(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          event: "AMES Adventure 2026",
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[var(--radius-xl)] p-8 md:p-14"
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
                    Registration
                  </span>
                </div>

                <h2 className="mt-8 font-display text-5xl font-black md:text-6xl">
                  Register For AMES Adventure
                </h2>

                <p className="mt-5 text-base text-ink-60">
                  Estimated completion time: under 2 minutes
                </p>
              </div>

              <form onSubmit={submit} className="mt-14 space-y-5">
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
                  name="indexNumber"
                  value={formData.indexNumber}
                  onChange={update}
                  placeholder="Index Number"
                  className={input}
                />

                <input
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={update}
                  placeholder="Phone Number"
                  className={input}
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={update}
                  placeholder="Email"
                  className={input}
                />

                {error && (
                  <div
                    className="
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

                <button
                  disabled={loading}
                  className="
                    gradient-ocean
                    w-full
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
                  {loading ? "Submitting..." : "Register"}
                </button>

                <p className="text-center text-sm text-ink-40">
                  Your details are only used to coordinate the trip and are not
                  shared beyond the organizing team.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
