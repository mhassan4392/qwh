import { useEffect, useState } from "react";

import Banner from "../components/pages/index/Banner";
import Features from "../components/pages/index/Features";
import StartModal from "../components/pages/index/Modal";
import Slider from "../components/pages/index/Slider";
import Navbar from "../components/pages/index/Navbar";
import Axios from "../utils/axios";

const Index = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Axios({ url: "/page/load", method: "POST" }).then((res) => {
      console.log(res);
      setData(res.data.info);
    });
  }, []);
  return (
    <div style={{ paddingBottom: "60px" }}>
      <header className="bg-white">
        <Navbar />
      </header>
      <StartModal ads={data?.PopUpAds || []} />
      <Slider slides={data?.Banner || []} />
      <Banner messages={data?.Message || []} />
      <Features />
    </div>
  );
};

export default Index;
