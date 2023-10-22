import React, { useEffect, useState } from "react";
import "./App.css";
import Faq from "./Components/Faq";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  const [flexDirection, setFlexDirection] = useState("row");

  useEffect(() => {
    const updateFlexDirection = () => {
      if (window.innerWidth <= 900) {
        setFlexDirection("column");
      } else {
        setFlexDirection("row");
      }
    };

    updateFlexDirection();

    window.addEventListener("resize", updateFlexDirection);

    return () => {
      window.removeEventListener("resize", updateFlexDirection);
    };
  }, []);
  return (
    <div className="app">
      <Home />
      <div className="features">
        <Features
          flexDirection={flexDirection}
          h2="Enjoy on your TV"
          h3="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          imgNum={1}
        />
        <Features
          flexDirection={window.innerWidth <= 900 ? "column" : "row-reverse"}
          h2="Download your shows to watch offline"
          h3="Save your favourites easily and always have something to watch."
          imgNum={2}
        />
        <Features
          flexDirection={window.innerWidth <= 900 ? "column" : "row"}
          h2="Watch everywhere"
          h3="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          imgNum={3}
        />
        <Features
          flexDirection={window.innerWidth <= 900 ? "column" : "row-reverse"}
          h2="Create profiles for kids"
          h3="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          imgNum={4}
        />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
