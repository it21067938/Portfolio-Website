import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row className="align-items-center">
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple"> INTRODUCE </span> MYSELF
    </h1>
    <p className="home-about-body">
      I fell in love with programming and I have at least learnt
      something, I think… 🤷‍♂️
      <br />
      <br />I am fluent in classics like
      <i>
        <b className="purple"> Laravel, React and Node.js. </b>
      </i>
      <br />
      <br />
      My field of Interest's are building new &nbsp;
      <i>
        <b className="purple">Web Technologies and Products </b> and
        also in areas related to{" "}
        <b className="purple"> Blockchain. </b>
      </i>
      <br />
      <br />
      Whenever possible, I also apply my passion for developing products
      by leveraging <b className="purple"> modern technologies</b> and 
      <i>
        <b className="purple"> frameworks</b>
      </i>
      &nbsp; to create
      <i>
        <b className="purple"> efficient, scalable solutions </b>
      </i>
      that enhance user experience and drive engagement.
    </p>
  </Col>
  <Col md={4} className="text-center myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" style={{ maxWidth: "80%", marginBottom: "50px",height: "auto" }} />
    </Tilt>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/it21067938"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/tisara.randeni"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thisara-dilshan-499598241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thisara_d_randeni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
