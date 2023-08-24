import React from 'react';
import BookCagetoryCard from '../common/BCatCard';
const BookCategory = ({id}) => {
  return (
    <>
      <div className="book_categrory_section" id={id}>
        <div className="center_wr">
          <div className="bc_content section_heading">
            <h3>Books Categories</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
            <div className="wt_layout_card_wr">
              <BookCagetoryCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCategory;
