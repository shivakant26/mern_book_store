import React from "react";
import WhatSayCard from "../common/WsayCard";

const WhatSay = () => {
  return (
    <>
      <div className="what_say">
        <div className="center_wr">
          <div className="sect_heading section_heading">
            <h3>What Says Customers</h3>
          </div>
          <div className="customer_say_card_grp">
            <WhatSayCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatSay;
