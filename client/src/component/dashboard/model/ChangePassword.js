// import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputField from "../../common/InputField";
import { useForm } from "react-hook-form";
import ResetPassword from "../../password-reset/ResetPassword";
// import { useDispatch, useSelector } from "react-redux";
// import { resetResp, updateAuthor } from "../../../redux/authSlice";
// import Swal from "sweetalert2";

const ChangePassword = ({ show, setShow }) => {
  //   const dispatch = useDispatch();
  //   const { updateAuthors } = useSelector((state) => state?.auth);
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm();

  //   useEffect(() => {
  //     if (editData) {
  //       setValue("fullName", editData.fullName);
  //       setValue("email", editData.email);
  //       setValue("password", editData.password);
  //       setValue("gender", editData.gender);
  //     }
  //   }, [editData]);

  const modifyPassword = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <form onSubmit={handleSubmit(modifyPassword)}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body className="md_update">
            <ResetPassword
              identity="admin-pass"
              modifyPassword={modifyPassword}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              className="send_btn"
              type="submit"
            >
              Password Changed
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

export default ChangePassword;
