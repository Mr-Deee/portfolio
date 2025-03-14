import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsApp, BsGithub, BsPlay } from "react-icons/bs";
// import { CgWebsite } from "react-icons/cg";
import { FaGooglePlay } from "react-icons/fa";
// function ProjectCards(props) {


  const ProjectCards = ({ 
    title, 
    description, 
    ghLink, 
    demoLink, 
    playStoreLink, 
    isBlog, 
    showPlay = false, 
    disabled = false 
  }) => {
  
  return (
    <Card className={`project-card-view ${disabled ? "disabled-card" : ""}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div className="button-group">
          <Button variant="dark" href={ghLink} target="_blank" disabled={disabled}>
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>

          {showPlay && (
            <Button variant="danger" href={ghLink} target="_blank" disabled={disabled}>
              <BsPlay /> &nbsp; Play
            </Button>
          )}

          {!isBlog && demoLink && (
            <Button variant="success" href={demoLink} target="_blank" disabled={disabled}>
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          {playStoreLink && (
            <Button variant="info" href={playStoreLink} target="_blank" disabled={disabled}>
              <FaGooglePlay /> &nbsp; Google Play
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
