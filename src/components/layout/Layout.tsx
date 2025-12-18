import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1E] text-white font-sans selection:bg-[#FFD700] selection:text-black">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
