import PrivilegeHeader from "@/components/pages/vip/privilege/PrivilegeHeader";
import PrivilegeSection1 from "@/components/pages/vip/privilege/PrivilegeSection1";
import PrivilegeSection2 from "@/components/pages/vip/privilege/PrivilegeSection2";
import PrivilegeSlider from "@/components/pages/vip/privilege/PrivilegeSlider";

import { BsChevronDoubleRight } from "react-icons/bs";

const Privilege = () => {
  return (
    <div className="bg-common-bg h-full overflow-y-auto overflow-x-hidden">
      <PrivilegeHeader />
      <PrivilegeSlider />
      <div className="overflow-y-auto">
        <PrivilegeSection1 />
        <PrivilegeSection2 />
      </div>

      <div className="flex items-center justify-center space-x-2 text-primary text-xs pt-3 pb-10">
        <span>查看VIP详情</span>
        <BsChevronDoubleRight />
      </div>
    </div>
  );
};

export default Privilege;
