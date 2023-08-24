const BestBookSeller = () => {
  return (
    <>
      <div className="best_seller_book">
        <div className="center_wr">
          <div className="section_heading">
            <h3>Best Book Seller</h3>
          </div>
          <div className="book_seller">
            <div className="seller_book_card">
            <div className="offers">15% off</div>
              <div className="page_image">
                <img src={require("../../assets/images/cover_book_1.jpg")} alt="book_1"/>
              </div>
              <div className="about_sell_book">
                <div className="book_details">
                  <h5>Bovery Made</h5>
                  <p>Floyd Miles</p>
                </div>
                <div className="price">$85.00</div>
              </div>
            </div>
            <div className="seller_book_card">
            <div className="offers">8% off</div>
              <div className="page_image">
                <img src={require("../../assets/images/cover_book_2.jpg")} alt="book_1"/>
              </div>
              <div className="about_sell_book">
                <div className="book_details">
                  <h5>Bovery Made</h5>
                  <p>Floyd Miles</p>
                </div>
                <div className="price">$85.00</div>
              </div>
            </div>
            <div className="seller_book_card">
                <div className="offers">10% off</div>
              <div className="page_image">
                <img src={require("../../assets/images/cover_book_3.jpg")} alt="book_1"/>
              </div>
              <div className="about_sell_book">
                <div className="book_details">
                  <h5>Bovery Made</h5>
                  <p>Floyd Miles</p>
                </div>
                <div className="price">$85.00</div>
              </div>
            </div>
            <div className="seller_book_card">
            <div className="offers">5% off</div>
              <div className="page_image">
                <img src={require("../../assets/images/cover_book_1.jpg")} alt="book_1"/>
              </div>
              <div className="about_sell_book">
                <div className="book_details">
                  <h5>Bovery Made</h5>
                  <p>Floyd Miles</p>
                </div>
                <div className="price">$85.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBookSeller;
