import { useState, useEffect } from "react";
import login_icon from "@/assets/images/entry/login_icon.webp";
import { BiUserCircle } from "react-icons/bi";
import { ImSpinner3 } from "react-icons/im";
import {
  AiOutlineUnlock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Axios from "@/utils/axios";

import { useSelector, useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import Alert from "../../components/Alert/Alert";

import userRegister from "../../store/features/auth/register";

const Register = () => {
  useEffect(() => {
    Axios({
      url: "/SignUp/validCode",
      method: "POST",
      responseType: "blob",
    }).then((res) => {
      const url = URL.createObjectURL(res.data);
      setCodeImage(url);
    });
  }, []);
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [codeImage, setCodeImage] = useState(false);

  const {
    register,
    watch,
    formState: { errors, isValid },
    setValue,
    handleSubmit,
    setError,
  } = useForm({ mode: "onChange" });

  const { username, code } = watch();

  const submitForm = handleSubmit((data) => {
    if (data.password != data.confirmPassword) {
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords not matched",
      });
    } else {
      console.log(data);
      dispatch(
        userRegister({
          accountName: data.username,
          pasw: data.password,
          code: data.code,
          navigate,
        })
      );
    }
  });

  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
      <div className="flex text-white mx-4">
        <Link
          to="/entry/login"
          className="shrink-0 flex flex-col items-center justify-center px-3 rounded-l-lg bg-white bg-opacity-30"
        >
          <img src={login_icon} className="w-6 mb-3" alt="" />
          <span>返</span>
          <span>回</span>
          <span>登</span>
          <span>录</span>
          <span></span>
        </Link>
        <div className="grow bg-black bg-opacity-40 rounded-r-lg py-6 px-4 h-[480px] flex flex-col justify-between">
          <h1 className="text-center">注册</h1>

          <form onSubmit={submitForm}>
            {/* Error */}
            <Alert
              error={error?.message || ""}
              open={error && error.type == "register"}
            />

            {/* username field */}
            <div className="my-5">
              <div className="input-control">
                <BiUserCircle className="left-element" />
                <input
                  type="text"
                  placeholder="用户名"
                  className="!bg-white !bg-opacity-30"
                  {...register("username", {
                    required: "username is Required",
                  })}
                />
                {username && (
                  <MdOutlineCancel
                    onClick={() => setValue("username", "")}
                    className="right-element"
                  />
                )}
              </div>
              {errors.username && (
                <div className="error-element">{errors.username.message}</div>
              )}
            </div>

            {/* password field */}
            <div className="my-5">
              <div className="input-control">
                <AiOutlineUnlock className="left-element" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="密码"
                  className="!bg-white !bg-opacity-30"
                  {...register("password", { required: "Password is Requred" })}
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
                <div className="error-element">{errors.password.message}</div>
              )}
            </div>

            {/* confirm password field */}
            <div className="my-5">
              <div className="input-control">
                <AiOutlineUnlock className="left-element" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="确认密码"
                  className="!bg-white !bg-opacity-30"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                />
                {!showConfirmPassword && (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowConfirmPassword(true)}
                    className="right-element"
                  />
                )}
                {showConfirmPassword && (
                  <AiOutlineEye
                    onClick={() => setShowConfirmPassword(false)}
                    className="right-element"
                  />
                )}
              </div>
              {errors.confirmPassword && (
                <div className="error-element">
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {/* code field */}
            <div>
              <div className="input-control">
                <IoLanguage className="left-element" />
                <input
                  type="text"
                  placeholder="验证码"
                  className="!bg-white !bg-opacity-30 !pr-[125px]"
                  {...register("code", { required: "Code is required" })}
                />
                <span className="right-element">
                  {codeImage && (
                    <img
                      src={codeImage}
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
                <div className="error-element">{errors.code.message}</div>
              )}
            </div>

            <div className="my-5">
              <button
                disabled={!isValid}
                className={`w-full py-3 rounded-full flex items-center justify-center ${
                  !isValid
                    ? "bg-opacity-90 bg-primary-light"
                    : "bg-primary bg-opacity-80"
                }`}
              >
                {loading != "register" && "登录"}
                {loading == "register" && (
                  <ImSpinner3 className="animate-spin text-2xl" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
