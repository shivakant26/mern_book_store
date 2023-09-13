import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBlog } from "../../redux/blogSlice";

const Blog = ({ id }) => {
  const dispatch = useDispatch();
  const { allBlog } = useSelector((state) => state?.blog);
  
  useEffect(() => {
    dispatch(getallBlog());
  }, [dispatch]);

  return (
    <>
      <div className="blog_section" id={id}>
        <div className="center_wr">
          <div className="section_heading">
            <h3>From Our Blog</h3>
          </div>
          <div className="blog_crd_group d-flex">
            {allBlog?.data?.length > 0 ? (
              <>
                {allBlog?.data?.map((blog, index) => {
                  return (
                    <div className="blog_card" key={index}>
                      <div className="blog_card_image">
                        <img
                          src={require("../../assets/images/blog_one.jpg")}
                          alt="blog_one"
                        />
                        <div className="publish_date">19 january 2021</div>
                      </div>
                      <div className="blog_card_content">
                        <h3>{blog.blogTitle}</h3>
                        <p>{blog.description}</p>
                        <a href="#javascript">read more</a>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p>Currently No Blog Available</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
