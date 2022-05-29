import { useState, useEffect } from "react";
import Modal from "@/components/modal/Modal";
import { BsX } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const StartModal = ({ ads }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: (i) => {
      setActiveSlide(i);
    },
  };
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setTimeout(() => setModal(true), 2000);
  }, []);
  return (
    <div>
      <Modal
        open={modal}
        containerClass="bg-black bg-opacity-50"
        className="overflow-visible"
        onOutsideClick={() => setModal(false)}
      >
        <Modal.Header className="bg-gradient-to-r from-red-300 to-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <h2>Lorem ipsum dolor sit.</h2>
            <BsX className="text-2xl" onClick={() => setModal(false)} />
          </div>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div className="modal-slider overflow-hidden">
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              {ads.map((slide, i) => (
                <Link to={slide.Link || "/"}>
                  <img key={i} src={slide.ImgUrl} className="w-full" alt="" />
                </Link>
              ))}
            </Slider>
          </div>
        </Modal.Body>
        {ads.length > 0 && (
          <Modal.Footer className="!p-0 relative shadow-none">
            <div className="absolute inset-0 -bottom-10 flex items-center justify-center space-x-2">
              {ads.map((slide, i) => (
                <div
                  onClick={() => {
                    nav1.slickGoTo(i);
                    setActiveSlide(i);
                  }}
                  key={i}
                  className={`w-2 h-2 rounded-full bg-white ${
                    activeSlide == i ? "bg-opacity-75" : "bg-opacity-25"
                  }`}
                ></div>
              ))}
            </div>
          </Modal.Footer>
        )}
      </Modal>
    </div>
  );
};

export default StartModal;
