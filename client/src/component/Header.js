import React, { useState } from "react";
import Menu from "./common/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token")
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="bk_header sticky">
        <div className="center_wr">
          <div className="header_sec d-flex">
            <div className="site_logo">
              <Link to="/">
                <h2>Book- Store</h2>
              </Link>
            </div>
            <div className="site_menu">
              <Menu userAuth={token} />
            </div>
            <div className="mobile_menu">
              <button
                onClick={() => setOpen(!isOpen)}
                className={`hamburger-button ${isOpen ? "open" : "close"}`}
              />
              <div className={`panel ${isOpen ? "open" : "close"}`}>
                <Menu userAuth={token} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
