import React from "react";

function PopularCards({ avatar, name, profession, status, bookings }) {
  return (
    <div className="border">
      <div>
        <div>
          <img src={avatar} alt={`Image of ${name}`} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{profession}</p>
        </div>
      </div>
      <div>
        <p>{status}</p>
        <p>{bookings}</p>
      </div>
    </div>
  );
}

export default PopularCards;
