import React, { useState } from "react";
import "./Home.css";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          filter: openModal ? "blur(8px)" : "blur(0)",
        }}
        className="Home"
      >
        <header className="header-div">
          <div className="logo">Logo</div>
          <div className="nav-list">
            <nav>
              <ul>
                <li onClick={() => navigate("/about")}>About us</li>
                <li>Blog</li>
                <li
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  contact us
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section>
          <div className="text">
            <h1>something awesome is coming soon</h1>
            <p>
              your all-in-one affiliate marketting tracking software{" "}
              <span>track, automate</span> and <span>optimize</span>your
              campaigns
            </p>
          </div>
          <div className="countdown">
            <div className="box1">
              <h3>7</h3>
              <p>Days</p>
            </div>
            <div className="box2">
              <h3>24</h3>
              <p>Hours</p>
            </div>
            <div className="box3">
              <h3>54</h3>
              <p>Minutes</p>
            </div>
            <div className="box4">
              <h3>11</h3>
              <p>Second</p>
            </div>
          </div>
          <div className="form-data">
            <form>
              <input
                type="text"
                name="first_name"
                placeholder="First Name..."
              />
              <input type="text" name="last_name" placeholder="Last Name..." />
              <br />
            </form>
          </div>
          <div className="form-email">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address..."
              />
              <button type="submit">join our waiting list</button>
            </form>
          </div>
        </section>
        <footer>
          <div className="home-footer">
            <Footer />
          </div>
        </footer>
      </div>
      {openModal && (
        <div
          // style={{ opacity: openModal ? "10" : "0" }}
          className={"modal-container"}
        >
          <div className="modal">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              back
            </button>
            <form>
              <h3>
                Hey, we are still in the works, but you can send us a message
              </h3>
              <label for="first">First name</label>
              <input
                id="first"
                type="text"
                name="first_name"
                placeholder="Enter your first name"
              />
              <label for="last">Last name</label>
              <input
                id="last"
                type="text"
                name="last_name"
                placeholder="Enter your last name"
              />
              <label for="mail">Email address</label>
              <input
                id="mail"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <label for="help">tell us what you need help with:</label>
              <textarea
                id="help"
                type="text"
                name="help"
                placeholder='Enter a topic, like "channel probelm..."'
              />
              <button type="submit">send now</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
