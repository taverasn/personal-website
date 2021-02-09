import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <AiIcons.AiFillFolder />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'League Elite',
                path: '/portfolio/league-elite',
                icon: <AiIcons.AiFillFile />
            },
            {
                title: 'Diet Tracker',
                path: '/portfolio/diet-tracker',
                icon: <AiIcons.AiFillFile />
            },
            {
                title: 'Marvel Selector',
                path: '/portfolio/marvel-character-selector',
                icon: <AiIcons.AiFillFile />
            },
        ]
    },
    {
        title: 'About Me',
        path: '/aboutme',
        icon: <AiIcons.AiFillPhone />
    },
    {
        title: 'Contact Info',
        path: '/contact',
        icon: <AiIcons.AiFillPhone />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Feedback',
                path: '/contact/feedback',
                icon: <IoIcons.IoIosPaperPlane />
            },
            {
                title: 'Business',
                path: '/contact/business',
                icon: <IoIcons.IoIosPaperPlane />
            },
        ]
    },
]