import { useState } from "react";
import { Outlet } from "react-router-dom";
import FooterLinks from "../components/layouts/FooterLinks";
import Navbar from "../components/layouts/Navbar";

const Layout = () => {
  const [paddingBottom, setPaddingBottom] = useState(0);
  return (
    <div
      className="h-full relative bg-light bg-opacity-25 overflow-y-auto"
      style={{ paddingBottom: "100px" }}
    >
      <header className="bg-white">
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
      <FooterLinks setPaddingBottom={setPaddingBottom} />
    </div>
  );
};

export default Layout;
