import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hamburger from "hamburger-react";


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
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Borla GH"
              description="Borla is a waste management app that connects 
              waste management services to client from the comfort of their home.
              I built this app using Dart and Flutter. to creat seamless waste management pick up."
              ghLink="https://github.com/Mr-Deee/borla_app.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Fill'd "
              description="Fill'd is a gas delivery service that connects 
              clients with trusted gas refill providers. The platform ensures a seamless and convenient experience, 
              allowing users to request gas refills from nearby suppliers and have them delivered directly to their location."
              ghLink="https://github.com/Mr-Deee/borla_app.git"
              playStoreLink="https://play.google.com/store/apps/details?id=com.tos.filldClient&pcampaignid=web_share"

              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Capital-Susu"
              description="Capital Susu is a small scale savings and loans company. 
              I built this app using Dart and Flutter. to keep track new users update user account which include deposits."
              ghLink="https://github.com/Mr-Deee/capitalsusu"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="DL"
              description="This is a Youtube downloader created with dart to allow clients, download desired youtube content all from a click of a button "
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
              description="This app was developed purposefully for courier services."
              ghLink="https://github.com/Mr-Deee/rev_rider_app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;