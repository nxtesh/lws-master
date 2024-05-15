import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";
const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  {/* <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div> */}
                  <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>{val.pricePer}</h3>
              </div>
              <Link to={{ pathname: val?.link }} target="_blank">
              {" "}
              <button className="outline-btn">
                WATCH NOW!
                {/* <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/xTzvQkOll2U?si=EC5igC0Tzgwv0NlZ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe> */}
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
