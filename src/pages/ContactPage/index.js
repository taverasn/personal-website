// Styling Imports
import styled from "styled-components";

// Component Imports

// Styled Components
const StyledPage = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  color: black;
`;

const ContactPage = (props) => {
  return (
    <StyledPage>
      <h1>Contact Details</h1>
      <section>
        <ul>
          <li>
            <strong>Name:</strong> Nicholas Taveras
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:taveras123n@gmail.com">taveras123n@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (484) 651-2374
          </li>
          <li>
            <strong>Location:</strong> Reading, Pennsylvania
          </li>
        </ul>
      </section>

      <h1>Availability</h1>
      <section>
        <p>Monday - Wednesday: 9:00 AM - 6:00 PM EST</p>
        <p>Thursday: Unavailable</p>
        <p>Friday - Sunday: 9:00 AM - 10:00 PM EST</p>
      </section>
    </StyledPage>
  );
};

export default ContactPage;
