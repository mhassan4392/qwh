import { useRef, useEffect, useState } from "react";

import banner_audio from "@/assets/images/banner_audio.webp";
import banner_button from "@/assets/images/banner_button.webp";
import "./Banner.css";
import NotificationModal from "./NotificationModel";
const Banner = ({ messages }) => {
  const bannerRef = useRef(null);
  const [transform, setTransform] = useState("100%");

  useEffect(() => {
    if (bannerRef.current) {
      setTransform(bannerRef.current.clientWidth + "px");
    }
  }, [bannerRef.current]);

  const [modal, setModal] = useState(false);

  const [modalMessage, setModalMessage] = useState({});
  return (
    <>
      <div className="px-4 bg-white">
        <div className="flex relative items-center justify-between bg-secondary bg-opacity-5 py-1 px-1 rounded-xl">
          <div className="mr-1">
            <img src={banner_audio} className="w-4" alt="" />
          </div>
          <div ref={bannerRef} className="grow h-4 overflow-hidden relative">
            <div
              style={{
                transform: `translateX(${transform})`,
              }}
              className="absolute inset-0 min-w-max flex items-center banner-content text-xs text-light space-x-10"
            >
              {messages.map((message, i) => (
                <span
                  key={i}
                  className="flex items-center space-x-5"
                  onClick={() => {
                    setModalMessage(message);
                    setModal(true);
                  }}
                >
                  <span>{message.Title}</span>
                  <span>{message.Content}</span>
                </span>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-end">
            <img src={banner_button} className="w-16 ml-1" alt="" />
          </div> */}
        </div>
      </div>

      <NotificationModal
        notification={modalMessage}
        open={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
};

export default Banner;
