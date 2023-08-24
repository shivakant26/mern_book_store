import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom"; // Import the RouteLink
import { MenuLinkData } from "../../utils/constent";

const Menu = () => {
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
                <RouteLink to={menuItem.routePath}>{menuItem.labelName}</RouteLink>
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
      </ul>
    </>
  );
};

export default Menu;
