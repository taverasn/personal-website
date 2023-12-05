// Styling Imports
import styled from "styled-components";
import MediaQuery from "react-responsive";
import ReactPlayer from "react-player/youtube";

// Component Imports

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: yellow;
  padding-top: 20px;
  padding-bottom: 20px;
  div {
    padding-top: 15px;
    margin-top: 15px;
    margin: 5px 25% 5px;
  }
  hr {
    background: yellow;
    height: 1px;
    width: 100%;
  }
  img {
    height: 25%;
    width: 50%;
    margin: 5px 50% 5px;
  }
  h3,
  description {
    text-align: center;
  }
  .player-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  .react-player {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    padding-bottom: 10px;
  }
`;

const StyledMobilePage = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: yellow;
  padding-top: 20px;
  padding-bottom: 20px;
  div {
    text-align: center;
    margin: 5px 5px 5px;
  }
  hr {
    background: yellow;
    height: 1px;
    width: 95%;
    margin-left: 10px;
  }
  img {
    height: 25%;
    width: 95%;
    margin: 5px 50% 5px;
    padding-bottom: 10px;
  }
  .player-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .description {
    width: 95%;
    margin-left: 10px;
  }
  .react-player {
    padding-bottom: 10px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
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
          <StyledDiv>
            <p>{item.role}</p>
            <p>{item.duration}</p>
          </StyledDiv>
          <p>{item.skills}</p>
          <img src={item.image1} alt="Main Project Photo" />

          {item.contributions.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <hr />
                <p className="description">{item.description}</p>
                {/* <div className="player-wrapper">
                  <ReactPlayer
                    controls="true"
                    className="react-player"
                    width="100%"
                    height="469px"
                    url={item.url}
                  />
                </div> */}
              </div>
            );
          })}
        </StyledPage>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <StyledMobilePage>
          <h2>
            {item.icon}
            {item.title}
          </h2>
          <a href={item.projectLink} target="_blank">
            <p>Checkout The Project</p>
          </a>
          <div>
            <p>{item.role}</p>
            <p>{item.duration}</p>
          </div>
          <p>{item.skills}</p>
          <img src={item.image1} alt="Main Project Photo" />

          {item.contributions.map((item, idx) => {
            return (
              <div>
                <h3>{item.name}</h3>
                <hr />
                {/* <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    controls="true"
                    width="95%"
                    height="240px"
                    url={item.url}
                  />
                </div> */}
                <p className="description">{item.description}</p>
              </div>
            );
          })}
        </StyledMobilePage>
      </MediaQuery>
    </>
  );
};

export default ProjectPage;
