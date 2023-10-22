import React from "react";
import Nav from "./Nav";
import "./Home.css";
import Email from "./Email";

function Home() {
  return (
    <section className="banner">
      <Nav />

      <div className="home-content">
        <div>
          <h1>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
          <h3>Join today. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>

        <Email />
      </div>
    </section>
  );
}

export default Home;
