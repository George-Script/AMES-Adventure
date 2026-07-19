import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  id?: string;

  className?: string;

  atmosphere?: boolean;

  size?: "default" | "compact" | "hero";
}

export default function Section({
  children,
  id,
  className = "",
  atmosphere = false,
  size = "default",
}: SectionProps) {
  const spacing = {
    compact: "py-[var(--spacing-content)]",

    default: "py-[var(--spacing-section)]",

    hero: "min-h-screen",
  };

  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        bg-canvas
        ${spacing[size]}
        ${className}
      `}
    >
      {atmosphere && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-[32rem] w-[32rem] rounded-full bg-sky/10 blur-[180px]" />

          <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-ocean/10 blur-[180px]" />
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
