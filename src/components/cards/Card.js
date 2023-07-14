import React from "react";
import GetDate, {ShowDate} from "../date/Date";

const Card = (props) => {
  return (
    <li>
      <div className="card">
        <div className="item-details">
            <div className="item">{props.num  ? props.num : "🙃"}</div>
            <div className="box">
                    {props.message  ? props.message : <span>Hello World! 😉</span>}
                    {!props.date  ? <span className="time">{GetDate()}</span> : <ShowDate/>}
                </div>
            </div>
      </div>
    </li>
  );
};

export default Card;