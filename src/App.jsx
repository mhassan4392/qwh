import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";
import { useDispatch } from "react-redux";
import authenticate from "@/store/features/auth/authenticate";
import { ToastContainer } from "react-toastify";
import { setShowPopupAds } from "./store/features/load/loadSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
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
