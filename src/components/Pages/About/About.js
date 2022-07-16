import React from "react";
import "./About.css";
// [...Array(10)].map((_, index) => <div>A</div>)
function About() {
  return (
    <div className="about">
      <header className="header-div">
        <div className="logo">Logo</div>
        <div className="nav-list">
          <nav>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>contact us</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="first-div">
        <div className="first-sub-1">
          <div className="pitch-square"></div>
          <div className="first-sub-1a">
            <p className="line-about"></p>
            <p>about us</p>
          </div>
        </div>
        <div className="first-sub-2">
          <h1>Built for saas and E-commerce</h1>
          <p>
            Our tools are easy to set up and use with a user friendly dashboard
            that enables you to set up, launch, automate and manage
            multi-affiliate campaigns in 5 minutes.
          </p>
        </div>
      </div>
      <div className="second-div">
        <h1>
          Metricks was developed because just like you, we needed a product that
          could give us <span className="extend">good value.</span>
        </h1>
      </div>
      <div className="third-div">
        <div className="third-sub-1">
          <div className="sub-1a">
            <div className="number">
              <p>01</p>
              <p className="line-01"></p>
            </div>
            <div className="why">
              <p>why us?</p>
            </div>
          </div>
          <div>
            <p>
              we pride ourserlves in our ability to innovate and create
              world-class tools that provide reliable and efficient touch points
              between advertisers and affiliates
            </p>
          </div>
          <div className="array">
            {[...Array(85)].map((_, index) => (
              <p>.</p>
            ))}
          </div>
        </div>
        <div className="third-sub-2">
          <div className="blue-square"></div>
          <div className="sub-2a">
            <div className="numberb">
              <p>02</p>
              <p className="line-02"></p>
            </div>
            <div>
              <p>Growing with you</p>
            </div>
          </div>
          <div>
            <p>
              leveraging the best technology, we have developed an all-in-one
              affiliate marketing tracking software, a genius tool to help you
              track, automate and optimize your influencer campaigns, all from
              one dashboard.
            </p>
          </div>
          <div>
            <p>
              Our team of experts are constantly brainstorming, testing and
              developing new solutions with only one thing in mind - your
              business growth. Your success is our success and by giving you the
              tools you need to scale, we grow as well.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth-div">
        <div>
          <h1>Got a Question?</h1>
          <p>
            see how Metriks can help your business grow with best affiliate
            marketing tracking software.
          </p>
          <p>
            contact us<span className="arrow">→</span>
          </p>
        </div>
        <div className="orange-square"></div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}

export default About;
