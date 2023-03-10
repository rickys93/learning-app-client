import React, { useState } from "react";

import "./about.css";

export default function AboutUsPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() !== "") {
      alert("Thank you for your feedback!");
      window.location.reload();
    } else {
      alert("Please write feedback before submitting!");
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleChange = (e) => {
    const feedback = e.target.value;
    if (feedback === "") {
      alert("Please write a feedback before submitting!");
    } else {
      setFeedback(feedback);
      alert("Thank you for your feedback.");
      window.location.reload();
    }
  };

  return (
    <>
      <h2>About Us</h2>
      <div className="top-div">
        <div className="mid-div">
          <p>
            Crammer Education has developed this learning app because of an
            increase in demand for remote learning since the pandemic began.
            Upsurge interest in quiz and flashcard by students became more
            prominent and to meet this demand, Crammer UK has made this apps
            with a new product that will support students across the country
            with their revision.
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Feedback:&nbsp;<br/>
              <textarea
                className="textarea-1"
                value={feedback}
                onChange={handleFeedbackChange}
              />
            </label>
            <br />
            <button className="ta-btn" type="submit">
              Submit
            </button>
          </form>
          <h4 className="ab-title">
            Contact us: 020 802 0802&nbsp;&nbsp; |
            &nbsp;&nbsp;crammeruk@crammeruk.co.uk
          </h4>
        </div>
      </div>
    </>
  );
}
