import React from "react";
import { Title } from "./StyledTags";

const About = () => {
  return (
    <div>
      <div className="row">
        <Title>Adoran Moshe</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <p>
            Motivated full-stack web developer with experience in IT recruiting.
            University of Tampa business school and UC Berkeley Extension coding
            bootcamp graduate. Passionate about writing clear, bug-free, and
            efficient code that follows best practices, including accessibility
            and SEO. Continuously learning new technologies and observing the
            latest trends to build modern, intuitive applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
