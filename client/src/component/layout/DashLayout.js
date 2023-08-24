import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../dashboard/Sidebar";
import {FaBell} from "react-icons/fa";

const DashBoardLayout = () => {
  const [dShow, setDShow] = useState(false);
  const location = useLocation();
  return (
    <>
      <div className="dashboard_page">
        <div className="dash_header">
          <div className="center_wr">
            <div className="dash_inner d-flex">
              <h2>Dashboard</h2>
              <div className="right_menu d-flex">
                <span>one</span>
                <span><FaBell /></span>
                <span><img src={require("../../assets/images/profile.jpg")} alt="profile_img"/></span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard_section d-flex">
          <SideBar dShow={dShow} setDShow={setDShow} />
          <div className={dShow ? "dash_content_large" : "dash_content"}>
            <div className="breadcamb">
              Dashboard / {location.pathname.replace("/", "")}
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoardLayout;
