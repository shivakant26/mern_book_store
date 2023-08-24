import { useEffect } from "react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allUsers } from "../../redux/authSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { allUser, error } = useSelector((state) => state?.auth);

  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <>
      <div className="dash_heading d-flex">
        <h2>User List</h2>
      </div>
      <div className="bk_table table-container">
        <table>
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
                      <td>{index+1}</td>
                      <td>{item.fullName}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>Active</td>
                      <td className="d-flex td_gap">
                        <span className="edit_btn">
                          <FaEdit />
                        </span>
                        <span className="delete_btn">
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
                <td>No Record found !</td>
              </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
