import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import footer_links_1 from "@/assets/images/footer_links_1.webp";
import footer_links_1_transparent from "@/assets/images/footer_links_1_transparent.webp";
import footer_links_2 from "@/assets/images/footer_links_2.webp";
import footer_links_2_transparent from "@/assets/images/footer_links_2_transparent.webp";
import footer_links_3 from "@/assets/images/footer_links_3.webp";
import footer_links_3_transparent from "@/assets/images/footer_links_3_transparent.webp";

const FooterLinks = ({}) => {
  const links = [
    {
      title: "首页",
      image: footer_links_1,
      tr_image: footer_links_1_transparent,
      to: "/",
    },
    {
      title: "优惠",
      image: footer_links_2,
      tr_image: footer_links_2_transparent,
      to: "/promo/list",
    },
    {
      title: "我的",
      image: footer_links_3,
      tr_image: footer_links_3_transparent,
      to: "/mine",
    },
  ];
  const LinksRef = useRef(null);
  return (
    <>
      <div ref={LinksRef} className="fixed bottom-0 left-0 right-0">
        <div className="flex items-center justify-between bg-white px-6 py-2 rounded-t-3xl shadow-inner shadow-gray-200">
          {links.map((link, i) => (
            <NavLink key={i} to={link.to}>
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? link.image : link.tr_image}
                    className="w-8"
                    alt=""
                  />
                  <div className="text-sm text-center">{link.title}</div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
