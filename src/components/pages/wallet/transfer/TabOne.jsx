import { useState, useEffect } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BsChevronDoubleDown, BsChevronRight } from "react-icons/bs";
import { IoReload, IoSendSharp } from "react-icons/io5";
import { RiCloseCircleFill } from "react-icons/ri";
import { ImSpinner3 } from "react-icons/im";

import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import Checkbox from "@/components/checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import getBalance from "@/store/features/wallet/getBalance";
import ManualModal from "./ManualModal";
import ValueModal from "./ValueModal";
import addTrans from "../../../../store/features/wallet/addTrans";

const TabOne = () => {
  const [manual, setManual] = useState(true);
  const [valueModal, setValueModal] = useState(false);
  const [value, setValue] = useState("value1");
  const [value1, setValue1] = useState("中心钱包");
  const [value2, setValue2] = useState("球王会体育");
  const [manualModal, setManualModal] = useState(false);
  const [more, setMore] = useState(true);
  let [money, setMoney] = useState("");
  const { wallet, loading } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();

  const ams = !more
    ? wallet?.GamesWallet.slice(0, 3) || []
    : wallet?.GamesWallet || [];

  useEffect(() => {
    dispatch(getBalance());
  }, []);

  return (
    <>
      <ManualModal
        open={manualModal}
        onClose={() => setManualModal(false)}
        onSuccess={() => {
          setManualModal(false);
          setManual(false);
        }}
      />
      <ValueModal
        selected={value == "value1" ? value1 : value2}
        open={valueModal}
        onClose={() => setValueModal(false)}
        onChange={(v) => {
          if (value == "value1") {
            setValue1(v);
          } else {
            setValue2(v);
          }
          setValueModal(false);
        }}
      />
      <div className="flex items-center justify-between py-3 px-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div>钱包金额</div>

          <ImSpinner11
            className="text-secondary"
            onClick={() => dispatch(getBalance())}
          />
        </div>

        <div className="text-secondary" onClick={() => dispatch(getBalance())}>
          一键回收
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-4 bg-white border-b">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <img src={icon_wallet_wallet} className="w-5" alt="" />
            <div className="text-xs">中心钱包</div>
          </div>
          <div className="text-secondary text-center flex">
            {loading !== "getBalance" && <>￥ {wallet?.CenterWallet}</>}
            {loading == "getBalance" && <IoReload className="animate-spin" />}
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center space-x-2">
            <img src={icon_wallet_wallet} className="w-5" alt="" />
            <div className="text-xs">锁定钱包</div>
          </div>
          <div className="text-secondary text-center flex">
            {loading !== "getBalance" && <>￥ {wallet?.LockdownWallet}</>}
            {loading == "getBalance" && <IoReload className="animate-spin" />}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 items-center justify-between px-4 bg-white">
        {ams.map((amount, i) => (
          <div
            key={i}
            className="text-[11px] flex flex-col items-center py-3 px-2"
          >
            <div className="truncate">{amount.Name}</div>
            {loading !== "getBalance" && <div>{amount.Balance}</div>}
            {loading == "getBalance" && <IoReload className="animate-spin" />}
          </div>
        ))}
        {wallet && wallet.GamesWallet.length > 3 && (
          <div
            onClick={() => setMore(!more)}
            className="text-[11px] flex flex-col items-center py-3 px-2"
          >
            <div>收起</div>
            <div>
              <BsChevronDoubleDown
                className={more ? "transform rotate-180" : ""}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-white py-4 px-4 mt-3">
        <div>自动转账</div>
        <div>
          <Checkbox
            value={manual}
            onChange={(v) => {
              if (manual) {
                setManualModal(true);
              } else {
                setManual(true);
              }
            }}
          />
        </div>
      </div>

      {!manual && (
        <div>
          <div className="flex items-center justify-between px-4 py-4 bg-white">
            <div
              className="flex items-center justify-center space-x-2 basis-[40%]"
              onClick={() => {
                setValue("value1");
                setValueModal(true);
              }}
            >
              <span>{value1}</span>
              <span>
                <BsChevronRight className="text-xs" />
              </span>
            </div>
            <IoSendSharp className="basis-[20%] flex items-center justify-center text-light" />
            <div
              className="flex items-center justify-center space-x-2 basis-[40%]"
              onClick={() => {
                setValue("value2");
                setValueModal(true);
              }}
            >
              <span>{value2}</span>
              <span>
                <BsChevronRight className="text-xs" />
              </span>
            </div>
          </div>

          <div className="px-4 bg-white py-4">
            <div className="pb-3">
              <label htmlFor="money" className="text-xs text-light">
                场馆内钱包不支持互转
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div className="basis-1/2 flex items-center">
                <span>￥</span>
                <input
                  type="number"
                  id="money"
                  value={money}
                  className="border-0 focus:border-0 focus:ring-0 focus:outline-none w-full placeholder:text-sm placeholder:text-light text-lg font-bold"
                  onChange={(e) => setMoney(e.target.value)}
                  placeholder="请输入转账金额"
                />
              </div>
              <div className="basis-1/2 flex items-center justify-end">
                {!money && (
                  <span onClick={() => setMoney(wallet?.CenterWallet)}>
                    最大金额
                  </span>
                )}
                {money && (
                  <RiCloseCircleFill
                    className="text-light text-xl"
                    onClick={() => setMoney("")}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="px-4 my-5">
            <button
              disabled={money <= 0 || !money}
              className={`w-full py-4 rounded-lg text-white bg-primary flex items-center justify-center ${
                money <= 0 || !money ? "bg-opacity-50" : ""
              }`}
              onClick={() => {
                dispatch(
                  addTrans({
                    money: Number(money),
                    transType: 0,
                    type: 11,
                    setMoney,
                  })
                );
              }}
            >
              {loading != "addTrans" && "立即转账"}
              {loading == "addTrans" && (
                <ImSpinner3 className="animate-spin text-xl text-white" />
              )}
            </button>
          </div>
        </div>
      )}

      <div className="text-center px-4 text-xs my-5">
        如需帮助，请 <span className="text-secondary">联系客服</span>
      </div>
    </>
  );
};

export default TabOne;
