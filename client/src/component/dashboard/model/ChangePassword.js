import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import ResetPassword from "../../password-reset/ResetPassword";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, resetResp } from "../../../redux/authSlice";
import Swal from "sweetalert2";


const ChangePassword = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { updatePassword ,error } = useSelector((state) => state?.auth);

  const {
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (updatePassword?.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${updatePassword?.data?.message}`,
      });
      dispatch(resetResp());
      setShow(false);
    } else if(error?.status === 400) {
      Swal.fire({
        icon: "error",
        text: `${error?.data?.message}`,
      });
      dispatch(resetResp());
      setShow(false);
    }else{

    }
  }, [updatePassword, error]);

  const modifyPassword = (data) => {
    let object = data;
    delete object.cPassword;
    dispatch(changePassword(object));
    reset();
  };

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="md_update">
          <ResetPassword
            identity="admin-pass"
            modifyPassword={modifyPassword}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePassword;
