import Slider from "react-slick";
import "./Slider.css";
import { Link } from "react-router-dom";
const IndexSlider = ({ slides = [] }) => {
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
        {slides.map((slide, i) => (
          <div key={i} className="h-full">
            <Link to={slide.Link}>
              <img src={slide.ImgUrl} className="rounded-xl" alt="" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IndexSlider;
