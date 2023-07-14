import React from "react";

const Card4 = (props) => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">{props.num}</div>
            <div className="box text2">
                    {props.children}
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card4;
