import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;

  title: ReactNode;

  subtitle?: string;

  centered?: boolean;

  maxWidth?: string;

  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  maxWidth = "max-w-4xl",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className={`
        ${centered ? "text-center mx-auto" : ""}
        ${maxWidth}
        ${className}
      `}
    >
      {badge && (
        <div className="glass inline-flex rounded-full px-5 py-2">
          <span className="font-sora text-xs font-bold uppercase tracking-[0.35em] text-ocean">
            {badge}
          </span>
        </div>
      )}

      <h2 className="mt-8 font-display text-5xl font-black leading-none md:text-7xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-ink-60">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
