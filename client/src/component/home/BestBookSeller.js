import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBook } from "../../redux/bookSlice";
import { baseUrl } from "../../api/apiConstant";
import { useNavigate } from "react-router-dom";

const BestBookSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  const { allBook } = useSelector((state) => state?.book);
  useEffect(() => {
    dispatch(getallBook());
  }, []);

  const singleItem = (id) =>{
    navigate(`/single-product/${id}`)
  }
  return (
    <>
      <div className="best_seller_book layout_padding">
        <div className="center_wr">
          <div className="section_heading">
            <h3>Best Book Seller</h3>
          </div>
          <div className="book_seller d-flex">
            {allBook?.data?.data?.length > 0 ? (
              <>
                {allBook?.data?.data?.map((item, index) => {
                  return (
                    <div className="seller_book_card" key={index} onClick={()=>singleItem(item?._id)}>
                      <div className="offers">15% off</div>
                      <div className="page_image">
                        <img
                          src={baseUrl + item.coverImgUrl}
                          alt="book_1"
                        />
                      </div>
                      <div className="about_sell_book">
                        <div className="book_details">
                          <h5>{item.bookName}</h5>
                          <p>{item.authorName}</p>
                        </div>
                        <div className="price">₹{item.price}.00</div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <p style={{ color: "tomato" }}>Currently no Item Avaible !</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBookSeller;
