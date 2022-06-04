import {
  Tabs,
  TabsButtons,
  TabsItems,
  TabButton,
  TabItem,
} from "@/components/tabs";
import { useForm } from "react-hook-form";
import NestedTabItem from "./NestedTabItem";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import addPay from "../../../../store/features/wallet/addPay";

const MyDepositTabItem = ({ tabs }) => {
  const { loading } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    watch,
    trigger,
  } = useForm({ mode: "onChange" });

  const { money } = watch();

  const onSubmit = handleSubmit(async (data) => {
    await dispatch(
      addPay({
        payId: 0,
        amount: Number(data.money),
        setValue: setValue,
      })
    );
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <Tabs defaultTab={0}>
          <TabsButtons className="grid grid-cols-4 gap-3 px-4 bg-white items-center text-xs pt-3 pb-5 justify-center cursor-pointer overflow-hidden">
            {tabs.map((tab, i) => (
              <TabButton
                className="text-xs flex flex-col h-20 rounded-lg items-center justify-center border space-y-1"
                activeClass="bg-white text-black border-[#4080ff] icon-select-bg"
                key={i}
                tab={i}
              >
                {({ isActive }) => (
                  <>
                    <img src={tab.Img} className="w-8" alt="" />
                    <div
                      className={`text-[10px] ${
                        isActive ? "text-secondary" : ""
                      }`}
                    >
                      <div>{tab.Name}</div>
                    </div>
                  </>
                )}
              </TabButton>
            ))}
          </TabsButtons>

          <TabsItems>
            {tabs.map((tab, i) => (
              <TabItem key={i} tab={i} defaultTab={i == 0}>
                <NestedTabItem
                  register={register}
                  setValue={setValue}
                  trigger={trigger}
                  money={money}
                  errors={errors}
                  details={tab}
                />
              </TabItem>
            ))}
          </TabsItems>
        </Tabs>

        <div className="mx-4 my-4">
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full bg-primary py-2 text-white flex items-center justify-center ${
              !isValid ? "bg-opacity-50" : ""
            }`}
          >
            {loading != "addPay" && "立即存款"}
            {loading == "addPay" && (
              <ImSpinner3 className="animate-spin text-xl text-white" />
            )}
          </button>
        </div>

        <div className="my-5 px-4 text-center text-xs">
          存款遇到问题？联系<span className="text-secondary">人工客服</span>解决
        </div>
      </form>
    </>
  );
};

export default MyDepositTabItem;
