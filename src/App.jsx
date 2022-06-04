import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";
import { useDispatch, useSelector } from "react-redux";
import authenticate from "@/store/features/auth/authenticate";
import { ToastContainer } from "react-toastify";
import { setShowPopupAds } from "./store/features/config/configSlice";
import getConfig from "./store/features/config/getConfig";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      Axios.defaults.headers.common["Authorization"] = user.Session;
    }
    dispatch(getConfig());
    dispatch(setShowPopupAds(true));
  }, []);
  return (
    <div className="h-screen overflow-x-hidden">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
