import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import profile from "@/assets/images/profile.png";
import { Link } from "react-router-dom";

import Pick from "@/components/picker/Picker";
import { useSelector } from "react-redux";

const Main = () => {
  const { user } = useSelector((state) => state.auth);

  const [values1, setValues1] = useState({
    title: "Mr.",
  });
  const [pickOne, setPickOne] = useState(false);
  const onPickOneChange = (name, value) => {
    setValues1((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const [values2, setValues2] = useState({
    title: "Mr.",
    firstName: "Micheal",
    secondName: "Jordan",
  });
  const [pickTwo, setPickTwo] = useState(false);
  const onPickTwoChange = (name, value) => {
    setValues2((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div className="bg-common-bg h-full flex flex-col">
      <header>
        <nav className="bg-white mb-2 flex items-center justify-center relative py-3">
          <Link to="/mine" className="absolute inset-0 flex items-center mx-2">
            <BsChevronLeft className="font-bold text-xl" />
          </Link>
          <h2>个人资料</h2>
        </nav>
      </header>
      <div className="grow h-full overflow-y-auto">
        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div className="basis-1/3">个人头像</div>
          <div className="basis-2/3 flex items-center justify-end">
            <img src={profile} className="w-16" alt="" />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div className="basis-1/3">用户名</div>
          <div className="basis-2/3 text-right">
            {user?.UserName || "个人头像"}
          </div>
        </div>

        <Link
          to="/bankcard/add"
          className="flex items-center justify-between px-4 py-4 border-b bg-white"
        >
          <div className="basis-1/3">真实姓名</div>
          <div className="text-light text-xs flex items-center justify-end basis-2/3">
            <div>需与银行卡持卡人姓名一致，否则无法提款</div>
            <BsChevronRight className="shrink-0 ml-0.5" />
          </div>
        </Link>

        <div
          onClick={() => setPickOne(true)}
          className="flex items-center justify-between px-4 py-4 border-b bg-white"
        >
          <div className="basis-1/3">性别</div>
          <div className="text-light text-xs flex items-center justify-end basis-2/3">
            <div>未选择</div>
            <BsChevronRight className="shrink-0 ml-0.5" />
          </div>
        </div>

        <div
          onClick={() => setPickTwo(true)}
          className="flex items-center justify-between px-4 py-4 border-b bg-white mb-3"
        >
          <div className="basis-1/3">出生日期</div>
          <div className="text-light text-xs flex items-center basis-2/3 justify-end">
            <div>添加日期，确保您已满18周岁</div>
            <BsChevronRight className="shrink-0 ml-0.5" />
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white">
          <div className="basis-1/3">手机号码</div>
          <div className="basis-1/3 text-right">185****8857</div>
        </div>

        <div className="flex items-center justify-between px-4 py-4 border-b bg-white mb-4">
          <div className="basis-1/3">电子邮箱</div>
          <div className="text-light text-xs flex items-center justify-end basis-2/3">
            <div>绑定邮箱保护账号安全</div>
            <BsChevronRight className="shrink-0 ml-0.5" />
          </div>
        </div>

        <div className="text-xs text-center px-2 mb-2">
          为了您的隐私安全，部分信息在确认后将无法修改
        </div>
        <div className="text-xs text-center px-2">
          如需帮助，<span className="text-lighten">请联系客服</span>
        </div>
      </div>

      <Pick
        open={pickOne}
        toggle={() => setPickOne(!pickOne)}
        options={{
          title: ["Mr.", "Mrs.", "Ms.", "Dr."],
        }}
        values={values1}
        onChange={onPickOneChange}
        text="完成"
        buttonText="取消"
      />

      <Pick
        open={pickTwo}
        toggle={() => setPickTwo(!pickTwo)}
        options={{
          title: ["Mr.", "Mrs.", "Ms.", "Dr."],
          firstName: ["John", "Micheal", "Elizabeth"],
          secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
        }}
        values={values2}
        onChange={onPickTwoChange}
        text="完成"
        buttonText="取消"
      />
    </div>
  );
};

export default Main;
