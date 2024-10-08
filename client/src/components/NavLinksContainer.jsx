import React from "react";
import NavLinks from "./NavLink";
import BuyMeACoffeeButton from "./BuyMeACoffeeButton";

const NavLinksContainer = ({ chatLog, setChatLog }) => {
  return (
    <div className="navLinks" style={{ position: "absolute", bottom: "10px" }}>
      <NavLinks
        svg={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            style={{ marginLeft: "4px" }}
          >
            <path
              d="m16 17 5-5m0 0-5-5m5 5H9m0-9H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21H9"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        text="Log out"
        link=""
      />
    </div>
  );
};

export default NavLinksContainer;
