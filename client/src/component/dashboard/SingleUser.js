import { Table } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

const SingleUser = () => {
  const id = useParams();
  const location = useLocation();
  const receivedItem = location.state.item;
  console.log(12121212121, receivedItem);
  return (
    <>
      <div className="dash_heading d-flex">
        <h2>Single User</h2>
        </div>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <th>User_ Id : </th>
              <td>{receivedItem?._id}</td>
            </tr>
            <tr>
              <th>Full Name : </th>
              <td>{receivedItem?.fullName}</td>
            </tr>
            <tr>
              <th>Email : </th>
              <td>{receivedItem?.email}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{receivedItem?.gender}</td>
            </tr>
          </tbody>
        </Table>
      
    </>
  );
};

export default SingleUser;
