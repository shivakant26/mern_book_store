import { useState } from "react";
import { Table } from "react-bootstrap";
import ChangePassword from "./model/ChangePassword";

const Profile = () => {
  const [aStatus, setAStatus] = useState(1);
  const [show, setShow] = useState(false);

  const updatePassword = () =>{
    setShow(true)
  }

  return (
    <>
      {show && <ChangePassword show={show} setShow={setShow} />}
      <div className="dash_heading d-flex">
        <h2>Profile</h2>
      </div>
      <div className="users_details">
        <Table>
          <tbody>
            <tr>
              <th>FullName</th>
              <td>Admin</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>Admin@gmail.com</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>male</td>
            </tr>
            <tr>
              <th>Activity Status</th>
              <td className={aStatus === 1 ? "active-color" : "inActive"}>
                active
              </td>
            </tr>
            <tr>
              <th>Change Password</th>
              <td>
                <button className="add_new_btn" onClick={updatePassword}>Change Password</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Profile;
