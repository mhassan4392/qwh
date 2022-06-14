import { useState, useRef, useEffect } from "react";
import signup_icon from "@/assets/images/entry/signup_icon.webp";
import { BiUserCircle } from "react-icons/bi";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { ImSpinner3 } from "react-icons/im";
import { IoLanguage } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CodeModal from "@/components/pages/entry/codeModal";

import { useSelector, useDispatch } from "react-redux";
import login from "@/store/features/auth/login";
import { setError } from "@/store/features/auth/authSlice";

import { useForm } from "react-hook-form";
import Alert from "@/components/Alert/Alert";

import { useCookies } from "react-cookie";
import getValidCode from "@/store/features/auth/getValidCode";

const Login = () => {
  const [cookies, setCookie] = useCookies();

  const { loading, error, validCode } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [codeImage, setCodeImage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [getCode, setGetCode] = useState(false);

  const [modal, setModal] = useState(false);

  const codeRef = useRef();

  const [time, setTime] = useState(0);

  let interval = useRef(null);

  // timer function
  const setTimer = () => {
    clearInterval(interval.current);
    setTime(60);
  };

  useEffect(() => {
    //  set timer if time is 60
    if (time == 60) {
      interval.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time == 0) {
      // clear timer if time is 0
      clearInterval(interval.current);
    }
  }, [time]);

  useEffect(() => {
    // get valid code
    dispatch(getValidCode());
    // set error to null
    dispatch(setError(null));
    // cleare the interval
    return () => clearInterval(interval.current);
  }, []);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const { name, code } = watch();

  const onSubmit = handleSubmit(async (data) => {
    // go to code field
    if (!getCode) {
      dispatch(setError(null));
      setGetCode(true);
    } else {
      // if already set code then run the login function
      data.navigate = navigate;
      data.setCookie = setCookie;
      data.validCode = data.code;
      await dispatch(login(data));
    }
  });

  useEffect(() => {
    // if login error then get valid code again
    if (!loading && error?.type == "login") {
      dispatch(getValidCode());
    }

    // on login error empty some fields and go back to username and password fields
    if (error && error.type == "login") {
      setValue("code", "");
      setValue("password", "");
      setGetCode(false);
    }
  }, [error]);

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
                {/* Error */}
                <Alert
                  error={error?.message || ""}
                  open={error && error.type == "login"}
                />

                {/* code field */}
                {getCode && (
                  <div>
                    <div className="text-center my-5 text-xs">
                      因本次登录不是常用IP，故需要安全验证
                    </div>

                    {/* <div className="my-5">
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
                          className={`text-[10px] absolute right-1 h-10 bg-secondary rounded-full w-28 bg-opacity-80 ${
                            time ? "text-lg" : ""
                          }`}
                        >
                          {time ? time + "s" : "获取验证码"}
                        </button>
                      </div>
                      {errors.code && (
                        <div className="error-element">
                          {errors.code.message}
                        </div>
                      )}
                    </div> */}

                    <div>
                      <div className="input-control">
                        <IoLanguage className="left-element" />
                        <input
                          type="text"
                          placeholder="验证码"
                          className="!pr-[125px]"
                          {...register("code", {
                            required: "Code is required",
                          })}
                        />
                        <span className="right-element">
                          {validCode && (
                            <img
                              src={validCode}
                              className="w-20 h-[38px] mr-1"
                              alt=""
                            />
                          )}
                        </span>
                        {code && (
                          <MdOutlineCancel
                            onClick={() => setValue("code", "")}
                            className="right-element !mr-[100px]"
                          />
                        )}
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
                    {/* name field */}
                    <div className="my-5">
                      <div className="input-control">
                        <BiUserCircle className="left-element" />
                        <input
                          type="text"
                          placeholder="用户名"
                          {...register("name", {
                            required: "name is required",
                          })}
                        />
                        {name && (
                          <MdOutlineCancel
                            onClick={() => setValue("name", "")}
                            className="absolute right-0 mr-3 text-light text-xl"
                          />
                        )}
                      </div>
                      {errors.name && (
                        <div className="error-element">
                          {errors.name.message}
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

                    {/* remember field */}
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

                {/* submit button */}
                <div className="my-5">
                  <button
                    disabled={!isValid}
                    className={`w-full py-3 rounded-full flex items-center justify-center ${
                      !isValid
                        ? "bg-opacity-90 bg-primary-light"
                        : "bg-primary bg-opacity-80"
                    }`}
                  >
                    {!loading && loading != "login" && "登录"}
                    {loading && loading == "login" && (
                      <ImSpinner3 className="animate-spin text-2xl" />
                    )}
                  </button>
                </div>

                <Link to="/" className="my-5 text-center text-xs block">
                  先去逛逛
                </Link>
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

      {/* code modal */}
      <CodeModal
        open={modal}
        onClose={() => setModal(false)}
        setTimer={setTimer}
      />
    </>
  );
};

export default Login;
