import { useState } from "react";
const TabSix = () => {
  const amounts = [100];
  const [value, setValue] = useState();
  return (
    <>
      <div className="text-xs px-4 bg-white py-3 my-4">
        <div className="flex items-center justify-between mb-3">
          <div>存款金额</div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {amounts.map((amount, i) => (
            <div
              onClick={() => setValue(amount)}
              className={`border py-2 text-center rounded ${
                amount == value ? "border-secondary icon-select-bg" : ""
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

export default TabSix;
