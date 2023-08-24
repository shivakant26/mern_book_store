const About = ({id}) => {
  return (
    <>
      <div className="about_store_section" id={id}>
        <div className="center_wr">
          <div className="about_book">
            <div className="right_sec">
              <img
                src={require("../../assets/images/about-img.png")}
                alt="about_image"
              />
            </div>
            <div className="left_sec abt_content section_heading">
              <h3>About Our Bookstore</h3>
              <p>
                At cumque tenetur iste molestiae, vel eum reiciendis assumenda!
                Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam,
                amet doloribus eius dolores officiis cumque? Quibusdam
                praesentium pariatur sapiente mollitia, amet hic iusto voluptas!
                Iusto quo earum vitae excepturi, ipsam aliquid deleniti
                assumenda culpa deserunt.
              </p>
              <a className="read_more" href="#javascript">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
