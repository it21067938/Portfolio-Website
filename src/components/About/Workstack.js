import React from "react";
import { Row, Col } from "react-bootstrap";
import printcareLogo from "../../Assets/printcareLogo.png";
import axcertro_logo from "../../Assets/axcertro_logo.png";

export default function Workstack() {
  return (
    <div style={{ padding: "50px" }}>
      {/* First Internship - Printcare */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <img
              src={printcareLogo}
              alt="Printcare Logo"
              className="img-fluid"
              style={{ maxHeight: "200px", margin: "auto", display: "block" }}
            />
          </div>
        </Col>
        <Col xs={12} md={9}>
          <div
            style={{
              backgroundColor: "#fffb",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.3em", fontWeight: "600", color: "#333" }}>
              Software Engineering Internship at{" "}
              <strong style={{ color: "#6a1b9a" }}>Printcare PLC</strong>
            </h3>
            <p style={{ fontSize: "1.1em", color: "#555", lineHeight: "1.8" }}>
              During my six-month internship at Printcare PLC, I gained
              invaluable practical experience and honed my programming skills
              essential for success in the software engineering industry. I
              contributed to significant projects by developing and implementing
              software solutions, which further enhanced my technical expertise
              and problem-solving abilities.
            </p>
          </div>
        </Col>
      </Row>

      {/* Second Internship - Axcertro */}
      <Row className="align-items-center mb-5">
      <Col xs={12} md={3} className="mb-3 mb-md-0">
          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <img
              src={axcertro_logo}
              alt="Axcertro Logo"
              className="img-fluid"
              style={{ maxHeight: "200px", margin: "auto", display: "block" }}
            />
          </div>
        </Col>
        <Col xs={12} md={9}>
          <div
            style={{
              backgroundColor: "#fffb",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "1.3em", fontWeight: "600", color: "#333" }}>
              Full Stack Developer Internship at{" "}
              <strong style={{ color: "#6a1b9a" }}>Axcertro</strong>
            </h3>
            <p style={{ fontSize: "1.1em", color: "#555", lineHeight: "1.8" }}>
              As a Full Stack Developer Intern at Axcertro, I gained
              comprehensive experience in both front-end and back-end
              development. I played a key role in multiple projects utilizing
              Laravel for backend solutions and React for creating dynamic,
              user-friendly interfaces. This experience allowed me to work
              closely with cross-functional teams and deliver high-quality
              software solutions.
            </p>
          </div>
        </Col>
        
      </Row>
    </div>
  );
}
