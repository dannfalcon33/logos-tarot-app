import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      x: "0%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-opacity-10 backdrop-blur-md border-white/10">
        <Link to="/" className="text-2xl font-bold tracking-widest uppercase">
          <span className="text-gold-gradient">Logos Tarot</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="z-50 p-2 text-white hover:text-yellow-400 transition-colors"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/80 z-40"
            />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-[80%] md:w-[35%] bg-[#0B0B1E]/95 border-l border-white/10 z-50 flex flex-col items-center justify-center space-y-8 backdrop-blur-xl"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className="text-2xl md:text-4xl text-white font-light hover:text-[#FFD700] hover:scale-110 transition-all duration-300 tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
