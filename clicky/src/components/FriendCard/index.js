import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div onClick={() => console.log(props.id,props.name)} className="card">
      <div onClick={() => props.shuffle()} className="img-container">

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

    </div>
  );
}

export default FriendCard;
