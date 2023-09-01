import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouteLink, useNavigate } from "react-router-dom"; // Import the RouteLink
import { MenuLinkData } from "../../utils/constent";

const Menu = ({ userAuth }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const userLogout = () =>{
    localStorage.removeItem("token");
    setTimeout(()=>{
      window.location.href = "/"
    },1000)
  }

  return (
    <>
      <ul>
        {MenuLinkData?.map((menuItem, index) => {
          return (
            <li key={index}>
              {menuItem.isScrollLink ? (
                <ScrollLink
                  activeClass="active"
                  to={menuItem.labelName}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {menuItem.labelName}
                </ScrollLink>
              ) : (
                <RouteLink to={menuItem.routePath}>
                  {menuItem.labelName}
                </RouteLink>
              )}
            </li>
          );
        })}
        <li>
          <div className="search_field">
            <input
              className="serch_box"
              type="search"
              placeholder="Search here..."
            />
            <span className="search_icon">
              <FaSearch />
            </span>
          </div>
        </li>
        {userAuth && (
          <li className="current_users" onClick={() => setShowMenu(!showMenu)}>
            <span className="users">S</span>
            {showMenu && (
              <div className="user_submenus">
                <ul>
                  <li>
                    <Link onClick={userLogout}>Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        )}
      </ul>
    </>
  );
};

export default Menu;
