import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Register from "../../Register";
import InputField from "../../common/InputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetResp, updateAuthor } from "../../../redux/authSlice";
import Swal from "sweetalert2";

const UpdateAuthor = ({ show, setShow, editData }) => {
 
  const dispatch = useDispatch();
  const { updateAuthors } = useSelector((state) => state?.auth);
  console.log(123123, updateAuthors);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (editData) {
      setValue("fullName", editData.fullName);
      setValue("email", editData.email);
      setValue("password", editData.password);
      setValue("gender", editData.gender);
    }
  }, [editData]);

  useEffect(() => {  
    if (updateAuthors?.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${updateAuthors?.data?.message}`,
      });
      dispatch(resetResp());
      setShow(false)
    } else {
    }
  }, [updateAuthors , dispatch]);

  const onSubmit = (data) => {
    data["_id"] = editData?._id;
    dispatch(updateAuthor(data));
    reset();
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body className="md_update">
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
            {/* <div className="form_field">
              <InputField
                id="password"
                type="text"
                placeholder="Password"
                register={register("password", {
                  required: "Password is required *",
                })}
                error={errors.password}
              />
            </div> */}
            <div className="form_field radio_btn">
              <label className="lable_ctrl">
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
              <label className="lable_ctrl">
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
                <p className="error radio_error">{errors.gender.message}</p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              className="send_btn"
              type="submit"
            >
              Update User
            </Button>
            <Button
              variant="secondary"
              style={{ width: "100%" }}
              onClick={() => setShow(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateAuthor;
