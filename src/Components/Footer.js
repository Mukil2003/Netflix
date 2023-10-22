import React from "react";
import "./Footer.css";
import Select from "./Select";
import "./Nav.css";

function Footer() {
  return (
    <div className="footer">
      <h3>
        Questions? Call <a href="www.google.com">000-800-919-1694</a>
      </h3>

      <div className="help">
        <div>
          <a href="www.google.com">FAQ</a>
          <a href="www.google.com">Investor Relations</a>
          <a href="www.google.com">Privacy</a>
          <a href="www.google.com">Speed Test</a>
        </div>
        <div>
          <a href="www.google.com">Help Centre</a>
          <a href="www.google.com">Jobs</a>
          <a href="www.google.com">Cookie Preferences</a>
          <a href="www.google.com">Legal Notices</a>
        </div>
        <div>
          <a href="www.google.com">Account</a>
          <a href="www.google.com">Ways to Watch</a>
          <a href="www.google.com">Corporate Information</a>
          <a href="www.google.com">Only on Netflix</a>
        </div>
        <div>
          <a href="www.google.com">Media Centre</a>
          <a href="www.google.com">Terms of Use</a>
          <a href="www.google.com">Contact Us</a>
        </div>
      </div>
      <div className="Copyright">
        <Select />
        <h2>Netflix India &copy;</h2>
      </div>
    </div>
  );
}

export default Footer;
