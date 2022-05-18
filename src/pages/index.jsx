import Banner from "../components/pages/index/Banner";
import Features from "../components/pages/index/Features";
import StartModal from "../components/pages/index/Modal";
import Slider from "../components/pages/index/Slider";
import Navbar from "../components/pages/index/Navbar";

const Index = () => {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <header className="bg-white">
        <Navbar />
      </header>
      <StartModal />
      <Slider />
      <Banner />
      <Features />
    </div>
  );
};

export default Index;
