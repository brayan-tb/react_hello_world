import React from "react";

class Card6 extends React.Component {
  render() {
  return (
    <li>
    <div className="card">
      <div className="item-details">
          <div className="item">{this.props.num}</div>
          <div className="box">
              <span>Hello World! 🔢</span>
              <span className="time">{this.props.date}</span>
              </div>
          </div>
    </div>
  </li>
  )
  }
  }
  

export default Card6;
