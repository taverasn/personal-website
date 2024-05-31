import React from "react";
import * as GiIcons from "react-icons/gi";
export const PortfolioData = [
  {
    title: "Sad Ogre Studios - Psyche",
    duration: "August 2023 - Present",
    role: "UI/Systems Programmer",
    path: "/portfolio/psyche",
    skills: "Unity | C# | Jira | Confluence | Perforce | FMOD",
    projectLink: "https://sadogrestudios.itch.io/psyche",
    icon: <GiIcons.GiBrain />,
    image1: "/Psyche_Images/psyche_gameplay.png",
    contributions: [
      {
        url: "https://www.youtube.com/watch?v=NJuSStkIZBg&t=1546s",
        name: "Robust Save and Load System",
        description:
          "I implemented a robust save and load system, allowing players to effortlessly save their progress and resume their journey at any point. This feature enhances player convenience and engagement.",
      },
      {
        name: "User-Friendly Pause Menu",
        description:
          " I designed a user-friendly pause menu, providing players with options to adjust audio and video settings on the fly. This ensures players have control over their gaming experience.",
      },
      {
        name: "Comprehensive Player Menu",
        description:
          "I created a comprehensive player menu that includes class selection, memories, and a quest journal. This menu serves as a valuable resource for players, enhancing their understanding of the game world.",
      },
      {
        name: "HUD Design",
        description:
          "I designed and implemented a Heads-Up Display (HUD) that displays essential information such as health, stamina, and player abilities, allowing players to stay informed during intense combat scenarios.",
      },
      {
        name: "Class Swap Wheel UI",
        description:
          "I developed a Class Swap Wheel UI that enables players to dynamically switch character classes during combat. This feature adds depth and adaptability to gameplay.",
      },
      {
        name: "Adaptive Audio Integration",
        description:
          " I seamlessly integrated FMOD Studio into the project, enhancing the game with adaptive audio, further immersing players in the game's atmosphere.",
      },
      {
        name: "Visually Appealing UI:",
        description:
          "Utilizing Unity, I designed visually appealing and intuitive user interfaces for both the player menu and pause menu, enhancing the overall user experience.",
      },
      {
        name: "Quest System Design",
        description:
          "Designed and implemented an immersive Quest System, merging quest points, map, and journal for seamless player navigation and organization. Introduced multi-step quests with varied states and rewards, crafting a dynamic narrative that captivates players through real-time notifications.",
      },
    ],
  },
  {
    title: "Galaxy Cabin - Descender",
    duration: "May 2023 - May 2023",
    role: "Graphics Programmer",
    path: "/portfolio/descender",
    skills: "C++ | Flecs | Jira | Github | OpenGL | Blender | Freetype",
    projectLink: "https://phorcy.itch.io/descender-release-build",
    icon: <GiIcons.GiSpaceship />,
    image1: "/Descender_Images/descender_gameplay.png",
    contributions: [
      {
        name: "Enhanced Visual Experience",
        description:
          "I implemented cutting-edge 3D Orthographic Graphics in OpenGL to elevate the game's visual appeal. This enhancement immerses players in a visually stunning space battleground.",
      },
      {
        name: "Efficient Text Rendering",
        description:
          "Leveraging the power of OpenGL and the freetype library, I ensured efficient and crisp text rendering in the game. Players can easily access vital information, contributing to a seamless gaming experience.",
      },
      {
        name: "Dynamic UI Elements",
        description:
          "Utilizing OpenGL, I created a sophisticated system to render user interface (UI) elements. This system dynamically interpreted position, rotation, and scale data from an XML file, ensuring the UI was seamlessly integrated into the gameplay.",
      },
      {
        name: "3D Model Integration",
        description:
          " I developed a data-oriented system that seamlessly imported 3D models from Blender-exported objects, expertly converting them into h2b files. This streamlined the integration of 3D assets, contributing to the game's immersive world.",
      },
      {
        name: "Looping Game World Camera",
        description:
          "I implemented a looping game world camera, enhancing the player's navigation experience. This feature ensures a continuous and seamless gameplay environment, allowing players to focus on the action.",
      },
    ],
  },
  {
    title: "Prime Androids - Thiefs Fortune",
    duration: "August 2022 - November 2022",
    role: "Lead/Gameplay/Systems Programmer",
    path: "/portfolio/thiefs-fortune",
    skills: "Unity | C# | Trello | Github",
    projectLink: "https://phorcy.itch.io/thiefs-fortune-demo",
    icon: <GiIcons.GiPirateFlag />,
    image1: "/ThiefsFortune_Promo/Shop.png",
    contributions: [
      {
        name: "AI",
        description:
          "I implemented advanced AI behaviors, pathfinding algorithms, and combat tactics to create dynamic and engaging enemy encounters, ensuring that players face formidable adversaries.",
      },
      {
        name: "Inventory",
        description:
          "I managed the game's inventory system, overseeing item spawning, implementing item effects, and streamlining item management. This added depth to the gameplay, allowing players to customize their experience",
      },
      {
        name: "Weapon Design",
        description:
          "I designed and brought to life a diverse arsenal of weapons, including swords, pistols, and cannons, using Unity and C#. These realistic and meticulously crafted weapons enriched the player's combat experience.",
      },
      {
        name: "Collaboration",
        description:
          "Collaboration was key to our success. I actively collaborated with the development team to ensure seamless and immersive gameplay, including the implementation of player abilities and environmental interactions.",
      },
      {
        name: "Refinement",
        description:
          "Throughout the development process, I tirelessly iterated on game mechanics, ensuring that they were polished to perfection. This dedication resulted in a highly refined and engaging final product.",
      },
    ],
  },
  {
    title: "Anubis' Revenge",
    duration: "August 2022 - September 2022",
    role: "Lead/UI/Gameplay Programmer",
    path: "/portfolio/anubis-revenge",
    skills: "Unity | C# | Trello | Github",
    projectLink: "https://phorcy.itch.io/anubis-revenge-demo",
    icon: <GiIcons.GiMummyHead />,
    image1: "/Anubis_Images/anubis_main.png",
    contributions: [
      {
        name: "HUD Development",
        description:
          "I designed and implemented the game's Heads-Up Display (HUD), providing players with vital information at a glance. The HUD ensures players stay informed during intense gameplay, enhancing their overall experience.",
      },
      {
        name: "Menu Systems",
        description:
          "I created user-friendly and intuitive menus for pausing the game, winning, and losing. These menus are essential for player interaction and serve as key components in the overall gameplay experience.",
      },
      {
        name: "Player Controller",
        description:
          "I was responsible for crafting all aspects of the player controller, ensuring smooth and responsive character movement, jumping, and action mechanics. The player controller is the core of the game's interactivity and enjoyment.",
      },
      {
        name: "Sound Manager Creation",
        description:
          "I designed and implemented a comprehensive sound manager responsible for efficiently handling references to all audio assets. This sound manager streamlined the integration of audio into the game, ensuring that sounds played at the right moments and under the appropriate circumstances.",
      },
    ],
  },
];
