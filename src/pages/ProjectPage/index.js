// Styling Imports
import styled from "styled-components";
import MediaQuery from "react-responsive";

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
  padding-top: 20px;
  padding-bottom: 20px;
  div {
    padding-top: 15px;
    margin-top: 15px;
    margin: 5px 25% 5px;
  }
  hr {
    background: #009688;
    height: 1px;
    width: 50%;
  }
  img {
    height: 25%;
    width: 50%;
    margin: 5px 50% 5px;
  }
`;

const StyledMobilePage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: #009688;
  padding-top: 20px;
  padding-bottom: 20px;
  div {
    padding-top: 15px;
    margin-top: 15px;
    margin: 5px 5px 5px;
  }
  hr {
    background: #009688;
    height: 1px;
    width: 95%;
  }
  img {
    height: 25%;
    width: 95%;
    margin: 5px 50% 5px;
  }
`;

const ProjectPage = ({ item }) => {
  return (
    <>
      <MediaQuery minDeviceWidth={693}>
        <StyledPage>
          <h1>
            {item.icon}
            {item.title}
          </h1>
          <a href={item.projectLink} target="_blank">
            <p>Checkout The Project</p>
          </a>
          <img src={item.image1} alt="Main Project Photo" />
          <h2>Key Features</h2>
          <hr />

          {item.keyFeatures.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
          <h2>Contributions</h2>
          <hr />

          {item.contributions.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </StyledPage>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <StyledMobilePage>
          <h1>
            {item.icon}
            {item.title}
          </h1>
          <a href={item.projectLink} target="_blank">
            <p>Checkout The Project</p>
          </a>
          <img src={item.image1} alt="Main Project Photo" />
          <h2>Key Features</h2>
          <hr />

          {item.keyFeatures.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
          <h2>Contributions</h2>
          <hr />

          {item.contributions.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </StyledMobilePage>
      </MediaQuery>
    </>
  );
};

export default ProjectPage;
