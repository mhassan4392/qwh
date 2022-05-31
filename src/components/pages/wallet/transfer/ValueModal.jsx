import { Modal } from "@/components/modal";
import { AiOutlineCheck } from "react-icons/ai";

const ValueModal = ({ open, onClose, onChange, selected }) => {
  const selects = [
    "中心钱包",
    "球王会体育",
    "OB体育",
    "FB体育",
    "eBET真人",
    "BG真人",
    "球王会真人",
    "雷火电竞",
    "IM电竞",
    "球王会电竞",
  ];
  return (
    <Modal
      open={open}
      onOutsideClick={onClose}
      align="end"
      className="!w-screen !m-0 !mt-10 rounded-b-none"
      containerClass="bg-black bg-opacity-50"
    >
      <Modal.Header className="relative text-center">
        选择钱包
        <div className="absolute inset-0 text-primary flex items-center px-2">
          <div onClick={onClose}>取消</div>
        </div>
      </Modal.Header>
      <Modal.Body className="!p-0">
        <div>
          {selects.map((select, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-2 px-4"
              onClick={() => {
                onChange(select);
                onClose;
              }}
            >
              <div className="flex items-center space-x-3">
                <div>{select}</div>
              </div>
              <div>
                {select == selected && (
                  <AiOutlineCheck className="text-secondary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ValueModal;
