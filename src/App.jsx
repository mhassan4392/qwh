import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";
import { useDispatch } from "react-redux";
import authenticate from "@/store/features/auth/authenticate";
import { ToastContainer } from "react-toastify";
import { setShowPopupAds } from "./store/features/config/configSlice";
import getConfig from "./store/features/config/getConfig";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
