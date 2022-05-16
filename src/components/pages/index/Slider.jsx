import Slider from "react-slick";
import SliderImage from "@/assets/images/slider.jpg";
import "./Slider.css";
const IndexSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="index-slider bg-white px-4 relative overflow-hidden">
      <Slider {...settings}>
        {[...Array(5)].map((image, i) => (
          <div key={i} className="h-full">
            <img src={SliderImage} className="rounded-xl" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IndexSlider;
