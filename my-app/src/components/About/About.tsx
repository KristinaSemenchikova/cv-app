import React from "react";
import Typist from "react-typist";
import "./About.css";

const About = () => {
  return (
    <main className="main">
      <div>
        <h1>About me</h1>
        <p className = 'story'>
          <span role="img" aria-label="girl">
          Hello (:
          My name is Kristina👩{" "} 
          </span>
         
          <span role="img" aria-label="sight">
          Once I met a web development. It was not love at first sight at all🙄{" "}
          </span>{" "}
          
          <span role="img" aria-label="learn">
          I started learning front-end without much enthusiasm 👩🏻‍💻{" "}
          </span>{" "} 
          <span role="img" aria-label="love">
          But soon
          everything changed and now I love with tender love both front and end❤️{" "}
          </span>{" "}
          <span role="img" aria-label="new">And I try every day to learn something new about it💡 </span>
        </p>
      </div>
      <div>
        <h1>My skills</h1>
          <div className = 'skills'>
            <span>HTML + CSS</span>
            <span>JavaScript Fundamentals + ES6</span>
            <span>Git</span>
            <span>Node + npm</span>
            <span>React and UI libraries</span>
            <span>Redux and redux libraries </span>
            <span>REST API </span>
          </div>
      </div>
    </main>
  );
};

export default About;
