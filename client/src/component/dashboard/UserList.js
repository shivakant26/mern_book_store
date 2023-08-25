import { useEffect, useState } from "react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUsers, deleteAuthor, resetResp } from "../../redux/authSlice";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";
import UpdateAuthor from "./model/UpdateAuthor";

const UserList = () => {
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState();
  const dispatch = useDispatch();
  const { allUser, error, delAuthor } = useSelector((state) => state?.auth);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch, delAuthor]);

  useEffect(() => {
    if (delAuthor?.status === 200) {
      Swal.fire({
        icon: "error",
        text: `${delAuthor?.data?.message}`,
      });
      dispatch(resetResp());
    } else {
    }
  }, [delAuthor]);

  const removeAuthor = (id) => {
    dispatch(deleteAuthor(id));
  };

  const editUser = (item) => {
    setShow(true);
    setEditData(item);
  };
  return (
    <>
      {show && (
        <UpdateAuthor show={show} setShow={setShow} editData={editData} />
      )}
      <div className="dash_heading d-flex">
        <h2>User List</h2>
      </div>
      <div className="bk_table table-container">
        <Table striped bordered>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser?.data?.data?.length > 0 ? (
              <>
                {allUser?.data?.data?.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>Active</td>
                      <td className="d-flex td_gap">
                        <span
                          className="edit_btn"
                          onClick={() => editUser(item)}
                        >
                          <FaEdit />
                        </span>
                        <span
                          className="delete_btn"
                          onClick={() => removeAuthor(item._id)}
                        >
                          <FaTrash />
                        </span>
                        <span className="view_btn">
                          <FaEye />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan={6} style={{ color: "red" }}>
                    No Record found !
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UserList;
