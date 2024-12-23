import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import affiliateManagement from "../../Assets/Projects/affiliateManagement.png";
import Inventory from "../../Assets/Projects/InventorySystem.png";
import Seamsense from "../../Assets/Projects/Seamsense.png";
import chillbox from "../../Assets/Projects/chillbox.png";
import hotel from "../../Assets/Projects/hotel.png";
import taskFlow from "../../Assets/Projects/taskFlow.png"
import coconut from "../../Assets/Projects/coconut.png"
import mealdrop from "../../Assets/Projects/mealdrop.png"
import health from "../../Assets/Projects/health.png"
import food_ordering_app from "../../Assets/Projects/food_ordering_app.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Seamsense}
              isBlog={false}
              title="SeamSense"
              description="Crafting Tomorrow's Trends with Automated Precision, Efficiency, and Faultless Excellence in the Apparel Industry for Small-Scale Businesses. Empowering small enterprises to embrace automation and enhance productivity while maintaining exceptional quality in garment product. Used ML, IOT, React, Flask."
              ghLink="https://github.com/Research-2024-056/Final_project_056"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={affiliateManagement}
              isBlog={false}
              title="Affiliate Management System"
              description="A streamlined solution for affiliates to generate and share unique links, track user activity, and view engagement stats. The admin panel allows full control over affiliate management and system performance, providing efficient oversight of all activities. Used Laravel, React, TailwindCSS, "
              ghLink="https://github.com/it21067938/Affiliate-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="Inventory Handling System"
              description="A comprehensive tool for managing company inventories. It allows assigning tools to users, sending reminders for returns, and managing store inventory efficiently. The system helps track tools and equipment usage, ensuring better control and organization of company assets. Designed to improve inventory accuracy and reduce manual effort. Used PowerApps, PowerAutomate"
              // ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskFlow}
              isBlog={false}
              title="Task Flow App"
              description="This system facilitates efficient task management by allowing users to assign tasks to workers and set reminders. It features automated email notifications, supports hierarchy-level task assignments, and includes a comprehensive dashboard for tracking progress and performance. Designed to enhance productivity and streamline workflow within teams. Used PowerApps, PowerAutomate"
              // ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coconut}
              isBlog={false}
              title="Business Web Application For Coconut Oil Factory"
              description="This application streamlines operations for coconut oil production by managing coconut storage, overseeing sales, handling inventory management, and facilitating finance management. It provides an integrated solution to enhance efficiency, improve sales tracking, and ensure accurate inventory and financial records. Used MERN-Stack, Java, CSS, HTML, Bootstrap and MongoDB "
              ghLink="https://github.com/it21067938/Coconut-Oil-Factory-Management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Reservation System"
              description="A user-friendly platform that simplifies the booking process for hotels. It allows customers to search for available rooms, check rates, and make reservations seamlessly.  Used HTML, CSS, JS, PHP and MYSQL"
              ghLink="https://github.com/it21067938/Hotel-Reservation-System-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chillbox}
              isBlog={false}
              title="Chill Box (Mobile Application)"
              description="Chill Box is an intuitive mobile app designed for music enthusiasts to easily download guitar and piano tabs, song lyrics, and chords. Used Java, Android Studio and Firebase"
              ghLink="https://github.com/it21067938/Mobile_App_CHILL_BOX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealdrop}
              isBlog={false}
              title="Meal Drop (Food App)"
              description="Meal Drop is a convenient food delivery app that connects users with a wide range of restaurants and meal options. Users can easily browse menus, place orders, and track deliveries. Used  React, Spring, JS, HTML, CSS, Tailwind CSS and Firebase"
              ghLink="https://github.com/it21067938/Food-App---MealDrop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="Mental Health Management System"
              description="This platform provides a comprehensive approach to mental health care by allowing users to read and download books on mental wellness, chat with healthcare professionals, and connect with specialists. The system aims to support users in their mental health journey through accessible resources and expert guidance. Used MERN-Stack, JS, CSS, HTML, Bootstrap, Tailwind CSS and MongoDB"
              ghLink="https://github.com/it21058882/Mental_Health_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_ordering_app}
              isBlog={false}
              title="Food Ordering App"
              description="This platform streamlines food ordering by allowing users to browse menus, place orders, make secure payments, and track their order status. It also includes an admin panel for managing orders and monitoring operations. Built using MongoDB, React, Node.js, JavaScript, CSS, HTML, and Tailwind CSS for an intuitive and efficient user experience."
              ghLink="https://github.com/it21067938/Food-Delivery-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
