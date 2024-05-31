// Styling Imports
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ReactPlayer from "react-player/youtube";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/SectionHeader";

// Component Imports

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  img {
    padding: 0px 0px 20px 0px;
    border-radius: 8px;
  }
  .center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: white;
    width: 25px;
  }
  i {
    font-size: 25px;
    margin: 10px 0 10px 5px;
  }
  a:hover {
    color: black;
  }

  .marginTop {
    margin-top: 20px;
  }
  .half-width {
    width: 50%;
  }
  .header-width {
    width: 52%;
  }
`;
const ProfessionalProjectPage = ({ item }) => {
  return (
    <>
      <StyledPage>
        <SectionHeader className="marginTop header-width">
          Gameplay
        </SectionHeader>
        <Container className="container half-width center">
          <Image fluid src={item.image} alt="Main Project Photo" />
        </Container>
        <SectionHeader className="header-width">Responsibilities</SectionHeader>
        <Container className="container half-width">
          <p>
            <b>Role: </b>
            {item.role}
          </p>
          <p>
            <b>Duration:</b> {item.duration}
          </p>
          <p>
            <b>Project:</b> {item.project}
          </p>
          <p className="description">
            <b>Responsibilities: </b>
            {item.responsibilities}
          </p>
        </Container>
        <SectionHeader className="header-width">About Project</SectionHeader>
        <Container className="container half-width">
          <p>
            Step into the seductive world of Idle Club Empire – the idle clicker
            where you run your very own night club empire! Hire dazzling
            dancers, upgrade your staff, and rake in the cash as you grow your
            clubs from one to two and more! From modest beginnings to VIP
            nightclub mogul status, become the ultimate idle business tycoon!
          </p>
          <div className="center">
            <h1>Download on {item.service}</h1>
            <a
              href={item.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google-play"></i>
            </a>
          </div>
        </Container>
      </StyledPage>
    </>
  );
};

export default ProfessionalProjectPage;
