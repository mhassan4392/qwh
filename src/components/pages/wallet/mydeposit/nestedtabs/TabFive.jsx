import { useState } from "react";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
const TabFive = () => {
  const amounts = [163, 348, 763, 1064, 1370];
  const [value, setValue] = useState();
  return (
    <>
      <div className="px-4 py-3 my-4 bg-white space-y-4">
        <div>
          <span className="text-primary">*</span>存款人姓名
        </div>
        <input
          type="text"
          name=""
          placeholder="请输入存款人姓名"
          className="bg-transparent border-0 outline-none py-1"
          id=""
        />
        <div className="text-light text-sm">
          为及时到账，请务必输入正确的存款人姓名
        </div>
      </div>
      <div className="text-xs px-4 bg-white py-3 my-4">
        <div className="flex items-center justify-between mb-3">
          <div>存款金额</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            name=""
            placeholder="请输入100~100,000"
            className="bg-transparent border-0 outline-none py-1 text-xl font-bold placeholder:text-sm placeholder:font-light basis-3/4 w-full"
            id=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex items-center justify-end space-x-2 basis-1/4">
            {value && (
              <MdOutlineCancel
                onClick={() => setValue("")}
                className="text-light"
              />
            )}
            <span>元</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {amounts.map((amount, i) => (
            <div
              onClick={() => setValue(amount)}
              className={`border py-2 text-center rounded ${
                amount == value ? "border-secondary" : ""
              }`}
            >
              ￥{amount}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabFive;
