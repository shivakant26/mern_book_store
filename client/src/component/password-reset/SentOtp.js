import { useForm } from "react-hook-form";
import InputField from "../common/InputField";

const SentOtp = ({sendOtpMail}) => {
    const {
        handleSubmit,
        formState: { errors },
        register,
      } = useForm();
  return (
    <>
      <div className="send_otp">
        <h3 className="tx-left mb-20">Get OTP</h3>
        <p className="tx-left mb-20">
          Please enter your email address to receive a One-Time Password (OTP).
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
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SentOtp;
