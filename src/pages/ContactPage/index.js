// Styling Imports
import styled from "styled-components";

// Component Imports

// Styled Components
const StyledPage = styled.main`
  background-image: url('profile_Images/background.jpg');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: yellow;
  h1 {
    font-size: 100px;
    padding-bottom: 20px;
  }
  h2 {
    padding-top: 80px;
  }
  p {
    padding: 1px
    margin: 0px;
    align-text: center;
  }
`;

const ContactPage = (props) => {
  return (
    <StyledPage>
      <h1 className="center">Get in Touch With Me</h1>

      <h5>Nicholas Taveras</h5>
      <h5>
        <a href="mailto:taveras123n@gmail.com">taveras123n@gmail.com</a>
      </h5>
      <h5>+1 (484) 651-2374</h5>
      <h5>Reading, Pennsylvania</h5>

      <h2>Availability</h2>
      <p>Monday-Wednesday: 9:00 AM - 6:00 PM EST</p>
      <p>Friday-Sunday: 9:00 AM - 10:00 PM EST</p>
    </StyledPage>
  );
};

export default ContactPage;
