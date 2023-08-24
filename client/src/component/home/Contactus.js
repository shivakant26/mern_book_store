import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";

const ContactUs = ({ id }) => {
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
      <div className="contact_us_section layout_padding" id={id}>
        <div className="center_wr">
          <div className="constact_us">
            <div className="constact_us_form">
              <div className="section_heading">
                <h3>Contact Us</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_field">
                  <InputField
                    id="username"
                    type="text"
                    placeholder="Name"
                    register={register("name", {
                      required: "Name is required *",
                    })}
                    error={errors.name}
                  />
                </div>
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
                <div className="form_field">
                  <InputField
                    id="phone"
                    type="tel" 
                    placeholder="Phone Number"
                    register={register("phone", {
                      required: "Phone is required *",
                      pattern: {
                        value: /^\d{10}$/, 
                        message: 'Invalid phone number',
                      },
                    })}
                    error={errors.phone}
                  />
                </div>
                <div className="form_field">
                  <textarea rows={8} placeholder="Message" />
                </div>
                <div className="form_field">
                  <button className="send_btn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="contact_us_image">
              <img
                src={require("../../assets/images/contact-img.png")}
                alt="contact_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
