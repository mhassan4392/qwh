import { Modal } from "@/components/modal";
import { useState } from "react";
import account_vip from "@/assets/images/account_vip.webp";
import { AiOutlineCheck } from "react-icons/ai";

const BanksModal = ({ open, onClose, defaultValue = "", cards, onClick }) => {
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
          {cards.map((card, i) => (
            <div
              onClick={() => {
                onClick(card);
                onClose();
              }}
              key={i}
              className="flex items-center my-3 bg-white rounded p-2 text-xs space-x-2 justify-between"
            >
              <div>{card.AccountName}</div>
              <div>{card.AccountNo}</div>
              <div>{card.BankName}</div>
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BanksModal;
