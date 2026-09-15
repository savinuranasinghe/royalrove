"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceCount({ target = 15, suffix = "+", label = "15 plus" }: { target?: number; suffix?: string; label?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(target);

  useEffect(() => {
    const node = ref.current;
    const section = node?.closest<HTMLElement>(".travelers");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || !section) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) {
        setCount(target);
        return;
      }
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Follow the same pinned scroll span as the section's existing motion.
      const distance = Math.max(rect.height - viewport, viewport * .5);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      setCount(Math.round(1 + (target - 1) * progress));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, [target]);

  return <span ref={ref} aria-label={label}><span aria-hidden="true">{count}{suffix}</span></span>;
}
