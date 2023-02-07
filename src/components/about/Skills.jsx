import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Technical Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">HTML5</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CSS3</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Javascript + ES6</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">JSX</h3>
              <span className="skills__level">Proficient</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Material UI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node JS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        {/* <div className="skills__group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
