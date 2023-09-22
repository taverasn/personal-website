import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { SideBarData } from "../SideBarData";
import SubMenu from "../SubMenu";
import { IconContext } from "react-icons/lib";

const StyledNav = styled.div`
  background: yellow;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const SideBarNav = styled.nav`
  background: yellow;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SideBarWrap = styled.div`
  width: 100%;
`;

const StyledLogo = styled.div`
  a {
    font-family: "Pacifico", cursive;
    text-decoration: none;
    font-size: 25px;
    color: black;
  }
  a:hover {
    color: yellow;
    background: black;
  }
`;

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <StyledNav className="navbar-fixed">
          <StyledLogo>
            <Link to="/">Nicholas Taveras</Link>
          </StyledLogo>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </StyledNav>
        <SideBarNav sidebar={sidebar}>
          <SideBarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SideBarData.map((item, idx) => {
              return <SubMenu item={item} key={idx} />;
            })}
          </SideBarWrap>
        </SideBarNav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
