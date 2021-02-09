// Styling Imports
import styled from 'styled-components';

// Component Imports

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: black;
  h1 {
      color: black;
  }
`;

const AboutMePage = (props) => {
    return (
        <StyledPage>
          <h1>AboutMePage</h1>
        </StyledPage>
    )
}

export default AboutMePage;