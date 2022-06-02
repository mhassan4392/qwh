import { BsChevronDoubleRight, BsChevronLeft } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import Range from "./range/Range";

import vip_medal_vip0_shadow from "@/assets/images/vip/vip_medal_vip0_shadow.webp";
import vip_bg from "@/assets/images/vip/vip_bg.webp";
import profile from "@/assets/images/profile.png";

const PrivilegeHeader = () => {
  return (
    <div className="bg-white">
      <div
        className="px-4 bg-no-repeat bg-cover bg-bottom"
        style={{
          backgroundImage: `url("${vip_bg}")`,
        }}
      >
        <div className="flex items-center justify-center relative py-2">
          <div>VIP特权</div>
          <Link to={-1} className="absolute inset-0 flex items-center">
            <BsChevronLeft />
          </Link>
        </div>

        <div className="flex items-center justify-between py-2">
          <div className="flex space-x-2 items-center">
            <img src={profile} className="w-14" alt="" />
            <div>
              <div className="flex items-center">aaron1990</div>
            </div>
          </div>
          <img src={vip_medal_vip0_shadow} className="w-28" alt="" />
        </div>

        <div className="flex items-center justify-between space-x-2">
          <div className="bg-primary text-white px-1.5 rounded-lg text-xs">
            vip0
          </div>
          <div className="grow relative">
            <div
              className="absolute w-1 flex items-center justify-center flex-col text-[9px] -top-5"
              style={{ left: "50%" }}
            >
              <span>50%</span>
              <AiOutlineCaretDown />
            </div>
            <Range value={50} />
          </div>
          <div className="bg-gradient-to-r from-gray-400 to-gray-300 text-white px-1.5 rounded-lg text-xs">
            vip0
          </div>
        </div>

        <div className="flex items-center pt-5 space-x-2 pb-12">
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="text-xs">
            当前流水(元): <span className="font-bold">0.00</span>{" "}
            (0.00/6,000.00)
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-5">
        <button className="flex items-center bg-primary text-gray-100 px-10 py-2 text-sm rounded-full space-x-2">
          <span>VIP详情</span> <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default PrivilegeHeader;
