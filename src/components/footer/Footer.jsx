import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // send the email to the server or add it to a mailing list
    alert(`Thank you for subscribing with ${email}`);
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>About us</h3>
            <p>
              We are a team of developers who are passionate about creating
              user-friendly and efficient applications.
            </p>
          </div>
          <div className="col-sm-4">
            <h3>Connect with us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/todolistapp" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/todolistapp" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/todolistapp" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3>Subscribe</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="copyright">
              Copyright &copy; {new Date().getFullYear()} TodoListApp. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
