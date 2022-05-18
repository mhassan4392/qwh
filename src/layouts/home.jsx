import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterLinks from "../components/layouts/home/FooterLinks";
import Navbar from "../components/pages/index/Navbar";

const HomeLayout = () => {
  const [paddingBottom, setPaddingBottom] = useState(0);
  return (
    <div className="h-full relative bg-common-bg overflow-y-auto">
      {/* <div> */}
      <Outlet />
      {/* </div> */}
      <FooterLinks setPaddingBottom={setPaddingBottom} />
    </div>
  );
};

export default HomeLayout;
