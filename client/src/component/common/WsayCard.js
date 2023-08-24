import { FaQuoteLeft } from "react-icons/fa";
import { whatSayData } from "../../utils/constent";

const WhatSayCard = () => {
  return (
    <>
      {whatSayData?.map((wCard, index) => {
        return (
            <div className="cs_say_card" key={index}>
              <div className="card_content">
                <p>{wCard.description}</p>
                <span>
                  <FaQuoteLeft />
                </span>
              </div>
              <div className="profile">
                <div className="profile_image">
                  <img src={wCard.profileImage} alt={wCard.alt} />
                </div>
                <div className="profile_details">
                  <h5>{wCard.profileName}</h5>
                  <h6>{wCard.designation}</h6>
                </div>
              </div>
            </div>
        );
      })}
    </>
  );
};

export default WhatSayCard;
