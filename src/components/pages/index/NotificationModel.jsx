import Modal from "@/components/modal/Modal";
import { Link } from "react-router-dom";
const NotificationModal = ({ open, notification, onClose = () => {} }) => {
  return (
    <div>
      <Modal
        open={open}
        containerClass="bg-black bg-opacity-50"
        className="overflow-visible"
        onOutsideClick={onClose}
      >
        <Modal.Header className="bg-white text-black rounded-t-lg">
          <div className="flex items-center justify-center">
            <h2>{notification.Title}</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="text-xs sm:text-lg text-center">
            {notification.Content}
          </p>
        </Modal.Body>
        <Modal.Footer className="relative p-0">
          <div className="absolute bottom-[-20px] left-0 right-0 space-x-2 z-10 flex items-center justify-center">
            <button className="w-2 h-2 bg-white rounded-full"></button>
            <button className="w-2 h-2 bg-white bg-opacity-25 rounded-full"></button>
          </div>

          <div className="flex items-center justify-between space-x-1 text-sm text-light">
            <div className="basis-1/2 text-center border-r py-3">
              <div onClick={onClose}>关闭</div>
            </div>
            <div className="text-primary basis-1/2 text-center">
              <Link to={notification.Link || "/message"}>查看全部</Link>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotificationModal;
