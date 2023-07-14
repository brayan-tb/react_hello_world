import React from "react";
import GetDate from "../date/Date";

const Card = () => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">1</div>
            <div className="box">
                    <span>Hello World! 🌎</span>
                    <span className="time">{GetDate()}</span>
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card;