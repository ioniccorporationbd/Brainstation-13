import Banner from "@/components/Banner";
import ConnectVideoBanner from "@/components/HomeConnectionsVideoBanner";
import MiddleSection from "@/components/MiddleSection";
import RightSidebar from "@/components/RightSidebar";

export default function Page() {
  return (
    <>
      {/* Intro banner */}
      <Banner />

      {/* Video section */}
      <ConnectVideoBanner />

      {/* After video section: middle content + right sticky sidebar */}
      <section
        id="home-connections-content"
        className="relative grid min-h-[220vh] grid-cols-1 bg-white lg:grid-cols-[minmax(0,1fr)_520px]"
      >
        {/* Left / middle section */}
        <div className="min-w-0">
          <MiddleSection />
        </div>

        {/* Right sticky sidebar */}
        <aside className="hidden min-h-full border-l border-slate-200 bg-white lg:block">
          <div className="sticky top-0 h-screen overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <RightSidebar />
          </div>
        </aside>
      </section>
    </>
  );
}