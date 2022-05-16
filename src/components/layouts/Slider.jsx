import SlickSlider from "react-slick";
import SliderImage from "@/assets/images/slider.jpg";
import "./Slider.css";
const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="index-slider bg-white px-4 relative overflow-hidden">
      <SlickSlider {...settings}>
        {[...Array(5)].map((image, i) => (
          <div key={i} className="h-full">
            <img src={SliderImage} className="rounded-xl" alt="" />
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default Slider;
