import React from "react";
import "../aboutUs.css";

const About = () => {
  return (
    <section className="page-section text-black text-center mb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-12">
            <img
              src="/estateagent-logo.png"
              alt="Track My Move"
              className="mt-4 mb-4"
            />
            <h2 className="aboutus-header">ABC Estates</h2>
            <p className="aboutus-content ">
              19, Queens Road
              <br />
              Manchester
              <br />
              M00 0ZZ
              <br />
            </p>

            <p className="aboutus-content ">
              support@abcestates.co.uk
              <br />
              0161-1112222
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
