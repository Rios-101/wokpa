import Dashboard from "./_component/Dashboard";
import MenuSection from "./_component/MenuSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#212121] lg:flex ">
      <MenuSection />
      {/* <div className="border-l border-gray-300"></div>{" "} */}
      {/* Vertical dividing line */}
      <Dashboard />
    </div>
  );
}
