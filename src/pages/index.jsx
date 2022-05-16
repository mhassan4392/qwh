import Banner from "../components/layouts/Banner";
import Features from "../components/layouts/Features";
import StartModal from "../components/layouts/Modal";
import Slider from "../components/layouts/Slider";

const Index = () => {
  return (
    <div>
      <StartModal />
      <Slider />
      <Banner />
      <Features />
    </div>
  );
};

export default Index;
