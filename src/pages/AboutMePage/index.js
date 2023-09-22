// Styling Imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

// Component Imports
import AboutMeData from "../../components/AboutMeData";

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: black;
  p {
    margin: 5px 5em 5px;
    font-size: 20px;
  }
`;

const StyledMobilePage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: black;
  p {
    margin: 5px 3em 5px;
    font-size: 16px;
  }
`;

const AboutMePage = (props) => {
  return (
    <main>
      <MediaQuery minDeviceWidth={693}>
        <StyledPage>
          <AboutMeData />
        </StyledPage>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <StyledMobilePage>
          <AboutMeData />
        </StyledMobilePage>
      </MediaQuery>
    </main>
  );
};

export default AboutMePage;
