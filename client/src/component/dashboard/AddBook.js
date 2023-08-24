import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";

const AddBook = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                    id="title"
                    type="text"
                    placeholder="Book Title"
                    register={register("title", {
                      required: "Title is required *",
                    })}
                    error={errors.title}
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
                      required: "authorName is required *",
                    })}
                    error={errors.authorName}
                  />
                </div>
              </div>
              <div className="bk_col_2">
                <div className="bk_cover_image">
                    <input type="file" />
                </div>
              </div>
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

            <div className="form_field">
              <button className="add_item" type="submit">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
