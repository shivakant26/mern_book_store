import { useForm } from "react-hook-form";
import InputField from "./common/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetResp } from "../redux/authSlice";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [section, setSection] = useState(1);
  const { loginData, loading, error } = useSelector((state) => state?.auth);

  useEffect(() => {
    if (loginData?.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${loginData?.data?.message}`,
      });
      dispatch(resetResp());
      navigate("/dashboard");
    } else if (error?.status === 400) {
      Swal.fire({
        icon: "error",
        text: `${error?.data?.message}`,
      });
      dispatch(resetResp());
    } else {
    }
  }, [loginData, loading, error, dispatch, navigate]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  const forgotPassword = () => {
    setSection(2);
  };

  const sendOtpMail = () => {
    setSection(3);
  };

  const verifyOtp = () =>{
    setSection(4)
  }

  const passwordReset = (data) =>{
    console.log(data);
  }

  return (
    <>
      <div className="login_section">
        <div className="center_wr">
          <div className="login_page">
            <div className="left_sec">
              <img
                src={require("../assets/images/slider-img.png")}
                alt="about_image"
              />
            </div>
            <div className="right_sec">
              {section === 1 ? (
                <>
                  <h3>Login</h3>
                  <div className="login_form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form_field">
                        <InputField
                          id="email"
                          type="text"
                          placeholder="Email"
                          register={register("email", {
                            required: "Email is required *",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          error={errors.email}
                        />
                      </div>
                      <div className="form_field">
                        <InputField
                          id="password"
                          type="text"
                          placeholder="Password"
                          register={register("password", {
                            required: "Password is required *",
                          })}
                          error={errors.password}
                        />
                      </div>
                      <div className="form_field">
                        <button className="send_btn" type="submit">
                          {loading ? "loding..." : "Login"}
                        </button>
                      </div>
                    </form>
                    <p className="forgot_pwd" onClick={forgotPassword}>
                      forgot Password?
                    </p>
                    <p>
                      If you don't have an account, please{" "}
                      <Link to="/register" className="rtk_link">
                        {" "}
                        Register
                      </Link>{" "}
                      .
                    </p>
                  </div>
                </>
              ) : section === 2 ? (
                <>
                  <div className="send_otp">
                  <h3>Get OTP</h3>
                    <p>
                      Please enter your email address to receive a One-Time
                      Password (OTP). We'll send the OTP to this email for
                      verification.
                    </p>
                    <form onSubmit={handleSubmit(sendOtpMail)}>
                      <div className="form_field">
                        <InputField
                          id="email"
                          type="text"
                          placeholder="Email"
                          register={register("email", {
                            required: "Email is required *",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          error={errors.email}
                        />
                      </div>
                      <div className="form_field">
                        <button className="send_btn" type="submit">
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ): section === 3 ? (<>
              <div className="send_otp">
                  <p className="tx-left">Enter Otp :</p>
                    <form onSubmit={handleSubmit(verifyOtp)}>
                      <div className="form_field">
                        <InputField
                          id="otp"
                          type="text"
                          placeholder="OTP"
                          register={register("otp", {
                            required: "OTP is required *",
                          })}
                          error={errors.otp}
                        />
                      </div>
                      <div className="form_field">
                        <button className="send_btn" type="submit">
                          verify
                        </button>
                      </div>
                    </form>
                  </div>
              </>) : (<>
                <div className="password_reset">
                  <h3 className="tx-left">Enter Password</h3>
                    <form onSubmit={handleSubmit(passwordReset)}>
                    <div className="form_field">
                        <InputField
                          id="password"
                          type="text"
                          placeholder="Password"
                          register={register("password", {
                            required: "Password is required *",
                          })}
                          error={errors.password}
                        />
                      </div>
                      <div className="form_field">
                        <InputField
                          id="newPassword"
                          type="text"
                          placeholder="New Password"
                          register={register("newPassword", {
                            required: "newPassword is required *",
                          })}
                          error={errors.newPassword}
                        />
                      </div>
                      <div className="form_field">
                        <InputField
                          id="cpassword"
                          type="text"
                          placeholder="Confirm Password"
                          register={register("cpassword", {
                            required: "confirm Password is required *",
                          })}
                          error={errors.cpassword}
                        />
                      </div>
                      <div className="form_field">
                        <button className="send_btn" type="submit">
                          verify
                        </button>
                      </div>
                    </form>
                  </div>
              </>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
