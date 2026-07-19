import LandingPage from "./LandingPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div
      className="
        min-h-screen
        bg-canvas
        text-ink
        antialiased
        selection:bg-sky/20
      "
    >
      <Analytics />
      <LandingPage />
    </div>
  );
}
