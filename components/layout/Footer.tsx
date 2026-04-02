export function Footer() {
  return (
    <footer className="border-t border-slate-700 py-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-foreground tracking-tighter text-lg">
          ADS OF STUPID
        </span>
        <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Ads of Stupid. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {/* TODO: Replace # with real social links */}
          {["Instagram", "TikTok", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono text-xs text-foreground/40 hover:text-acid uppercase tracking-widest transition-colors duration-200"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
