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
          <h1 className="text-center">登录</h1>

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

// data: '�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000t\u0000\u0000\u0000$\b\u0006\u0000\u0000\u0000X\u0014\u001e�\u0000\u0000\u0000\u0004gAMA\u0000\u0000��\u000b�a\u0005\u0000\u0000\u0000\u0001sRGB\u0000��\u001c�\u0000\u0000\u0000 cHRM\u0000\u0000z&\u0000\u0000��\u0000\u0000�\u0000\u0000\u0000��\u0000\u0000u0\u0000\u0000�`\u0000\u0000:�\u0000\u0000\u0017p��Q<\u0000\u0000\t\u001eIDATx��yP��\u001d�?,�ܗ��6  (HU��H�\nb�\u0012���`:զvluL4�H\u001a�5�j�zLS�x���8�D�1Z\u001c���xD�\u0007 "7��,��E� ����ˮ�X>3;�\\��y����y~���RR���^^\u0018$�=�^�K��/\u0000���ҧ��8�^\u001c�PH\u001dҝ�ߑ��D�.\u0016Sp��{w���}��\u001a_?\u000f��\u0003\u0019\u0017\u001f�쟍�?��\u001b�݋)����6os��k\u000f�h�V������LK�q��z\u0011���\u00172��i�L�\u00173,,��q!�\u0014�\u0017OO\u001955O9�{�������ظᨠ��I���9��aT����<\f��!���/�_���!��*5\u001a-�-*\u001e��\u0003Ч����L\u00056���+\u000e1\u001ei�\u0014�(&������\u0013���C\n��P_/G�����Xpl͛{�\u0016ƚ�:\\�\u001c,��:Ǿ/�\u0001�\u001d\u000b\u0018=&ԦaéV^^�܅�m^c�����<�Bf\u0012�3���&��\u001bf\n^+j��b���x,JPS1���קw4�\u0017ӭ�\'�Ș����\u0005\u001bsD]o�C?X�5W.?\u0000`חo\u0013\u0019\u0015d�\u0000��%�.M�X\'��B��͖�0� �\u0011,\to�nO���Z+\u0017l��I�3��\t6<���\n�\u0016�\u0002\u0010\u0019\u0015d���\u0004D�2$m1\u0005[V\u0002�V��V��:Ə����H��M��Qt\u0017b�Ik\b\n�Ԥ`ӧ�hkk��Ņ�˧;�\u0011�{@ \u0003\u0013f0v�6\u0000�j5�&n�}\u0003M\u000f��:w��ѯ�\u0017\u0011\r�{�i��p�\u0015���8F|t\u0010\'�nۢ�j��u�\u000fQY�\u0000��_M$n��uS,\u0003\u0013f\u0018�\u0015u�4\u0014���˜Y�F@d,Cӗ\u00124~�Q;ӛ/$FO�^�j�,ٚ˓��fb:�:��P�F��5G8{�.\u0000�Ӈ��O^G"q\u00114`\r��3x�\u0014Ư�\u0014l�ll��p\u0016�\u0007�\u0002\u0010�<�Q�폌�Q�[��CeT_o��\u0002�R������~\f�\u0012L���x�uwj�:�j��_w�b�51�Y?��C�\u001a-\u001b�\u001dՋ9eZ4\u001f�N鴘���߇���q�P\u0016mZ-e9\u0007\u0018�l-.\u0012�\u001f\b��j���Q�[cV�Z������Ku\\�UH�ֱ�M\u001b�p�����,�4E��h�h�lX{�3�w\u0000xu�0>Y���\u0001Bg\u0018��C/�=��b��;�z1�|e�[6�ٙ��ٗ��O�\b��\u0003�≒�K.Q��)��0�bg��:վ!�5\u001f\u001f��\u0015Ν)\u0004`��X�~\u000e�n\u0010\u0013 xb"�s\u0016r�P\u0016\u000f��g���\u0004���i{�W\u001f��j\u0000�\u0007x��ѩx��0j3�p�m���=EhUZ��z��_��+\u000b!�\u0015\t�k\u0005�\t�SP�R���_��\u0017\u001a�9�5\u001b�OL\u001dC��\u0006�T\u0006@����\u0018*���鸅\u0011fb꘰2\u0006W���]�_�P���׺\t?�i���r�g�7�hQ���G�����s�i�h���D��d�u�rg�\u001e�\u000f��#h��\n��\nP66��ߧS��-\u001d7�/T���K�g?w�U��Z����\b\u001dە��\u0005��)(ק�}s��}\u0003��m瑶�f�0[/-�i\u000f�;"EG����w\u000b��|\u0005��U�̶9b�{���+/\u0003���S�,���Nժaw�14J-������v�%td\u0007\u001d�\u0015��� \u0012F\f2j+$b���]\u0011.���[��X�$�~;\u0000��jQF,q��"�m\u0007��z{��Gb˛������N�!"y ����=�����I\u000b�3�|[���6\u001ae�3ᑿ���\u000fko\u000fX�Q�ª\u0017�gs�1���[C�\u0000�m:n��\u001bo���e�@�(�\u0004��ц���k�G�Ԩ�w>�yKI�5��K.�T��?��e�!�\u001f��Ʋ\u0016�\u001c(��r�:;n�0�!�\u0000Ehj�EI�S�2C\u0011\u001dEz�l\u0006��7��@ȻL�홲\rۦ\u001eLF�h��U�͖.\u0011̀�}I?�ȍ�\u000f���������\f�\u001a̸?\feP|�M{�y�l�3\u00054E\np�l��\r���U��\n\u0006T��ׅ�l;\u0012�\nJs_�4W�T-D��\n�\u001e.C�l9�);�\b��+>\u0003��\u000b�\u0012��\f1�\u001d{�a�.{��P\f�ެ�q\r\u0016jgK`���\u0013��)ή\u0000 <i �\u0017G�?6\u0000��+M�-\u0014gW���\u001d�OVR�_GP��E[�����u��(]"��I��zCa:;U��3�\u001b<�\u0007\u0000mC\u0013\u0005�_5k?h�彩%z��:��\u0004���&�\u0017O�?B���\u0012�z\u0003�j\u0005\u0012�\n}y��d��[G�\\�Ȩ���kO�˦��zG�\u001e�j+�&Z�jyr�\u0006q�o���>�\u000e�\u0001:^�\b���čY��#��XL�V���T���|���>/��r��>,5V�.��Q�S�\u0012�(\u0015Fea)\u000b\u00188������\u001eM���\u0003�d\u000e=�V݆w�\u0007o_�e���\u001e��O���2\u000f5\u00147{�X�^��|��\r����I\u0000�#bh���\u0019i�.��ӏ�tB��x�DNs��ǅM��)bz�S��K ���\u001b��a���G���g�Y\u0007\n��E\u0007v\u00134f2~\u0011���皽��Y"^\u001bĕ��\u0000Hٖg�mzv����_Ơ�~N�;�\u0011�>���;}�Yb\u0002|XZ\r��\u0004��&EQ�]Iɩ*}YªX�\u001e�N\u001bCW�#\u0004u\u0006������쎙B"���ÉM\u000fw�غ\u0012Qo��\u0004&-=�\u000fRt�]�L\u0012-dVr\u0014E\'*yt�\u0011��g�Umx�J\t\b��\'/�g��������=���\t\t�y.�M�\u001fP�֎3ю\u0000\u0000\u0000\u0000IEND�B`�';
