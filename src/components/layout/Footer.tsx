export const Footer = () => {
  return (
    <footer className="bg-[#0B0B1E] border-t border-white/10 py-8 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-gold-gradient text-xl font-bold tracking-widest uppercase">
          Logos Tarot
        </h3>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Logos Tarot. All mysteries revealed.
        </p>
      </div>
    </footer>
  );
};
