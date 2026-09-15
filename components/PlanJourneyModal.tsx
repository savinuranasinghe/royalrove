"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import "./PlanJourneyModal.css";

const destinations = ["Not sure yet", "Sri Lanka", "Maldives", "Singapore", "Malaysia", "Thailand", "Turkey", "Dubai"];

export default function PlanJourneyModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [context, setContext] = useState("Your journey");
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-plan-popup]");
      if (!target) return;
      event.preventDefault();
      trigger.current = target;
      setContext(target.dataset.planContext || "Your journey");
      setSent(false);
      setOpen(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>("button, input, select, textarea, [href]"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    window.setTimeout(() => trigger.current?.focus(), 0);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (!open) return null;

  return (
    <div className="plan-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div ref={dialog} className="plan-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="plan-modal-title" aria-describedby="plan-modal-description">
        <button ref={closeButton} className="plan-modal__close" type="button" onClick={close} aria-label="Close planning form">×</button>
        <div className="plan-modal__aside" aria-hidden="true">
          <p>Royal Rove</p>
          <span>Personal journeys.<br />Meaningful stories.</span>
        </div>
        <div className="plan-modal__content">
          <p className="plan-modal__eyebrow">{context}</p>
          <h2 id="plan-modal-title">Let’s shape<br />your journey.</h2>
          <p id="plan-modal-description">Tell us a little about your plans. We’ll help bring the details together.</p>
          {sent ? (
            <div className="plan-modal__success" role="status">
              <span aria-hidden="true">✓</span>
              <h3>Thank you.</h3>
              <p>Your journey request has been received. Royal Rove will be in touch soon.</p>
              <button type="button" onClick={close}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label><span>Your name</span><input name="name" autoComplete="name" required /></label>
              <label><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label>
              <label><span>Where would you like to go?</span><select name="destination" defaultValue="Not sure yet">{destinations.map(destination => <option key={destination}>{destination}</option>)}</select></label>
              <label className="plan-modal__message"><span>Tell us what you have in mind</span><textarea name="message" rows={3} required /></label>
              <label className="plan-modal__consent"><input type="checkbox" required /><span>I agree that Royal Rove may use these details to respond to my enquiry.</span></label>
              <button className="plan-modal__submit" type="submit">Send enquiry <span aria-hidden="true">⟶</span></button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
