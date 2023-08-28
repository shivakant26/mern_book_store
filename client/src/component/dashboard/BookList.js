import React, { useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBook, getallBook, resetBookApi } from "../../redux/bookSlice";
import Swal from "sweetalert2";
import { Table } from "react-bootstrap";

const BookList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allBook, del_book } = useSelector((state) => state?.book);

  useEffect(() => {
    dispatch(getallBook());
  }, [dispatch]);

  useEffect(() => {
    if (del_book?.status === 200) {
      Swal.fire({
        icon: "error",
        text: `${del_book?.data?.message}`,
      });
      dispatch(getallBook());
      dispatch(resetBookApi());
    } else {
    }
  }, [del_book]);

  const trashBook = (id) => {
    dispatch(deleteBook(id));
  };

  const editBook = (book) =>{
    navigate(`/add-book/${book._id}`, {
      state: {
        book,
      },
    });
  }
  return (
    <>
      <div className="dash_heading d-flex">
        <h2>BookList</h2>
        <button className="add_new_btn" onClick={() => navigate("/add-book")}>
          <span style={{ marginRight: "10px" }}>
            <FaPlus />
          </span>
          Add New Book
        </button>
      </div>
      <div className="bk_table table-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Book Name</th>
              <th>Discription</th>
              <th>Image</th>
              <th>Avaibility</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBook?.data?.data?.length > 0 ? (
              <>
                {allBook?.data?.data?.map((book, index) => {
                  return (
                    <tr>
                      <td className="center-align">{index + 1}</td>
                      <td className="center-align">{book.bookName}</td>
                      <td className="center-align">{book.description}</td>
                      <td>
                        <img
                          src={"http://localhost:8100/" + book.coverImgUrl}
                          height="80px"
                          width="60px"
                          alt="image"
                        />
                      </td>
                      <td className="center-align" >Yes</td>
                      <td className="d-flex td_gap">
                        <span className="edit_btn" onClick={()=>editBook(book)}>
                          <FaEdit />
                        </span>
                        <span
                          className="delete_btn"
                          onClick={() => trashBook(book._id)}
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
                  <td>Book Not Found !</td>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BookList;
