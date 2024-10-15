import React from "react";
import { Col, Row } from "react-bootstrap";
import printcareLogo from "../../Assets/printcareLogo.png";
import axcertro_logo from "../../Assets/axcertro_logo.png";

export default function Workstack() {
  return (
    <div>
      <div className="d-flex ">
        <Col xs={12} md={2} className="tech-icons mb-3 mb-md-0">
          <img
            src={printcareLogo}
            alt="Printcare Logo"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </Col>
        <h3 style={{ fontSize: "1.1em", marginTop: "19px", textAlign: "left" }}>
          During my six-month internship at{" "}
          <strong className="purple">Printcare PLC </strong>, I gained
          invaluable practical experience and honed my programming skills
          essential for success in the{" "}
          <strong className="purple">software engineering</strong> industry.
          <br /> <br />I contributed to significant projects, where I developed
          and implemented software solutions, further enhancing my technical
          expertise and problem-solving abilities.
        </h3>
      </div>

      <div className="d-flex mb-5 mt-5 ">
        <h3
          style={{
            fontSize: "1.1em",
            marginTop: "25px",
            marginLeft: "15px",
            textAlign: "left",
          }}
        >
          As a <strong className="purple">Full Stack Developer Intern</strong>{" "}
          at <strong className="purple">Axcertro</strong>, I gained
          comprehensive experience in both front-end and back-end development.{" "}
          <br /> <br />I played a key role in developing multiple projects
          utilizing Laravel for backend solutions and React for creating
          dynamic, user-friendly interfaces.
          <br /> <br /> This internship allowed me to enhance my technical
          skills while collaborating with cross-functional teams to deliver
          high-quality software solutions that met client needs.
        </h3>
        <Col xs={12} md={2} className="tech-icons mb-3 mb-md-0">
          <img
            src={axcertro_logo}
            alt="axcertro logo"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </Col>
      </div>
    </div>
  );
}
