import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Platform:</strong> {props.occupation}
          </li>
          <li>
            <strong>Year:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.shuffle()} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
