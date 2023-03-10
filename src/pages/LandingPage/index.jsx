import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function LandingPage() {
  return (
    <main className="intro-main">
      <div className="intro-box">
        <div className="intro-div">
          <h1 className="h1-lp">Welcome to the Crammer Quiz App</h1>
          <p className="intro">
            Welcome to Crammer UK's quiz flashcard app! Our app offers a wide
            range of quizzes covering both STEM and non-STEM subjects. Whether
            you're studying for a science test or brushing up on your history
            knowledge, our app has got you covered. Our flashcards are designed
            to help you master key concepts and retain information more
            effectively, making studying and revision a breeze.
          </p>
        </div>
        <div className="btn-div">
          <button className="cat-btn">
            <Link to="/categories">Explore Categories</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
