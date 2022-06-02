import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
const NestedTabItem = ({ details }) => {
  const { Rule } = details;
  const rule = JSON.parse(Rule);
  const arr = rule?.FixedRange ? rule?.FixedRange.split(",") : [];
  const [value, setValue] = useState("");
  return (
    <>
      <div className="text-xs px-4 bg-white py-3 my-4">
        <div className="flex items-center justify-between mb-3">
          <div>存款人民币金额</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            name=""
            placeholder={`请输入${rule?.Price_Min}~${rule?.Price_Max}`}
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

        {arr.length > 0 && (
          <div className="grid grid-cols-4 gap-4">
            {arr.map((amount, i) => (
              <div
                key={i}
                onClick={() => setValue(amount)}
                className={`border py-2 text-center rounded ${
                  amount == value ? "border-secondary icon-select-bg" : ""
                }`}
              >
                ￥{amount}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NestedTabItem;
