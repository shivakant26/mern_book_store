import React from "react";
import BookCategory from "../component/home/BookCategory";
import About from "../component/home/About";
import WhatSay from "../component/home/WhatSay";
import ContactUs from "../component/home/Contactus";
import Banner from "../component/home/Banner";
import { Link } from "react-router-dom";
import BestBookSeller from "../component/home/BestBookSeller";
import Fade from "react-reveal/Fade";
import Blog from "../component/blog/Blog";
const HomePage = () => {
  return (
    <>
      <div className="crediential_btn">
        <Link to="/login" className="read_more loggedin_btn">
          Login
        </Link>
      </div>
      <Fade bottom>
        <Banner />
      </Fade>
      <Fade bottom>
        <BookCategory id="category" />
      </Fade>
      <Fade bottom>
        <About id="about" />
      </Fade>
      <Fade bottom>
        <BestBookSeller />
      </Fade>
      <Fade bottom>
        <WhatSay />
      </Fade>
      <Fade bottom>
        <Blog id="blog" />
      </Fade>
      <Fade bottom>
        <ContactUs id="contactus" />
      </Fade>
    </>
  );
};

export default HomePage;
