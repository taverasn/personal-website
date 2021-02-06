// Styling Imports
import styled from 'styled-components';

// React Components
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        font-family: 'Pacifico', cursive;
    }
`;

const Header = (props) => {

    return (
        <StyledHeader>
            <nav>
                <div class="nav-wrapper purple lighten-2">
                    <a href="#" class="brand-logo left">Nicholas Taveras</a>
                </div>
            </nav>
        </StyledHeader>
    );
}

export default Header;