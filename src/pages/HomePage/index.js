// Styling Imports
import styled from "styled-components";

// Component Imports

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: #009688;
  p {
    margin: 5px 10% 5px;
  }
`;

const HomePage = (props) => {
  return (
    <StyledPage>
      <h2>Ready to Elevate Your Game?</h2>
      <p>
        With a strong foundation in game development and a passion for creating
        immersive worlds, I'm ready to bring your gaming vision to life.
      </p>
    </StyledPage>
  );
};

export default HomePage;
