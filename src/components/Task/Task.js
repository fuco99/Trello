import React from "react";
import image1 from "../../assets/pexels-photo-5912200.jpeg";
import "./Task.scss";

function Task() {
  return (
    <li className="task-item">
      <img src={image1} alt="image1" />
      <p>Title: leuleu</p>
    </li>
  );
}

export default Task;
