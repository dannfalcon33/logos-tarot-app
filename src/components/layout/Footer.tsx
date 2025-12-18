import { Link } from "react-router-dom";
import { NAV_ITEMS, FOOTER_CONTENT } from "../../constants";

export const Footer = () => {
  return (
    <footer className="bg-[#0B0B1E] border-t border-white/10 py-8 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h3 className="text-gold-gradient text-xl font-bold tracking-widest uppercase">
          {FOOTER_CONTENT.title}
        </h3>
        <div className="flex gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <p className="text-gray-400 text-sm">{FOOTER_CONTENT.copyright}</p>
      </div>
    </footer>
  );
};
