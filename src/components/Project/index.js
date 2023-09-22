import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  img {
    height: 25%;
    width: 50%;
    margin: 5px 50% 5px;
  }
  p {
    margin: 5px 25% 5px;
  }
  hr {
    background: white;
    height: 1px;
    width: 50%;
  }
  div {
    width: 50%;
  }
  span {
    font-size: 200%;
    white-space: nowrap;
  }
`;

const Project = ({ item }) => {
  return (
    <StyledDiv>
      <Link to={item.path}>
        <div>
          <span>
            {item.icon}
            {item.title}
          </span>
        </div>
      </Link>
      <hr />
      <img src={item.image1} alt="Main Project Photo" />
      <p>{item.description}</p>
    </StyledDiv>
  );
};

export default Project;
