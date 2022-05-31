import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "@/components/modal";
import account_vip from "@/assets/images/account_vip.webp";
import { useForm } from "react-hook-form";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import addCard from "../../store/features/bankcard/addCard";
import Alert from "../../components/Alert/Alert";

const BankCardAdd = () => {
  const { loading, error } = useSelector((state) => state.bankcard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState("中国银行");
  const selects = ["中国银行", "建设银行", "农业银行", "工商银行", "招商银行"];

  const onsubmit = handleSubmit(async (data) => {
    data.navigate = navigate;
    await dispatch(addCard(data));
  });
  return (
    <div className="bg-common-bg h-full flex flex-col">
      <header>
        <nav className="bg-white border-b flex items-center justify-center relative py-3">
          <Link
            to="/bankcard/list"
            className="absolute inset-0 flex items-center mx-2"
          >
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>添加银行卡</h2>
        </nav>
      </header>

      <div className="text-xs sm:text-sm grow h-full overflow-y-auto">
        <Alert
          error={error?.message || ""}
          open={error && error.type == "addCard"}
        />

        <div className="bg-white px-4">
          <div className="py-2">持卡人姓名</div>
          <input
            type="text"
            className="w-full py-2 border-0 outline-none mt-2"
            placeholder="为了您的资金能够迅速到账"
            {...register("name", { required: "Name if required" })}
          />
          {errors.name && (
            <div className="text-primary text-xs mt-0.5">
              {errors.name.message}
            </div>
          )}
        </div>

        <div className="py-2 px-4">
          为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致
        </div>

        <div
          className="bg-white px-4 border-b py-2"
          onClick={() => setModal(true)}
        >
          <div className="py-2">所属银行</div>
          <div className="text-light flex items-center justify-between">
            <div>{select}</div>
            <BsChevronRight />
          </div>
        </div>

        <div className="bg-white px-4 border-b py-2">
          <div className="py-2">银行卡类型</div>
          <div className="flex items-center space-x-3">
            <div
              className={`px-3 py-1.5 border rounded ${
                value == "储蓄卡" ? "border-primary icon-select-bg" : ""
              }`}
              onClick={() => setValue("储蓄卡")}
            >
              储蓄卡
            </div>
            <div
              className={`px-3 py-1.5 border rounded ${
                value == "信用卡" ? "border-primary icon-select-bg" : ""
              }`}
              onClick={() => setValue("信用卡")}
            >
              信用卡
            </div>
          </div>
        </div>

        <div className="py-2 px-4">
          请选择正确的银行卡类型，否则会造成无法提款的问题
        </div>

        <div className="bg-white px-4">
          <div className="py-2">银行卡号</div>
          <input
            type="text"
            className="w-full py-2 border-0 outline-none mt-2"
            placeholder="银行卡号"
            {...register("bank", { required: "Bank if required" })}
          />
          {errors.bank && (
            <div className="text-primary text-xs mt-0.5">
              {errors.bank.message}
            </div>
          )}
        </div>

        <div className="py-2 px-4">
          请认真校对银行卡号，卡号错误资金将无法到账
        </div>
        <div className="px-4">
          <button
            onClick={onsubmit}
            disabled={!isValid}
            className="bg-primary w-full py-1.5 rounded flex items-center justify-center"
          >
            {!loading && loading != "addCard" && "下一步"}
            {loading && loading == "addCard" && (
              <ImSpinner3 className="animate-spin text-xl text-white" />
            )}
          </button>
        </div>

        <div className="px-4 text-center py-2">
          如需帮助，<span className="text-secondary">请联系客服</span>
        </div>
      </div>

      <Modal
        open={modal}
        onOutsideClick={() => setModal(false)}
        align="end"
        className="!w-screen !m-0 !mt-10 rounded-b-none"
        containerClass="bg-black bg-opacity-50"
      >
        <Modal.Header className="relative text-center">
          选择所属银行
          <div className="absolute inset-0 text-secondary flex items-center px-2">
            <div onClick={() => setModal(false)}>取消</div>
          </div>
        </Modal.Header>
        <Modal.Body className="!p-0">
          <div>
            {selects.map((selected, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b py-2 px-4"
                onClick={() => {
                  setSelect(selected);
                  setModal(false);
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
    </div>
  );
};

export default BankCardAdd;
