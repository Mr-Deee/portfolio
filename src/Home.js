// import BlogList from "./BlogList";
// import useFetch from "./usefetch";
import Particle from "./Particle";
// import { bounce } from "react-animations";
// import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import { keyframes } from "@emotion/react";
import Type from "./Type";
// import { blue } from "@mui/material/colors";





// const Bounce = styled.div`animation:  2s ${keyframes`${bounce}`} infinite;`;


function Home() {
//  const {data: blogs,isPending,error} = useFetch("http://localhost:3000/blogs");
  

  return (

    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Daniel Narterh</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>


);
}


export default Home;