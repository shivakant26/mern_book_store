import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouteLink } from "react-router-dom";
import { MenuLinkData } from "../../utils/constent";

const Menu = ({ userAuth }) => {
  const [showMenu, setShowMenu] = useState(false);
  const currentUser = sessionStorage.getItem("user-email")
  const userLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"
  };

  return (
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
            <span className="users">{currentUser?.charAt(0)}</span>
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
  );
};

export default Menu;
