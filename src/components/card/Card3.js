import React from "react";
import { ShowDate } from "../date/Date";

const Card3 = (props) => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">{props.num}</div>
            <div className="box">
                    {props.children}
                    <ShowDate/>
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card3;
