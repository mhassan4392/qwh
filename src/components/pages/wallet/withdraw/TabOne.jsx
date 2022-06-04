import { useEffect, useState } from "react";
import { ImSpinner11 } from "react-icons/im";
import { BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import { IoReload } from "react-icons/io5";

import icon_wallet_wallet from "@/assets/images/icon_wallet_wallet.webp";
import { useDispatch, useSelector } from "react-redux";
import getBalance from "@/store/features/wallet/getBalance";
import getCards from "../../../../store/features/bankcard/getCards";
import PageLoader from "../../../loading/PageLoader";

import { Link } from "react-router-dom";
import BanksModal from "../../backcard/BanksModal";

const TabOne = () => {
  const [card, setCard] = useState(null);
  const { wallet, loading } = useSelector((state) => state.wallet);
  const { cards, loading: cardsLoading } = useSelector(
    (state) => state.bankcard
  );
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);

  const ams = !more
    ? wallet?.GamesWallet.slice(0, 3) || []
    : wallet?.GamesWallet || [];

  const [select, setSelect] = useState("极速取款");

  const [bankModal, setBankModal] = useState(false);

  useEffect(() => {
    dispatch(getCards());
    dispatch(getBalance());
  }, []);
  return (
    <>
      {cardsLoading == "getCards" && <PageLoader />}
      <div className="flex items-center justify-between py-3 px-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <div>钱包金额</div>

          <ImSpinner11
            className="text-secondary"
            onClick={() => dispatch(getBalance())}
          />
        </div>

        <div className="text-secondary">一键回收</div>
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
            <div>
              {loading !== "getBalance" && <div>{amount.Balance}</div>}
              {loading == "getBalance" && <IoReload className="animate-spin" />}
            </div>
          </div>
        ))}
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
      </div>

      {/* <div className="flex items-center my-3 py-4 px-4 bg-white space-x-3 text-xs">
        <div>取款方式</div>
        <div
          onClick={() => setSelect("极速取款")}
          className={`border rounded-lg px-3 py-3 ${
            select == "极速取款" ? "border-secondary icon-select-bg" : ""
          }`}
        >
          极速取款
        </div>
        <div
          onClick={() => setSelect("EBpay提币")}
          className={`border rounded-lg px-3 py-3 ${
            select == "EBpay提币" ? "border-secondary icon-select-bg" : ""
          }`}
        >
          EBpay提币
        </div>
      </div> */}

      {/* <div className="px-4">
        {cards.map((card, i) => (
          <div
            onClick={() => setBankModal(true)}
            key={i}
            className="flex items-center my-3 bg-white rounded p-2 text-xs space-x-2 justify-between"
          >
            <div>{card.AccountName}</div>
            <div>{card.AccountNo}</div>
            <div>{card.BankName}</div>
          </div>
        ))}
      </div> */}

      {cards.length > 0 && !card && (
        <div className="px-4 my-2" onClick={() => setBankModal(true)}>
          <div className="bg-white text-center p-2 rounded">
            Please select a Card
          </div>
        </div>
      )}

      {card && (
        <div>
          <div className="px-4">
            <div
              className="flex items-center my-3 bg-white rounded p-2 text-xs space-x-2 justify-between"
              onClick={() => setBankModal(true)}
            >
              <div>{card.AccountName}</div>
              <div>{card.AccountNo}</div>
              <div>{card.BankName}</div>
            </div>
          </div>
        </div>
      )}

      {cards.length == 0 && (
        <div className="flex items-center justify-between text-xs px-4 bg-white py-4">
          <div>{select == "极速取款" ? "到账银行卡" : "EBpay到账地址"}</div>
          <Link
            to="/bankcard/add"
            className="flex items-center space-x-2 text-secondary"
          >
            <AiOutlinePlus />
            <span>
              {select == "极速取款" ? "添加银行卡" : "添加EBpay收款地址"}
            </span>
          </Link>
        </div>
      )}

      {/* <div className="px-4 py-3 text-xs">
        {select == "极速取款"
          ? "请先绑定一个EBpay收款地址，用于收款"
          : "请先绑定一张银行卡，用于收款"}
      </div> */}

      <div className="text-center px-4 text-xs my-5">
        取款遇到问题？联系<span className="text-secondary">人工客服</span>解决
      </div>

      <BanksModal
        open={bankModal}
        onClose={() => setBankModal(false)}
        cards={cards}
        onClick={(c) => setCard(c)}
      />
    </>
  );
};

export default TabOne;
