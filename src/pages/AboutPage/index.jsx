import React, { useState } from "react";

export default function AboutUsPage() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit feedback goes here
    setFeedback("");
  };

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        aut, molestias minus aliquam eius, magnam voluptatibus dolor mollitia
        vitae eos unde, corrupti perspiciatis delectus pariatur impedit minima
        quia eum deleniti.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea value={feedback} onChange={handleChange} />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}
