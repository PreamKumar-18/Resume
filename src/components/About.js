import React from "react";
// import { ReactTypical } from "@deadcoder0904/react-typical";
import "./About.css";
export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            To work in a creative and challenging environment using cutting edge
            technologies where I can utilize my current skill set and sharpen
            and improve them to compete with future IT requirement while
            constantly learning and success delivering solution to problems.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 5105, Thendral nagar, Kalayar kovil
              </p>
              <p>
                <strong>Email:</strong> pream3825@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 8754212317
              </p>
              {/* <div>
              <a href="Pream Kumar.pdf" download="Pream Kumar.pdf">
                <button className="btn highlighted-btn">Get Resume </button>
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
