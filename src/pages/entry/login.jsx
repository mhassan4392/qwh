import { useState } from "react";
import signup_icon from "@/assets/images/entry/signup_icon.webp";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  return (
    <div>
      <div className="flex text-white mx-4">
        <div className="grow bg-white bg-opacity-30 rounded-l-lg py-6 px-4">
          <h1 className="text-center mb-10">登录</h1>

          <form>
            {/* username field */}
            <div className="flex items-center relative my-5">
              <BiUserCircle className="absolute left-0 ml-3 text-light text-2xl" />
              <input
                type="text"
                placeholder="用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-black bg-opacity-30 rounded-full border-0 w-full outline-none px-12 placeholder:text-sm h-12"
              />
              {username && (
                <MdOutlineCancel
                  onClick={() => setUsername("")}
                  className="absolute right-0 mr-3 text-light text-xl"
                />
              )}
            </div>

            {/* password field */}
            <div className="flex items-center relative my-5">
              <AiOutlineUnlock className="absolute left-0 ml-3 text-light text-2xl" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="密码"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black bg-opacity-30 rounded-full border-0 w-full outline-none px-12 placeholder:text-sm h-12"
              />
              {!showPassword && (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(true)}
                  className="absolute right-0 mr-3 text-light text-xl"
                />
              )}
              {showPassword && (
                <AiOutlineEye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-0 mr-3 text-light text-xl"
                />
              )}
            </div>

            <div className="my-5 text-xs flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  name="remember"
                  value={remember}
                  onChange={(e) => setRemember(e.target.value)}
                  id="remember"
                  className="mr-2 rounded-full text-gray-500 border-0 ring-0 outline-none focus:outline-none"
                />
                <label htmlFor="remember">记住密码</label>
              </div>
              <div className="text-right">忘记密码?</div>
            </div>

            <div className="my-5">
              <button className="bg-primary w-full py-3 rounded-full">
                登录
              </button>
            </div>

            <div className="my-5 text-center text-xs">先去逛逛</div>
          </form>
        </div>
        <div className="shrink-0 flex flex-col items-center justify-center px-3 bg-black bg-opacity-40">
          <img src={signup_icon} className="w-6 mb-3" alt="" />
          <span>注</span>
          <span>册</span>
          <span>新</span>
          <span>用</span>
          <span>户</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
