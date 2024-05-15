import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
// import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="Learn With Sensei"
              title="Best Online Education Expertise"
            />
            <p>
              Browse through our courses and embark on your learning journey
              today. Start learning and unlocking your knowledge with LWS.
            </p>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
