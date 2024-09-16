import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Dr.S.Sangeetha</h1>
        <p>Department of Artificial Intelligence and Data Science, Kumaraguru College of Technology</p>
        <div className="contact-info">
          <p>Email: vns.sangeetha@gmail.com</p>
          <p>Email: sangeethas.ads@kct.ac.in</p>
          <p>Mobile: 91900379183</p>
        </div>
      </div>

      <div className="content">
        <div className="left">
          <div className="card">
            <h2>Academic Qualification</h2>
            <p><b>ME (CSE):</b> PSG College of Technology CSE 2012</p>
            <p><b>CGPA:</b> 8.05 (First Class)</p>
            <p><b>Ph.D:</b> PSG College of Technology CSE 2022</p>
            <p><b>Course Work:</b> 9 (First Class)</p>
          </div>

          <div className="card">
            <h2>Professional Teaching/Research Experience</h2>
            <p><b>PSG Polytechnic College:</b> 9 years</p>
            <p><b>PSG College of Technology:</b> 6 years</p>
            <button className="view-details">View Full Details</button>
          </div>
        </div>

        <div className="center">
          <img src="https://via.placeholder.com/200" alt="Woman" className="center-image"/>
        </div>

        <div className="right">
          <div className="card">
            <h2>Research</h2>
            <p><b>H-index:</b> 3, Referred & Cited in top journals like Elsevier, ACM, Springer, etc.</p>
            <p><b>Citation:</b> 63</p>
          </div>

          <div className="card">
            <h2>Publications</h2>
            <p><b>Publications:</b> 22+</p>
          </div>

          <div className="card">
            <h2>Academic/Research</h2>
            <p>Ph.D Thesis: "Application of Differential Privacy to Recommendation Systems"</p>
            <p><b>Completed in:</b> 4 years and 7 months</p>
          </div>

          <div className="card">
            <h2>Certifications</h2>
            <p>"TensorFlow Specialization" certification by Deeplearning.ai and Coursera, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
