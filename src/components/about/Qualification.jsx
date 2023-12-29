import React from "react";
import { useState } from "react";
import "./qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h3 className="qualification__section-title">Qualification</h3>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex"
            // className={
            //   toggleState === 1
            //     ? "qualification__button qualification__active button--flex"
            //     : "qualification__button button--flex"
            // }
            // onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className="qualification__button button--flex"
            // className={
            //   toggleState === 2
            //     ? "qualification__button qualification__active button--flex"
            //     : "qualification__button button--flex"
            // }
            // onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content"
            // className={
            //   toggleState === 1
            //     ? "qualification__content qualification__content-active"
            //     : "qualification__content"
            // }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Frontend Developer
                </h3>
                <span className="qualification__subtitle">Happymonk AI Labs</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 Apr - 2023 Oct
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Devsnest Bootcamp
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2022 Sep - 2023 Jan
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Production Support Analyst
                </h3>
                <span className="qualification__subtitle">Infosys</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 Oct - 2022 Sep
                </div>
              </div>
            </div>
          </div>

          <div
            className="qualification__content"
            // className={
            //   toggleState === 2
            //     ? "qualification__content qualification__content-active"
            //     : "qualification__content"
            // }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Engineering</h3>
                <span className="qualification__subtitle">SMVITM</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
