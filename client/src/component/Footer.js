import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import MyGooglemap from '../component/GoogleMap';
import InputField from "./common/InputField";
import { useForm } from "react-hook-form";
const Footer = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="footer_section">
        <div className="center_wr">
          <div className="footer">
            <div className="about_us_col c-width">
              <h5>About Us</h5>
              <p>
                Vitae aut explicabo fugit facere alias distinctio, exem commodi
                mollitia minusem dignissimos atque asperiores incidunt vel
                voluptate iste
              </p>
              <div className="social_icon_grp">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="address_col c-width">
              <h5>Address</h5>
              <div className="add_row">
                <span>
                  <ImLocation2 />
                </span>
                <span>Location</span>
              </div>
              <div className="add_row">
                <span>
                  <BsTelephoneFill />
                </span>
                <span>Call+01 01234567890</span>
              </div>
              <div className="add_row">
                <span>
                  <GrMail />
                </span>
                <span>demo@gmail.com</span>
              </div>
            </div>
            <div className="newslatter_col c-width">
              <h5>Newsletter</h5>
              <form className="subs_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form_field">
                  <InputField
                    id="email"
                    type="text"
                    placeholder="Email"
                    register={register("email", {
                      required: "Email is required *",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email}
                  />
                </div>
                <button className="read_more sub_btn" type="submit">Subscribe</button>
              </form>
            </div>
            <div className="map_col c-width">
              <MyGooglemap />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="center_wr">
          <p>© 2023 All Rights Reserved By Free Html Templates</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
