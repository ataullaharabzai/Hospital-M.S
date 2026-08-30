import React, { useEffect, useState } from "react";
import { getPatients } from "../api";

function Patient({
  name,
  age,
  gender,
  avatar,
  lastVisit,
  address,
  IconVisit,
  IconAddress,
}) {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} />
        <div>
          <p>{name}</p>
          <div>
            <p>{age}</p>
            <p>{gender}</p>
          </div>
        </div>
      </div>
      <div>
        <IconVisit />
        <p>{lastVisit}</p>
      </div>
      <div>
        <IconAddress />
        <p>{address}</p>
      </div>
    </div>
  );
}

export default Patient;
