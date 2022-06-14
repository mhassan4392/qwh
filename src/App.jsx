import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { setShowPopupAds } from "./store/features/config/configSlice";
import getConfig from "./store/features/config/getConfig";
import { useCookies } from "react-cookie";
import { setLoading, setUser } from "./store/features/auth/authSlice";

const App = () => {
  const [cookies] = useCookies();

  const dispatch = useDispatch();

  useEffect(() => {
    // check if user exists in the cookie
    if (cookies.user) {
      // if user exists then set user in the store
      dispatch(setUser(cookies.user));
      dispatch(setLoading(false));
      Axios.defaults.headers.common["Authorization"] = cookies.user.Session;
    } else {
      // if user not exist then set user to null in the store
      dispatch(setUser(null));
      dispatch(setLoading(false));
    }

    // get configs
    dispatch(getConfig());
    // show popup ads
    dispatch(setShowPopupAds(true));
  }, []);
  return (
    <div className="h-screen overflow-x-hidden">
      <AllRoutes />
      {/* toast for messages */}
      <ToastContainer />
    </div>
  );
};

export default App;
