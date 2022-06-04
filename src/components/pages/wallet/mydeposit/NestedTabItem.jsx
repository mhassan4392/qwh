import { MdOutlineCancel } from "react-icons/md";
const NestedTabItem = ({
  details,
  register,
  money,
  setValue,
  errors,
  trigger,
}) => {
  const { Rule } = details;
  const rule = JSON.parse(Rule);
  const arr = rule?.FixedRange ? rule?.FixedRange.split(",") : [];
  return (
    <>
      <div className="text-xs px-4 bg-white py-3 my-4">
        <div className="flex items-center justify-between mb-3">
          <div>存款人民币金额</div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="basis-3/4">
            <input
              type="text"
              name=""
              placeholder={`请输入${rule?.Price_Min}~${rule?.Price_Max}`}
              className="bg-transparent border-0 outline-none py-1 text-xl font-bold placeholder:text-sm placeholder:font-light w-full"
              id=""
              {...register("money", {
                required: "Money is required",
                min: {
                  value: rule?.Price_Min,
                  message: `Min amount atleast ${rule?.Price_Min}`,
                },
                max: {
                  value: rule?.Price_Max,
                  message: `Max amount should be equal or less than ${rule?.Price_Max}`,
                },
              })}
            />

            {errors.money && (
              <div className="error-element">{errors.money.message}</div>
            )}
          </div>
          <div className="flex items-center justify-end space-x-2 basis-1/4">
            {money && (
              <MdOutlineCancel
                onClick={() => {
                  setValue("money", "");
                  trigger("money");
                }}
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
                onClick={() => setValue("money", amount)}
                className={`border py-2 text-center rounded ${
                  amount == money ? "border-secondary icon-select-bg" : ""
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
