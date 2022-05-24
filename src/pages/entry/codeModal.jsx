import { useState, useRef, useEffect } from "react";
import { Modal } from "@/components/modal";
import FourDigitInput from "./Input";
const CodeModal = ({ open, onClose }) => {
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
      inputRef.current.click();
    }
  }, [open]);
  return (
    <div>
      <Modal
        open={open}
        onClick={() => {
          inputRef.current.click();
          inputRef.current.focus();
        }}
      >
        <Modal.Body className="text-sm text-center">
          <div className="space-y-3">
            <p>安全校验</p>
            <p>
              请补全
              <span className="text-primary">手机号中间四位</span>
              ，确保您的账户安全
            </p>
            <p>
              185<span className="text-primary">****</span>8857
            </p>
          </div>

          <div className="px-4 py-5">
            <FourDigitInput focus={open} onChange={(value) => setCode(value)} />
          </div>

          <input
            autoFocus
            type="number"
            ref={inputRef}
            className="hidden"
            onFocus={() => console.log("hello")}
            onClick={() => console.log("click")}
          />
        </Modal.Body>
        <Modal.Footer className="py-0 flex items-center justify-between text-center">
          <div
            onClick={() => {
              setCode("");
              onClose();
            }}
            className="basis-1/2 border-r py-3 cursor-pointer"
          >
            取消
          </div>
          <div
            onClick={() => {
              if (code.length == 4) {
                setCode("");
                onClose();
              }
            }}
            className={`basis-1/2 py-3 cursor-pointer ${
              code.length != 4 ? "text-light" : ""
            }`}
          >
            确定
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CodeModal;
