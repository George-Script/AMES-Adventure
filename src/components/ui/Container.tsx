import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;

  size?: "default" | "wide" | "narrow";

  className?: string;
}

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  const widths = {
    narrow: "max-w-3xl",

    default: "max-w-[var(--container)]",

    wide: "max-w-[var(--container-wide)]",
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        px-6
        ${widths[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
