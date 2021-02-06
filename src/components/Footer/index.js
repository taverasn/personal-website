// Styling Imports
import styled from 'styled-components';

// Styled Component
const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
    h3 {
        font-size: 20px;
    }
    section a {
        color: white;
    }
    i {
        font-size: 25px;
        margin: 10px 0 10px 5px;
    }
`;

const Footer = (props) => {
    return (
        <StyledFooter className="purple lighten-2">
            <h3>Follow Me</h3>
            <section>
                <a href="https://www.linkedin.com/in/taverasn" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://youtube.com/channel/UCvAs9pcnm_BfCuM0cG_7H3g" target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="https://twitter.com/TheGentlemen809" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/tav809" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.github.com/taverasn" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </section>
            <p>Copyright &copy; All rights reserved {new Date().getFullYear()} League Elite</p>
        </StyledFooter>
    );
};

export default Footer;