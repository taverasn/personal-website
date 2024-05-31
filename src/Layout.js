// Styling
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaQuery from "react-responsive";

// component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { PersonalProjectData } from "./components/PersonalProjectData";

// page imports
import PortfolioPage from "./pages/PortfolioPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectPage from "./pages/ProjectPage";
import background from "./img/background.jpg";
// React Imports
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProfessionalProjectData } from "./components/ProfessionalProjectData";
import ProfessionalProjectPage from "./pages/ProfessionalProjectPage";

// Styled Component
const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex-grow: 1;
  }
`;

function Layout() {
  return (
    <StyledLayout>
      <MediaQuery minDeviceWidth={693}>
        <Header />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <SideBar />
      </MediaQuery>
      <main style={{ backgroundImage: `url(${background})` }}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <PortfolioPage {...props} />}
          />
          <Route
            exact
            path="/pdf/Taveras,Nicholas_Resume.pdf"
            render={(props) => <PortfolioPage {...props} />}
          />
          {PersonalProjectData.map((item, idx) => {
            return (
              <Route
                exact
                path={item.path}
                key={idx}
                render={(props) => (
                  <ProjectPage item={item} key={idx} {...props} />
                )}
              />
            );
          })}
          {ProfessionalProjectData.map((item, idx) => {
            return (
              <Route
                exact
                path={item.path}
                key={idx}
                render={(props) => (
                  <ProfessionalProjectPage item={item} key={idx} {...props} />
                )}
              />
            );
          })}
          <Route
            exact
            path="/aboutme"
            render={(props) => <AboutMePage {...props} />}
          />
        </Switch>
      </main>
      <Footer />
    </StyledLayout>
  );
}

export default withRouter(Layout);
