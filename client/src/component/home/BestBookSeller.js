import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBook } from "../../redux/bookSlice";
import { baseUrl } from "../../api/apiConstant";

const BestBookSeller = () => {
  const dispatch = useDispatch();
  const { allBook } = useSelector((state) => state?.book);
  console.log("123", allBook);
  useEffect(() => {
    dispatch(getallBook());
  }, []);
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
                    <div className="seller_book_card">
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
                          <p>Floyd Miles</p>
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
