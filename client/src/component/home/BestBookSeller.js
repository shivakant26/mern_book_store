import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallBook } from "../../redux/bookSlice";
import { baseUrl } from "../../api/apiConstant";
import { useNavigate } from "react-router-dom";

const BestBookSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const token = localStorage.getItem("token");
  const { allBook } = useSelector((state) => state?.book);


  useEffect(() => {
    dispatch(getallBook());
  }, []);

  const singleItem = (id) => {
    navigate(`/single-product/${id}`);
  };

  const previous = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      return false;
    }
  };

  const next = () => {
    const nextPageStartIndex = (page + 1) * limit;
    if (allBook?.data?.data && nextPageStartIndex < allBook.data.data.length) {
      setPage(page + 1);
    } else {
      return false;
    }
  };

  const startIndex = page * limit;
  const endIndex = startIndex + limit;
  const displayedBooks = allBook?.data?.data?.slice(startIndex, endIndex);

  return (
    <>
      <div className="best_seller_book layout_padding">
        <div className="center_wr">
          <div className="section_heading">
            <h3>Best Book Seller</h3>
          </div>
          <div className="book_seller d-flex">
            {displayedBooks && displayedBooks.length > 0 ? (
              <>
                {displayedBooks.map((item, index) => {
                  return (
                    <div
                      className="seller_book_card"
                      key={index}
                      onClick={() => singleItem(item?._id)}
                    >
                      <div className="offers">15% off</div>
                      <div className="page_image">
                        <img src={baseUrl + item.coverImgUrl} alt="book_1" />
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
                <p style={{ color: "tomato" }}>Currently no Items Available!</p>
              </>
            )}
          </div>
          <div className="pagination_btn d-flex">
            <button className="prv_next_btn" onClick={previous}>
              Previous
            </button>
            <button className="prv_next_btn" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBookSeller;
