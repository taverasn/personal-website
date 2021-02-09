// Styling
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from 'react-responsive';

// component imports
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

// page imports
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';

// React Imports
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <SideBar/>
      </MediaQuery>
        <main>
          <Switch>
            <Route exact path='/' render={props =>
              <HomePage 
              {...props}
              />
            } />
            <Route exact path='/contact' render={props =>
              <ContactPage
              {...props}
              />
            } />
            <Route exact path='/portfolio' render={props =>
              <PortfolioPage
              {...props}
              />
            } />
            <Route exact path='/portfolio/marvel-character-selector' render={props =>
              <PortfolioPage
              {...props}
              />
            } />
            <Route exact path='/portfolio/diet-tracker' render={props =>
              <PortfolioPage
              {...props}
              />
            } />
            <Route exact path='/portfolio/league-elite' render={props =>
              <PortfolioPage
              {...props}
              />
            } />
            <Route exact path='/aboutme' render={props =>
              <AboutMePage
              {...props}
              />
            } />
            <Route exact path='/contact/feedback' render={props =>
              <AboutMePage
              {...props}
              />
            } />
            <Route exact path='/contact/business' render={props =>
              <AboutMePage
              {...props}
              />
            } />
          </Switch>
        </main>
      <Footer/>
    </StyledLayout>
  );
}

export default withRouter(Layout);
