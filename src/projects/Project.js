import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              // imgPath={chatify}
              isBlog={false}
              title="Total House Clinic"
              description="This App was Designed with the patients/customers in mind. Customers have the 
              ability to check various departments for info , make enquiries , book appointments.This App is made from WITH Flutter & Dart"
              ghLink="https://github.com/Mr-Deee/totalclinic"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Capital-Susu"
              description="Capital Susu is a small scale savings and loans company. I built this app using Dart and Flutter. to keep track new users upadte user account which include deposits."
              ghLink="https://github.com/Mr-Deee/capitalsusu"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="DL"
              description="This is a Youtube downloader created with dart to allow clients, download desired youtube content all froma click of a button "
              ghLink="https://github.com/Mr-Deee/dl"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Dzata Inventory."
              description="This an inventry Management System Which is made with dart for Dzata Cement"
              ghLink="https://github.com/Mr-Deee/qr_inventory"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Rev"
              description="Thos app was developed purposefully for courier purposes."
              ghLink="https://github.com/Mr-Deee/rev_rider_app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Facial Recognition"
              description=""
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;