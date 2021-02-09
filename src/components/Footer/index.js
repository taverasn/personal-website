// Styling Imports
import styled from 'styled-components';

// Styled Component
const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
    height: 75px;
    section a {
        color: black;
    }
    i {
        font-size: 25px;
        margin: 10px 0 10px 5px;
    }
    a:hover {
        color: white;
    }
    p {
        color: black;
        text-align: center
    }
`;

const Footer = (props) => {
    return (
        <StyledFooter className="teal">
            <section>
                <a href="https://www.linkedin.com/in/taverasn" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://youtube.com/channel/UCvAs9pcnm_BfCuM0cG_7H3g" target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://twitter.com/TheGentlemen809" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/tav809" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com/taverasn" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </section>
            <p>Copyright &copy; All rights reserved {new Date().getFullYear()} Nicholas Taveras</p>
        </StyledFooter>
    );
};

export default Footer;