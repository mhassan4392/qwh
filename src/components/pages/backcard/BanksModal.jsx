import { Modal } from "@/components/modal";
import { useState } from "react";
import account_vip from "@/assets/images/account_vip.webp";
import { AiOutlineCheck } from "react-icons/ai";

const BanksModal = ({ open, onClose, defaultValue = "" }) => {
  const banks = ["中国银行", "建设银行", "农业银行", "工商银行", "招商银行"];
  const [select, setSelect] = useState(defaultValue);
  return (
    <Modal
      open={open}
      onOutsideClick={onClose}
      align="end"
      className="!w-screen !m-0 !mt-10 rounded-b-none"
      containerClass="bg-black bg-opacity-50"
    >
      <Modal.Header className="relative text-center">
        选择所属银行
        <div className="absolute inset-0 text-secondary flex items-center px-2">
          <div onClick={onClose}>取消</div>
        </div>
      </Modal.Header>
      <Modal.Body className="!p-0">
        <div>
          {banks.map((selected, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-2 px-4"
              onClick={() => {
                setSelect(selected);
                onClose();
              }}
            >
              <div className="flex items-center space-x-3">
                <img src={account_vip} className="w-8" alt="" />
                <div>{selected}</div>
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

export default BanksModal;
