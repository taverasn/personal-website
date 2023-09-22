import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #009688;
  margin-bottom: 20px;
  img {
    height: 25%;
    width: 50%;
    margin: 5px 50% 5px;
  }
  p {
    margin: 5px 25% 5px;
  }
  hr {
    background: #009688;
    height: 1px;
    width: 50%;
  }
  div {
    width: 50%;
    padding-top: 15px;
    margin-top: 15px;
  }
  span {
    font-size: 200%;
    color: #009688;
    white-space: nowrap;
  }
`;

const StyledMobileDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #009688;
  margin-bottom: 20px;
  img {
    height: 50%;
    width: 95%;
    margin: 5px 100% 5px;
  }
  p {
    margin: 5px 5px 5px;
  }
  hr {
    background: #009688;
    height: 1px;
    width: 95%;
  }
  div {
    width: 100%;
    padding-top: 15px;
    margin-top: 15px;
  }
  span {
    font-size: 200%;
    color: #009688;
    white-space: nowrap;
  }
`;

const Project = ({ item }) => {
  return (
    <>
      <MediaQuery minDeviceWidth={693}>
        <StyledDiv>
          <span>
            {item.icon}
            {item.title}
          </span>
          <Link to={item.path}>More Info</Link>
          <hr className="nav-wrapper teal" />
          <img src={item.image1} alt="Main Project Photo" />
          <p>{item.description}</p>
        </StyledDiv>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <StyledMobileDiv>
          <span>
            {item.icon}
            {item.title}
          </span>
          <Link to={item.path}>More Info</Link>
          <hr className="nav-wrapper teal" />
          <img src={item.image1} alt="Main Project Photo" />
          <p>{item.description}</p>
        </StyledMobileDiv>
      </MediaQuery>
    </>
  );
};

export default Project;
