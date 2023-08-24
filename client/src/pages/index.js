import React from "react";
import BookCategory from "../component/home/BookCategory";
import About from "../component/home/About";
import WhatSay from "../component/home/WhatSay";
import Blog from "../component/home/Blog";
import ContactUs from "../component/home/Contactus";
import Banner from "../component/home/Banner";
import { Link } from "react-router-dom";
import BestBookSeller from "../component/home/BestBookSeller";

const HomePage = () => {
  return (
    <>
      <div className="crediential_btn">
        <Link to="/login" className="read_more loggedin_btn">
          Login
        </Link>
      </div>
      <Banner />
      <BookCategory id="category" />
      <About id="about" />
      <BestBookSeller />
      <WhatSay />
      <Blog id="blog" />
      <ContactUs id="contactus" />
    </>
  );
};

export default HomePage;
