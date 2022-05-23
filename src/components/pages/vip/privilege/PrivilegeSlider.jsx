import { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import "./Slider.css";

import vip_medal_vip1_nor from "@/assets/images/vip/vip_medal_vip1_nor.webp";
import vip_card_bg_nor from "@/assets/images/vip/vip_card_bg_nor.webp";

const PrivilegeSlider = () => {
  const btnContainerRef = useRef(null);
  const btnRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log(nav1, nav2);
  }, [nav1, nav2, activeSlide]);

  const handleSlideChange = (i) => {
    if (i == activeSlide) {
      setTranslateX(translateX);
    } else if (i < 3) {
      setTranslateX(0);
    } else if (i > 6) {
      setTranslateX(
        (btnRef.current.clientWidth - btnContainerRef.current.clientWidth) * -1
      );
    } else {
      if (i > activeSlide) {
        if (i == 3) {
          setTranslateX(-70);
        }
        if (i == 4) {
          setTranslateX(-140);
        }
        if (i == 5) {
          setTranslateX(-210);
        }
        if (i == 6) {
          setTranslateX(-280);
        }
      } else {
        setTranslateX(translateX + 70);
      }
    }
    nav1.slickGoTo(i);
    setActiveSlide(i);
  };
  return (
    <div className="bg-white py-3">
      {/* button */}
      <div className="mx-3">
        <div
          className="max-w-[500px] mx-auto relative overflow-hidden"
          ref={btnContainerRef}
        >
          <div className="absolute z-0 inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 bg-[#d3d5e0]"></div>
          </div>
          <div
            className="flex justify-between relative z-10 min-w-max space-x-12 my-4 transform transition-all duration-200"
            ref={btnRef}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {[...Array(10)].map((btn, i) => (
              <div
                onClick={() => handleSlideChange(i)}
                className={`bg-[#d3d5e0] border-[3px] border-[#d3d5e0] py-0.5 px-2 text-xs rounded-full cursor-pointer ${
                  activeSlide == i ? "!bg-primary text-white" : ""
                }`}
              >
                Lv{i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings}>
        {[...Array(10)].map((image, i) => (
          <div key={i} className="h-full">
            <div className="mx-3">
              <div className="max-w-[500px] mx-auto relative text-xs text-white">
                <img src={vip_card_bg_nor} className="w-full" alt="" />
                <div className="absolute inset-0 flex justify-between px-3">
                  <div className="flex flex-col items-center justify-between py-3">
                    <div className="text-2xl font-bold py-3 px-2">
                      VIP{i + 1}
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-sm font-medium">7,200,00</span>
                      <span className="text-light">流水要求</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-between pb-3">
                    <div>
                      <img src={vip_medal_vip1_nor} className="w-20" alt="" />
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-sm font-medium">1,800,00</span>
                      <span className="text-light">流水要求</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex items-center justify-end mx-3 text-xs pt-2 px-2">
        {activeSlide + 1}/ <span className="text-light">10</span>
      </div>
    </div>
  );
};

export default PrivilegeSlider;
