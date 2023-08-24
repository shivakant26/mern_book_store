import { useForm } from "react-hook-form";
import InputField from "./common/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetResp } from "../redux/authSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerData , loading , error } = useSelector((state)=>state?.auth)
  console.log(123456,registerData , loading , error) 


  useEffect(() => {
    if (registerData?.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${registerData?.data?.message}`,
      })
      dispatch(resetResp());
      navigate("");
    }else if(error?.status === 400){
      Swal.fire({
        icon: "error",
        text: `${error?.data?.message}`,
      })
      dispatch(resetResp());
    }else{

    }
  },[registerData , error , dispatch , navigate]);

  const onSubmit = (data) => {
    dispatch(registerUser(data))
    reset();
  };

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
              <h3>Register</h3>
              <div className="login_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_field">
                    <InputField
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      register={register("fullName", {
                        required: "fullName is required *",
                      })}
                      error={errors.fullName}
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
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        {...register("gender", {
                          required: "Gender is required",
                        })}
                      />
                      Female
                    </label>
                  {errors.gender && (
                    <p className="error">{errors.gender.message}</p>
                  )}
                  </div>
                  <div className="form_field">
                    <button className="send_btn" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <p>
                  If you have an existing account, please{" "}
                  <Link to="/login" className="rtk_link">
                    log in
                  </Link>{" "}
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
