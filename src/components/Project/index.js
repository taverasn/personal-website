import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Project = ({ item }) => {
  return (
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
  );
};

export default Project;
