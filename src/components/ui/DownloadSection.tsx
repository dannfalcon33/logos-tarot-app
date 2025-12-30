import downloadBg from "../../assets/images/download-bg.png";
import { HOME_CONTENT } from "../../constants";

export const DownloadSection = () => {
  const { downloadSection } = HOME_CONTENT;

  if (!downloadSection) return null;

  return (
    <section
      className="py-32 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${downloadBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-6">
          {downloadSection.title}
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {downloadSection.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg active:scale-95 duration-200">
            {/* Simplified Apple Icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.96-.86 1.8.13 3.12.87 3.86 2.06-3.87 2.15-2.03 7.85 1.5 8.94-.4 1.15-.98 2.27-1.7 3.23-.96 1.25-2 2.62-2.7 2.87m-2.8-17c1.4-1.8 2.37-3.09 2.14-4.88-1.55.2-3.14 1.27-4 2.34-.87 1.05-1.57 2.66-1.23 4.41 1.48.16 3.01-.73 3.09-1.87" />
            </svg>
            <span>App Store</span>
          </button>
          <button className="flex items-center gap-3 bg-transparent border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors shadow-lg active:scale-95 duration-200">
            {/* Simplified Play Store Icon */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <span>Google Play</span>
          </button>
        </div>
      </div>
    </section>
  );
};
