// Styling Imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

// Component Imports
import AboutMeData from "../../components/AboutMeData";
import { Image } from "react-bootstrap";

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: yellow;
  p {
    margin: 10px 20% 5px;
    font-size: 20px;
  }

  .circle {
    margin-top: 10px;
    width: 168px;
    height: 200px;
    background-color: yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle img {
    max-width: 100%; /* Adjust the size of the image as needed */
    max-height: 100%; /* Adjust the size of the image as needed */
    border-radius: 50%;
  }
`;

const StyledMobilePage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: yellow;
  p {
    margin: 5px 5px 5px;
    font-size: 16px;
  }
  .circle {
    margin-top: 10px;

    width: 166px;
    height: 200px;
    background-color: yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle img {
    max-width: 100%; /* Adjust the size of the image as needed */
    max-height: 100%; /* Adjust the size of the image as needed */
    border-radius: 50%;
  }
`;

const AboutMePage = (props) => {
  return (
    <main>
      <MediaQuery minDeviceWidth={693}>
        <StyledPage>
          <div class="circle">
            <Image src="/profile_Images/portfolioPic.png" roundedCircle />
          </div>
          <AboutMeData />
        </StyledPage>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <StyledMobilePage>
          <div class="circle">
            <Image src="/profile_Images/portfolioPic.png" roundedCircle />
          </div>
          <AboutMeData />
        </StyledMobilePage>
      </MediaQuery>
    </main>
  );
};

export default AboutMePage;
