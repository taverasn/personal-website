import React from 'react'
import { useState } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
    display: flex;
    font-family: 'Pacifico', cursive;
    color: #000;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #35a799;
        border-left: 4px solid #000;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
`;

const SideBarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #2e9688;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Pacifico', cursive;
    color: #000;
    font-size: 18px;

    &:hover {
        background: #35a799;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubNav = () => setSubnav(!subnav)

    return(
        <>
        <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
            <div>
                {item.icon}
                <SideBarLabel>{item.title}</SideBarLabel>
            </div>
            <div>
                {item.subNav && subnav 
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed 
                : null}
            </div>
        </SideBarLink>
        {subnav && item.subNav.map((item, idx) => {
            return (
                <DropdownLink to={item.path} key={idx}>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </DropdownLink>
            );
        })}
        </>
    );
}

export default SubMenu;