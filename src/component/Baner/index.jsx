import React, { useState, useEffect } from "react";
import "./baner.css";

const Baner = ({ details, selectedCard }) => {
  const [userDetail, setUserDetail] = useState(details[0]);

  useEffect(() => selectedCard && setUserDetail(selectedCard), [selectedCard]);

  return (
    <div className="container">
      <div className="baner">
        <img className="pic" src={userDetail.picture.medium} alt="" />
        <div className="details">
          <h1>
            {userDetail.name.title}. {userDetail.name.first}{" "}
            {userDetail.name.last}
          </h1>
          <div className="address">
            <p>
              <span className="st-no">
                {userDetail.location.street.number},
              </span>
              {userDetail.location.street.name},{userDetail.location.postcode},
              <span className="country">{userDetail.location.country},</span>
              {userDetail.location.timezone.offset},
              {userDetail.location.timezone.description},
              <span className="gender">{userDetail.gender}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
