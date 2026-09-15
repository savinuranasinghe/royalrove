"use client";

import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero");
    const journal = document.querySelector<HTMLElement>(".journal");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
    let media = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    let journalProgress = 0;

    const render = () => {
      frame = 0;
      const viewport = window.innerHeight;

      if (hero) {
        const progress = clamp(window.scrollY / Math.max(hero.offsetHeight, 1));
        hero.style.setProperty("--hero-progress", progress.toFixed(4));
      }

      if (journal) {
        const rect = journal.getBoundingClientRect();
        const target = clamp((viewport * 0.85 - rect.top) / (viewport * 0.7));
        journalProgress += (target - journalProgress) * 0.14;
        if (Math.abs(target - journalProgress) < 0.001) journalProgress = target;
        journal.style.setProperty("--journal-progress", journalProgress.toFixed(4));
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = clamp((viewport - rect.top) / (viewport + rect.height));
        const focus = clamp((progress - 0.12) / 0.42);
        const enter = clamp((viewport - rect.top) / (viewport * 0.72));
        const background = clamp((viewport * 0.5 - rect.top) / (viewport * 0.5));
        const pinDistance = Math.max(rect.height - viewport, viewport * 0.5);
        const pin = clamp(-rect.top / pinDistance);
        const center = clamp((viewport / 2 - (rect.top + rect.height / 2)) / viewport, -1.5, 1.5);
        section.style.setProperty("--section-progress", progress.toFixed(4));
        section.style.setProperty("--section-focus", focus.toFixed(4));
        section.style.setProperty("--section-enter", enter.toFixed(4));
        section.style.setProperty("--section-bg", background.toFixed(4));
        section.style.setProperty("--section-pin", pin.toFixed(4));
        section.style.setProperty("--section-center", center.toFixed(4));
      });

      media.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -viewport || rect.top > viewport * 2) return;
        const speed = Number(item.dataset.parallax || 45);
        const distance = (viewport / 2 - (rect.top + rect.height / 2)) / viewport;
        item.style.setProperty("--parallax-y", `${(clamp(distance, -1.25, 1.25) * speed).toFixed(2)}px`);
      });

      if (journal) {
        const rect = journal.getBoundingClientRect();
        const target = clamp((viewport * 0.85 - rect.top) / (viewport * 0.7));
        if (Math.abs(target - journalProgress) >= 0.001) schedule();
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const mutationObserver = new MutationObserver(() => {
      media = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
      schedule();
    });

    const onPointerMove = (event: PointerEvent) => {
      if (!hero || window.scrollY > hero.offsetHeight) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      hero.style.setProperty("--pointer-x", x.toFixed(3));
      hero.style.setProperty("--pointer-y", y.toFixed(3));
    };

    root.classList.add("motion-ready");
    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      root.classList.remove("motion-ready");
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", onPointerMove);
      mutationObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
