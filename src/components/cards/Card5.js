import React from "react";

const Card5 = (props) => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">{props.num}</div>
            <div className="box">
                <span>Hello World! 📋</span>
                {props.date}
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card5;
