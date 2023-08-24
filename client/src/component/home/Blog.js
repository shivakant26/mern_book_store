const Blog = ({id}) => {
  return (
    <>
      <div className="blog_section" id={id}>
        <div className="center_wr">
          <div className="section_heading">
            <h3>From Our Blog</h3>
          </div>
          <div className="blog_crd_group">
            <div className="blog_card">
              <div className="blog_card_image">
                <img
                  src={require("../../assets/images/blog_one.jpg")}
                  alt="blog_one"
                />
                <div className="publish_date">19 january 2021</div>
              </div>
              <div className="blog_card_content">
                <h3>Eius, dolor? Vel velit sed doloremque</h3>
                <p>
                  Incidunt magni explicabo ullam ipsa quo consequuntur eveniet
                  illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic
                  debitis cupiditate, ad beatae voluptatem numquam dignissimos
                  ab porro
                </p>
                <a href="#javascript">read more</a>
              </div>
            </div>
            <div className="blog_card">
              <div className="blog_card_image">
                <img
                  src={require("../../assets/images/blog_one.jpg")}
                  alt="blog_one"
                />
                <div className="publish_date">19 january 2021</div>
              </div>
              <div className="blog_card_content">
                <h3>Eius, dolor? Vel velit sed doloremque</h3>
                <p>
                  Incidunt magni explicabo ullam ipsa quo consequuntur eveniet
                  illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic
                  debitis cupiditate, ad beatae voluptatem numquam dignissimos
                  ab porro
                </p>
                <a href="#javascript">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
