// Styling Imports
import styled from "styled-components";
import { Link } from "react-router-dom";

// Component Imports
import { PortfolioData } from "../../components/PortfolioData";
import Project from "../../components/Project";

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  h1 {
    color: black;
  }
`;

const PortfolioPage = (props) => {
  return (
    <StyledPage>
      <div>
        {PortfolioData.map((item, idx) => {
          return <Project item={item} key={idx} />;
        })}
      </div>
    </StyledPage>
  );
};

export default PortfolioPage;
