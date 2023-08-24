import React, { useState } from "react";
import Menu from "./common/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bk_header">
        <div className="center_wr">
          <div className="header_sec">
            <div className="site_logo">
              <Link to="/">
                <h2>Book- Store</h2>
              </Link>
            </div>
            <div className="site_menu">
              <Menu />
            </div>
            <div className="mobile_menu">
              <button
                onClick={() => setOpen(!isOpen)}
                className={`hamburger-button ${isOpen ? "open" : "close"}`}
              />
              <div className={`panel ${isOpen ? "open" : "close"}`}>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
