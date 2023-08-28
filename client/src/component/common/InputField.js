import React from "react";

const InputField = ({
  id,
  type,
  name,
  register,
  placeholder,
  inputMode,
  error,
  onChange,
  label
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        inputMode={type === "tel" ? "numeric" : undefined}
        placeholder={placeholder}
        {...register}
      />{label}
      <p className="error">{error?.message}</p>
    </>
  );
};

export default InputField;
