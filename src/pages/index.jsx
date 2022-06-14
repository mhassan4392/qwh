import { useEffect, useState } from "react";

import Banner from "../components/pages/index/Banner";
import Features from "../components/pages/index/Features";
import AddModal from "../components/pages/index/AddModal";
import Slider from "../components/pages/index/Slider";
import Navbar from "../components/pages/index/Navbar";
import Axios from "../utils/axios";
import PageLoader from "../components/loading/PageLoader";
import { useSelector } from "react-redux";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(false);
  const { loading: configLoading } = useSelector((state) => state.config);
  useEffect(() => {
    Axios({ url: "/page/load", method: "POST" })
      .then((res) => {
        setData(res.data.info);
        setLoading(false);
      })
      .catch((err) => setLoading(false));

    Axios({ url: "/Game/login/Finance_FNH/0", method: "POST" }).then((res) => {
      let msg = JSON.parse(res.data.msg);
      if (res.data.msg) {
        const u = msg.url.replace("launch.html", "");
        setUrl(u);
        console.log(msg.url);
      }
    });
  }, []);
  return (
    <div style={{ paddingBottom: "60px" }}>
      <header className="bg-white">
        <Navbar />
      </header>
      {(loading || configLoading) && <PageLoader />}
      <AddModal loading={loading} ads={data?.PopUpAds || []} />
      <Slider slides={data?.Banner || []} />
      <Banner messages={data?.Message || []} />
      <Features />

      <div>
        {url && (
          <iframe
            src={url}
            style={{ width: "100vw", height: "600px", marginBottom: "50px" }}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Index;
