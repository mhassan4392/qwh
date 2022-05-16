import { useState, useEffect } from "react";
import Modal from "@/components/modal/Modal";
import { BsX } from "react-icons/bs";
import index_modal_image from "@/assets/images/index_modal_image.jpg";
const StartModal = () => {
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
        <Modal.Body className="p-0">
          <img src={index_modal_image} className="w-full" alt="" />
        </Modal.Body>
        <Modal.Footer className="relative">
          <div className="absolute bottom-[-20px] left-0 right-0 space-x-2 z-10 flex items-center justify-center">
            <button className="w-2 h-2 bg-white rounded-full"></button>
            <button className="w-2 h-2 bg-white bg-opacity-25 rounded-full"></button>
          </div>

          <div className="flex items-center space-x-1 text-sm text-light">
            <input type="radio" name="" id="" />
            <label htmlFor="">Lorem ipsum dolor sit.</label>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StartModal;
