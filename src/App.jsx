import { useEffect } from "react";
import AllRoutes from "./routes";
import Axios from "./utils/axios";

const App = () => {
  useEffect(() => {
    Axios({
      url: "/member/signin",
      method: "POST",
      data: {
        merchantId: 0,
        name: "Hassan",
        password: "hassan12345",
        validCode: "1234",
      },
    }).then((res) => console.log(res));
  }, []);
  return (
    <div className="h-screen overflow-x-hidden">
      <AllRoutes />
    </div>
  );
};

export default App;
