// Styling
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// component imports
import Header from './components/Header';
import Footer from './components/Footer';

// page imports
import HomePage from './pages/HomePage';

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
      <Header/>
      <main>
        <Switch>
          <Route exact path='/' render={props =>
            <HomePage 
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
