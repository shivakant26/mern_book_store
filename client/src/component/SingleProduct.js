import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { singleBook } from "../redux/bookSlice";
import { useEffect, useState } from "react";
import { baseUrl } from "../api/apiConstant";
import { FaStar } from "react-icons/fa";
import Qunatity from "./common/Quntity";

const SingleProduct = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { singleBookData } = useSelector((state) => state?.book);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(singleBook(id));
  }, [dispatch]);

  const addtoCart = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/add-to-cart");
    }
  };
  return (
    <>
      <div className="single_product_section">
        <div className="center_wr">
          <div className="single_product d-flex">
            <div className="items_images">
              <img
                src={baseUrl + singleBookData?.data?.data?.[0]?.coverImgUrl}
                alt="single_item"
              />
            </div>
            <div className="items_details">
              <h4>{singleBookData?.data?.data?.[0]?.bookName}</h4>
              <div className="ratings">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
              <p className="price">
                ₹{singleBookData?.data?.data?.[0]?.price}.00
              </p>
              <p className="description">
                {singleBookData?.data?.data?.[0]?.description}
              </p>
              <div className="add_quantity d-flex">
                <span>No. of Order</span>
                <Qunatity count={count} setCount={setCount} />
              </div>
              <div className="add_quantity d-flex">
                <div>
                  <strong style={{ color: "#a29c9c", fontSize: "18px" }}>
                    Total Price :
                  </strong>{" "}
                  ₹{singleBookData?.data?.data?.[0]?.price * count}.00
                </div>
                <div>
                  <button className="cart_btn" onClick={addtoCart}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
