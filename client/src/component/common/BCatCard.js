import { BookCategoryCardData } from "../../utils/constent";

const BookCagetoryCard = () => {
  return (
    <>
      {BookCategoryCardData?.map((b_data, index) => {
        return (
          <div className="card" key={index}>
            <div className="crd_image">
              <img src={b_data.image} alt={b_data.alt} />
            </div>
            <h4>{b_data.title}</h4>
            <p>{b_data.discription}</p>
          </div>
        );
      })}
    </>
  );
};

export default BookCagetoryCard;
