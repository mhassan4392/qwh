import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";
import { useDispatch } from "react-redux";
import authenticate from "@/store/features/auth/authenticate";

const App = () => {
  // const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    Axios({ url: "/page/load", method: "POST" }).then((res) =>
      console.log(res)
    );
  }, []);
  return (
    <div className="h-screen overflow-x-hidden">
      <AllRoutes />
    </div>
  );
};

export default App;
