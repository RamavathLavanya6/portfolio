'use client';

export default function Footer() {
  return (
    <footer className="py-8 px-[clamp(1.4rem,4vw,4rem)] bg-ink-2 border-t border-gold/5 text-center">
      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">
        &copy; {new Date().getFullYear()} Lavanya Ramavath. Designed & Built with Precision.
      </p>
    </footer>
  );
}
