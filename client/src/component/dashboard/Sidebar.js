import { AiFillProfile } from "react-icons/ai";
import { BiLogOut, BiSolidUser } from "react-icons/bi";
import { BsBookHalf, BsJournalBookmarkFill } from "react-icons/bs";
import { SiDash } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link, useLocation } from "react-router-dom";

const SideBar = ({dShow , setDShow}) => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <div className={dShow ? "sidebar_short" : "sidebar"}>
        <div className="dwayer">
          <span onClick={() => setDShow(!dShow)}>
            <GiHamburgerMenu />
          </span>
        </div>
        <div className="sidebar_content">
          <div className="user_details">
            <img
              src={require("../../assets/images/profile.jpg")}
              alt="user_image"
            />
            <p>jhondoe@gmail.com</p>
          </div>
          <div className={dShow ? "drawyer_dash_menu" : "dash_menu"}>
            <ul>
              <li className={location.pathname === "/dashboard" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/dashboard">
                      <SiDash />
                    </Link>
                  ) : (
                    <SiDash />
                  )}
                </span>
                <span>
                  <Link to="/dashboard">Dashboard</Link>
                </span>
              </li>
              <li className={location.pathname === "/profile" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/profile">
                      <AiFillProfile />
                    </Link>
                  ) : (
                    <AiFillProfile />
                  )}
                </span>
                <span>
                  <Link to="/profile">Profile</Link>
                </span>
              </li>
              <li className={location.pathname === "/add-book" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/add-book">
                      <BsBookHalf />
                    </Link>
                  ) : (
                    <BsBookHalf />
                  )}
                </span>
                <span>
                  <Link to="/add-book">Add Book</Link>
                </span>
              </li>
              <li className={location.pathname === "/book-list" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/book-list">
                      <BsJournalBookmarkFill />
                    </Link>
                  ) : (
                    <BsJournalBookmarkFill />
                  )}
                </span>
                <span>
                  <Link to="/book-list">Books</Link>
                </span>
              </li>
              <li className={location.pathname === "/user-list" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/user-list">
                      {" "}
                      <BiSolidUser />
                    </Link>
                  ) : (
                    <BiSolidUser />
                  )}
                </span>
                <span>
                  <Link to="/user-list">Users</Link>
                </span>
              </li>
              <li className={location.pathname === "/logout" ? "active" :""}>
                <span>
                  {dShow ? (
                    <Link to="/logout">
                      {" "}
                      <BiLogOut />
                    </Link>
                  ) : (
                    <BiLogOut />
                  )}
                </span>
                <span>
                  <Link to="/logout">Logout</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
