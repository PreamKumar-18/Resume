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
            As a self - learned Front End Developer, working with React,
            JavaScript, HTML, Cascading Style Sheets (CSS), Responsive web
            layout using bootstrap. I am pursuing my Master’s degree focussed on
            Information Technology in Alagappa University, Karaikudi, India.
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
            <div>
              <a href="Pream Kumar Resume.pdf" download="Pream Kumar Resume.pdf">
                <button className="btn highlighted-btn">Get Resume </button>
              </a>
            </div>
            </div>
            {/* <div className="col xl6 l6 m6 s12">
                            <p>
                                <strong>Main Language</strong> - English
                            </p>
                            <p>
                                <strong>Second Language</strong> - Tamil
                            </p>
                            <p>
                                <strong>Third Language</strong> - English
                            </p>
                        </div> */}

            {/* <div className="col xl6 l6 m6 s12">
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1>
                    {" "}
                    <ReactTypical
                      loop={Infinity}
                      steps={[
                        "Ethusiastic Dev 🔴",
                        1000,
                        "Front End Dev  ✅",
                        1000,
                        "React Dev 😎",
                        1000,
                        "Full-Stack Dev 🔵",
                        1000,
                      ]}
                    />
                  </h1>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
