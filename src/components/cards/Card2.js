import React from "react";

const Card1 = (props) => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">{props.num}</div>
            <div className="box">
                    {props.message}
                    <span className="time">{props.date}</span>
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card1;
