import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thisara Dilshan </span>
            from <span className="purple"> Kuliyapitiya, Sri Lanka.</span>
            <br />
            Currently, I am a 4th year undergraduate student at SLIIT,
            <br />
            pursuing BSc (Hons) in Information Technology.
            <br />
            I have also gained hands-on experience through two internship
            <br />
            programs at Printcare PLC and Axcertro
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Thisara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
