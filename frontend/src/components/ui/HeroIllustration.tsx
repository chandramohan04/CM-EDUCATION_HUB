const HeroIllustration = ({ className }: { className?: string }) => {
  return (
    <div className={className} aria-hidden>
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/40">
        <img
          src="/hero-bg.svg"
          alt="CM Education Hub hero background"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroIllustration;
