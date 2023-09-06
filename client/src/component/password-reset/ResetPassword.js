import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useState } from "react";

const ResetPassword = ({ passwordReset, identity , modifyPassword }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();
  const [passwordType, setPasswordType] = useState("password");
  const [cpasswordType, setCPasswordType] = useState("password");
  return (
    <>
      <div className="password_reset">
        <h4 className="tx-left mb-20">Enter Password</h4>
        <form  onSubmit={identity === "mobile-pass" ? "" : handleSubmit(passwordReset)}>
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
            <input
              type={passwordType}
              autoComplete="off"
              placeholder="password"
              {...register("newPassword", {
                required: true,
              })}
            />
            {errors?.newPassword?.type === "required" && (
              <p className="error">Password Required*</p>
            )}
          </div>
          <div className="form_field">
            <input
              type={cpasswordType}
              autoComplete="off"
              placeholder="confirm password"
              {...register("cPassword", {
                required: true,
                validate: (val) => {
                  if (watch("newPassword") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors?.cPassword?.type === "required" && (
              <p className="error">Confirm Password Required*</p>
            )}
            {errors?.cPassword?.type === "validate" && (
              <p className="error">Password Not match</p>
            )}
          </div>
          {identity === "admin-pass" ? (
            ""
          ) : (
            <>
              <div className="form_field">
                <button className="send_btn" type="submit">
                  password Reset
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
