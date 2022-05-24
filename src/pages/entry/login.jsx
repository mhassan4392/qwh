import { useState, useRef } from "react";
import signup_icon from "@/assets/images/entry/signup_icon.webp";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CodeModal from "./codeModal";

import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [getCode, setGetCode] = useState(false);

  const [modal, setModal] = useState(false);

  const codeRef = useRef();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { username } = watch();

  const onSubmit = handleSubmit((data) => {
    if (!getCode) {
      setGetCode(true);
    } else {
      console.log(data);
    }
  });

  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
      >
        <div className="flex text-white mx-4">
          <div className="grow bg-white bg-opacity-30 rounded-l-lg py-6 px-4 h-[480px] flex flex-col justify-between">
            <h1 className="text-center">登录</h1>

            <div className="mb-12">
              <form onSubmit={onSubmit}>
                {/* code field */}
                {getCode && (
                  <div>
                    <div className="text-center my-5 text-xs">
                      因本次登录不是常用IP，故需要安全验证
                    </div>
                    <div className="my-5">
                      <div ref={codeRef} className="input-control">
                        <IoLanguage className="left-element" />
                        <input
                          type="text"
                          placeholder="用户名"
                          {...register("code", {
                            required: "Code is required",
                          })}
                        />
                        <button
                          onClick={() => {
                            const input =
                              codeRef.current.querySelector("input");

                            setModal(true);
                            input.blur();
                          }}
                          type="button"
                          className="text-[10px] absolute right-1 h-10 bg-secondary rounded-full px-6 bg-opacity-80"
                        >
                          获取验证码
                        </button>
                      </div>
                      {errors.code && (
                        <div className="error-element">
                          {errors.code.message}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {!getCode && (
                  <div>
                    {/* username field */}
                    <div className="my-5">
                      <div className="input-control">
                        <BiUserCircle className="left-element" />
                        <input
                          type="text"
                          placeholder="用户名"
                          {...register("username", {
                            required: "Username is required",
                          })}
                        />
                        {username && (
                          <MdOutlineCancel
                            onClick={() => setValue("username", "")}
                            className="absolute right-0 mr-3 text-light text-xl"
                          />
                        )}
                      </div>
                      {errors.username && (
                        <div className="error-element">
                          {errors.username.message}
                        </div>
                      )}
                    </div>

                    {/* password field */}
                    <div className="my-5">
                      <div className="input-control">
                        <AiOutlineUnlock className="left-element" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="密码"
                          {...register("password", {
                            required: "Password is required",
                          })}
                        />
                        {!showPassword && (
                          <AiOutlineEyeInvisible
                            onClick={() => setShowPassword(true)}
                            className="right-element"
                          />
                        )}
                        {showPassword && (
                          <AiOutlineEye
                            onClick={() => setShowPassword(false)}
                            className="right-element"
                          />
                        )}
                      </div>
                      {errors.password && (
                        <div className="error-element">
                          {errors.password.message}
                        </div>
                      )}
                    </div>

                    <div className="my-5 text-xs flex items-center justify-between">
                      <div>
                        <input
                          type="checkbox"
                          name="remember"
                          {...register("remember")}
                          id="remember"
                          className="mr-2 rounded-full text-gray-500 focus:ring-0 placeholder:text-white"
                        />
                        <label htmlFor="remember">记住密码</label>
                      </div>
                      <div className="text-right">忘记密码?</div>
                    </div>
                  </div>
                )}

                <div className="my-5">
                  <button
                    disabled={!isValid}
                    className={`bg-primary w-full py-3 rounded-full ${
                      !isValid ? "bg-opacity-60" : ""
                    }`}
                  >
                    登录
                  </button>
                </div>

                <div className="my-5 text-center text-xs">先去逛逛</div>
              </form>
            </div>
          </div>
          <Link
            to="/entry/register"
            className="shrink-0 flex flex-col items-center justify-center rounded-r-lg px-3 bg-black bg-opacity-40"
          >
            <img src={signup_icon} className="w-6 mb-3" alt="" />
            <span>注</span>
            <span>册</span>
            <span>新</span>
            <span>用</span>
            <span>户</span>
          </Link>
        </div>
      </motion.div>
      <CodeModal open={modal} onClose={() => setModal(false)} />
    </>
  );
};

export default Login;
