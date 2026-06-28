const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 p-1 flex items-center justify-center shadow-sm">
        <img src="/logo.png" alt="CM Education Hub" className="w-full h-full object-contain" />
      </div>

      <div className="leading-tight">
        <div className="text-lg font-bold text-primary">CM EDUCATION</div>
        <div className="text-xs font-medium text-accent">HUB</div>
      </div>
    </div>
  );
};

export default Logo;
