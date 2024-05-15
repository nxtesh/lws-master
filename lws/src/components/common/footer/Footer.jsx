import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Get Emails for New courses</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>LearnWithSensei</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              Sign up now to access our free courses, and take the first step
              towards achieving your learning goals.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>

          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Waghodia,Parul University
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                123456789
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                xyz@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright ©2024 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
