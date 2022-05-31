import { Modal } from "@/components/modal";

const ManualModal = ({ open, onClose, onSuccess }) => {
  return (
    <Modal
      open={open}
      containerClass="!bg-black !bg-opacity-50"
      onOutsideClick={onClose}
    >
      <Modal.Body className="text-center space-y-3">
        <div>温馨提示</div>
        <div className="font-light">是否要关闭自动免转功能?</div>
      </Modal.Body>
      <Modal.Footer className="grid grid-cols-2 !p-0">
        <button onClick={onClose}>取消</button>
        <button className="text-primary border-l py-3" onClick={onSuccess}>
          确定
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManualModal;
