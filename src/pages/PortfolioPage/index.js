// Styling Imports
import styled from "styled-components";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Component Imports
import { PersonalProjectData } from "../../components/PersonalProjectData";
import { ProfessionalProjectData } from "../../components/ProfessionalProjectData";
import Project from "../../components/Project";
import ProfessionalProject from "../../components/ProfessionalProject";
import { Image } from "react-bootstrap";
import { SectionHeader } from "../../components/SectionHeader";

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .half-width {
    width: 50%;
  }
  .header-width {
    width: 52%;
  }
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 20px;
  width: 50%;
  .card {
    background-color: #2b2b2b;
    border: 1px solid #fff;C
    border-radius: 8px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .cardRegion {
    width: 100%;
    padding: 5px;
  }

  img {
    border-radius: 8px;
  }

  h1 {
    font-size: 42px;
    margin: 10px 0 10px;
  }

  h2 {
    font-size: 24px;
    margin: 0 0 20px;
    color: #bbb;
  }

  p {
    font-size: 20px;
    font-style: italic;
    color: #ccc;
  }

  .quote {
    //border-top: 1px solid #444;
    //padding-top: 10px;
    margin-top: 10px;
    font-size: 16px;
  }
`;

const PortfolioPage = (props) => {
  return (
    <StyledPage>
      <StyledCard>
        <div className="card">
          {/* <div className="cardRegion">
            <Image fluid src="/Psyche_Images/psyche_gameplay.png" />
          </div> */}
          <div className="cardRegion">
            <h1>Nicholas Taveras</h1>
            <h2>Game Developer</h2>
            <p className="quote">
              "Captivating users with immersive and thrilling worlds."
            </p>
          </div>
        </div>
      </StyledCard>
      <SectionHeader className="header-width">
        Professional Projects
      </SectionHeader>
      <Container className="container half-width">
        <Row xs={1} md={2} className="g-4">
          {ProfessionalProjectData.map((item, idx) => {
            return (
              <Col key={idx}>
                <ProfessionalProject item={item} key={idx} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <SectionHeader className="header-width">Personal Projects</SectionHeader>
      <Container className="container half-width">
        <Row xs={1} md={2} className="g-4">
          {PersonalProjectData.map((item, idx) => {
            return (
              <Col key={idx}>
                <Project item={item} key={idx} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </StyledPage>
  );
};

export default PortfolioPage;
