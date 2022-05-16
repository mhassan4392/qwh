import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import profile from "@/assets/images/profile.png";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="bg-lighter h-full">
      <header>
        <nav className="bg-white mb-2 flex items-center justify-center relative py-3">
          <Link to="/mine" className="absolute inset-0 flex items-center mx-2">
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>个人资料</h2>
        </nav>
      </header>

      <div>
        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div>个人头像</div>
          <img src={profile} className="w-16" alt="" />
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div>用户名</div>
          <div>aaron1990</div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div>真实姓名</div>
          <div className="text-light text-sm flex items-center">
            <div>需与银行卡持卡人姓名一致，否则无法提款</div>
            <BsChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div>性别</div>
          <div className="text-light text-sm flex items-center">
            <div>未选择</div>
            <BsChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white mb-3">
          <div>出生日期</div>
          <div className="text-light text-sm flex items-center">
            <div>添加日期，确保您已满18周岁</div>
            <BsChevronRight />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div>手机号码</div>
          <div>185****8857</div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white mb-4">
          <div>电子邮箱</div>
          <div className="text-light text-sm flex items-center">
            <div>绑定邮箱保护账号安全</div>
            <BsChevronRight />
          </div>
        </div>

        <div className="text-xs text-center px-2 mb-2">
          为了您的隐私安全，部分信息在确认后将无法修改
        </div>
        <div className="text-xs text-center px-2">
          如需帮助，<span className="text-lighten">请联系客服</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
