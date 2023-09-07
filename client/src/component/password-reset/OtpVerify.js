import { useForm, Controller } from "react-hook-form";
import React, { useRef } from "react";

const OtpVerifySec = ({ otpVerification }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const onSubmit = (data) => {
    const otpValue = {
      otp: data.otp1 + data.otp2 + data.otp3 + data.otp4,
    };
    console.log(otpValue);
    otpVerification(otpValue);
  };

  const handleInputChange = (index, e) => {
    if (e.target.value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (!e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");
    if (pastedText.length === 4 && /^\d+$/.test(pastedText)) {     
      const otpArray = pastedText.split("");
      inputRefs.forEach((ref, index) => {
        ref.current.value = otpArray[index];
      });
    } else {
      inputRefs.forEach((ref) => {
        ref.current.value = "";
      });
    }
  };

  return (
    <>
      <div className="send_otp">
        <p className="tx-left mb-20">Enter OTP:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_field">
            <div className="otp-input-container">
              {inputRefs.map((inputRef, index) => (
                <Controller
                  key={index}
                  name={`otp${index + 1}`}
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "OTP digit is required *",
                    pattern: {
                      value: /^\d$/,
                      message: "Please enter a valid digit",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      ref={(el) => {
                        inputRef.current = el;
                        field.ref(el);
                      }}
                      type="text"
                      placeholder="0"
                      maxLength="1"
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange(index, e);
                      }}
                      onPaste={handlePaste}
                    />
                  )}
                />
              ))}
              <div className="error" style={{ top: "45px", left: "18px" }}>
                {errors.otp1 || errors.otp2 || errors.otp3 || errors.otp4 ? (
                  <p>Please fill full OTP digits</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="form_field">
            <button className="send_btn" type="submit">
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpVerifySec;
