import React from "react";
import { useState } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarLink = styled(Link)`
  display: flex;
  font-family: "Pacifico", cursive;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  background-color: #ffdd00;

  &:hover {
    background: #101820;
    border-left: 4px solid #000;
    color: #yellow;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SideBarLabel = styled.span`
  margin-left: 16px;
  &:hover {
    color: blue;
  }
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Pacifico", cursive;
  color: #101820;

  font-size: 18px;
  &:hover {
    background: #101820;
    border-left: 4px solid #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubNav = () => setSubnav(!subnav);

  return (
    <>
      <SideBarLink
        className="sideBarLink"
        to={item.path}
        onClick={item.subNav && showSubNav}
      >
        <div>
          <SideBarLabel>
            {item.icon}
            {item.title}
          </SideBarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SideBarLink>
      {subnav &&
        item.subNav.map((item, idx) => {
          return (
            <DropdownLink to={item.path} key={idx}>
              <SideBarLabel>
                {item.icon}
                {item.title}
              </SideBarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
