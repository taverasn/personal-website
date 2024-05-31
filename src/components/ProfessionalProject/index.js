import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Card from "react-bootstrap/Card";

const StyledComponent = styled.div`
  .card {
    border-radius: 8px;
  }

  .image-container {
    border-radius: 8px;
    overflow: hidden; /* Hide the overflow */
    display: inline-block; /* Make the container inline-block */
  }

  .image-container img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease; /* Smooth transition for zoom */
  }

  .image-container:hover img {
    transform: scale(1.2); /* Zoom in the image */
  }

  .image-container::after {
    content: "";
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 250, 205, 0.2); /* Transparent color overlay */
    opacity: 0;
    transition: opacity 0.3s ease; /* Smooth transition for overlay */
  }

  .image-container:hover::after {
    opacity: 1;
  }
`;

const ProfessionalProject = ({ item }) => {
  return (
    <StyledComponent>
      <MediaQuery minDeviceWidth={693}>
        <Card
          className="card"
          bg="dark"
          key="Dark"
          text="white"
          style={{ width: "29.5rem" }}
        >
          <Card.Link href={item.path}>
            <div className="image-container">
              <Card.Img variant="top" src={item.image} />
            </div>
          </Card.Link>
          <Card.Body>
            <Card.Title>{item.project}</Card.Title>
            <Card.Subtitle>Role: {item.role}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>{item.description}</Card.Footer>
        </Card>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={692}>
        <Card bg="dark" key="Dark" style={{ width: "18rem" }}>
          <Card.Link href={item.path}>
            <Card.Img variant="top" src={item.image} />
          </Card.Link>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle>Role: {item.role}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>{item.description}</Card.Footer>
        </Card>
      </MediaQuery>
    </StyledComponent>
  );
};

export default ProfessionalProject;
