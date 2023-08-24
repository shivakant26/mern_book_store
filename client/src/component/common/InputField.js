import React from "react";

const InputField = ({
  id,
  type,
  name,
  register,
  placeholder,
  inputMode,
  error,
  label
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        inputMode={type === "tel" ? "numeric" : undefined}
        placeholder={placeholder}
        {...register}
      />{label}
      <p className="error">{error?.message}</p>
    </>
  );
};

export default InputField;
