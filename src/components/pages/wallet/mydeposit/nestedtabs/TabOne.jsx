import { BiHelpCircle } from "react-icons/bi";
const TabOne = () => {
  return (
    <div className="text-xs px-4 bg-white py-3 my-4">
      <div className="flex items-center justify-between mb-3">
        <div>存款人民币金额</div>
        <div className="text-primary flex items-center space-x-1 text-[9px]">
          加送1%，每日最高优惠1000.00元
          <BiHelpCircle />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          name=""
          placeholder="请输入100~100,000"
          className="bg-transparent border-0 outline-none py-1"
          id=""
        />
        <div>元</div>
      </div>
    </div>
  );
};

export default TabOne;
