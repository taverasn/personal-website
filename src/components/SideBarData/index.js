import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SideBarData = [
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <AiIcons.AiFillFolder />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Thiefs Fortune",
        path: "/portfolio/thiefs-fortune",
        icon: <GiIcons.GiPirateFlag />,
      },
      {
        title: "Descender",
        path: "/portfolio/descender",
        icon: <GiIcons.GiSpaceship />,
      },
      {
        title: "Psyche",
        path: "/portfolio/psyche",
        icon: <GiIcons.GiBrain />,
      },
    ],
  },
  {
    title: "About Me",
    path: "/aboutme",
    icon: <GiIcons.GiBookCover />,
  },
  {
    title: "Contact Info",
    path: "/contact",
    icon: <AiIcons.AiFillPhone />,
  },
];
