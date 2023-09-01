import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { useDispatch, useSelector } from "react-redux";
import { addNewBook, resetBookApi, updateBook } from "../../redux/bookSlice";
import Swal from "sweetalert2";
import Thumbnail from "../../assets/images/thumbnail.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../api/apiConstant";

const AddBook = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [editableId, setEditableId] = useState(id);
  const editBookData = location?.state?.book;
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const { newBook, updateBookData } = useSelector((state) => state?.book);

  useEffect(() => {
    if (editableId) {
      setValue("bookName", editBookData.bookName);
      setValue("price", editBookData.price);
      setValue("authorName", editBookData.authorName);
      setValue("description", editBookData.description);
      setValue("coverImgUrl", `${baseUrl}+${editBookData.coverImgUrl}`);
      setSelectedImage(`${baseUrl}${editBookData.coverImgUrl}`);
    }
  }, [editBookData]);

  useEffect(() => {
    if (newBook.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${newBook?.data?.message}`,
      });
      dispatch(resetBookApi());
      navigate("/book-list");
    } else if (updateBookData.status === 200) {
      Swal.fire({
        icon: "success",
        text: `${updateBookData?.data?.message}`,
      });
      dispatch(resetBookApi());
      navigate("/book-list");
    } else {
    }
  }, [newBook, updateBookData]);

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    const imageFile = e.target.files[0];
    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  };

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("bookName", data.bookName);
    formData.append("price", data.price);
    formData.append("authorName", data.authorName);
    formData.append("description", data.description);
    formData.append("coverImgUrl", file);
    if (editableId) {
      dispatch(updateBook({ editableId, formData }));
      setEditableId(null);
    } else {
      dispatch(addNewBook(formData));
    }
    setSelectedImage("");
    reset();
  };

  return (
    <>
      <div className="dash_heading d-flex">
        <h2>Add Book</h2>
      </div>
      <div className="login_section">
        <div className="add_book_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bk_form_row d-flex">
              <div className="bk_col_1">
                <div className="form_field">
                  <InputField
                    id="bookName"
                    type="text"
                    placeholder="Book Title"
                    register={register("bookName", {
                      required: "bookName is required *",
                    })}
                    error={errors.bookName}
                  />
                </div>
                <div className="form_field">
                  <InputField
                    id="price"
                    type="text"
                    placeholder="Price"
                    register={register("price", {
                      required: "Price is required *",
                    })}
                    error={errors.price}
                  />
                </div>
                <div className="form_field">
                  <InputField
                    id="authorName"
                    type="text"
                    placeholder="Author Name"
                    register={register("authorName", {
                      required: "Author Name is required *",
                    })}
                    error={errors.authorName}
                  />
                </div>
                <div className="form_field">
                  <InputField
                    id="description"
                    type="text"
                    placeholder="Description"
                    register={register("description", {
                      required: "Description is required *",
                    })}
                    error={errors.description}
                  />
                </div>
              </div>
              <div className="bk_col_2">
                <div className="bk_cover_image">
                  <img
                    src={selectedImage ? selectedImage : Thumbnail}
                    alt="Selected"
                  />
                </div>
                <div className="form_field">
                  <input
                    id="coverImgUrl"
                    type="file"
                    {...register("coverImgUrl", {
                      required: "Cover Image is required *",
                    })}
                    onChange={(e) => handleImageChange(e)}
                  />
                  {errors.coverImgUrl && (
                    <p className="error">{errors.coverImgUrl.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="form_field">
              <button className="add_item" type="submit">
                {editableId ? "Update Book" : "Add Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
