import React from "react";
import * as GiIcons from "react-icons/gi";
export const PortfolioData = [
  {
    title: "Psyche",
    duration: "September 2023 - Present",
    role: "Tools/UI/Systems Programmer",
    path: "/portfolio/psyche",
    skills: "Unity | C# | Jira | Confluence | Perforce | FMOD",
    projectLink:
      "https://drive.google.com/file/d/1mkkOS9oaxftEUA3xvfr0FxtB0V4p9MoJ/view?usp=sharing",
    icon: <GiIcons.GiBrain />,
    description:
      "Psyche invites players into a dark and mysterious world, blending the elements of a Souls-like Action Role-Playing Game (ARPG) with an emotionally charged narrative. As the protagonist, you find yourself on an extraordinary quest: to journey deep into the psyche of your loved one, trapped in a coma. Along the way, you'll encounter epic boss battles, wield dynamic class-swapping abilities in combat, uncover hidden secrets, and immerse yourself in a captivating story.",
    image1: "/Psyche_Images/psyche_gameplay.png",
    keyFeatures: [
      {
        name: "Epic Boss Fights",
        description:
          "Confront formidable adversaries in epic boss battles that will test your skills, strategy, and determination. Each boss encounter is a unique and intense challenge.",
      },
      {
        name: "Dynamic Class Swaps",
        description:
          "Adapt to any situation with the ability to dynamically swap character classes during combat. Customize your playstyle on the fly and discover new strategies to overcome your foes.",
      },
      {
        name: "Mysteries Await",
        description:
          "Explore the psyche's depths to uncover secret passages and hidden mysteries. Unearth the truth about your loved one's condition and confront the enigmatic forces that bind you.",
      },
      {
        name: "Immersive Storytelling",
        description:
          "Immerse yourself in a deeply emotional narrative as you navigate the complexities of the human mind. The game's storytelling will keep you engaged from start to finish.",
      },
    ],
    contributions: [
      {
        name: "Robust Save and Load System",
        description:
          "I implemented a robust save and load system, allowing players to effortlessly save their progress and resume their journey at any point. This feature enhances player convenience and engagement.",
      },
      {
        name: "User-Friendly Pause Menu",
        description:
          " I designed a user-friendly pause menu, providing players with options to adjust sound, video, and control settings on the fly. This ensures players have control over their gaming experience.",
      },
      {
        name: "Comprehensive Player Menu",
        description:
          "I created a comprehensive player menu that includes class selection, achievements, memories, and a quest journal. This menu serves as a valuable resource for players, enhancing their understanding of the game world.",
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
    ],
  },
  {
    title: "Descender",
    duration: "May 2023 - May 2023",
    role: "Graphics Programmer",
    path: "/portfolio/descender",
    skills: "C++ | Flecs | Jira | Github | OpenGL | Blender | Freetype",
    projectLink:
      "https://drive.google.com/file/d/1oxzMREAeszZtxaEEQOaywoJkmjTzFz67/view?usp=drive_link",
    icon: <GiIcons.GiSpaceship />,
    description:
      "Descender is a modern reimagining of the classic arcade game that takes players on an exhilarating journey through space. In this action-packed adventure, you assume the role of a skilled spaceship pilot entrusted with the crucial mission of defending humanity against relentless alien invaders. Armed with a versatile spacecraft, you'll soar through the cosmos, engage in thrilling battles, deploy powerful bombs, and aim for the ultimate high score.",
    image1: "/Descender_Images/descender_gameplay.png",
    keyFeatures: [
      {
        name: "Intense Space Battles",
        description:
          "Face off against waves of extraterrestrial adversaries in a pulse-pounding battle for survival. Your spaceship is humanity's last line of defense, and your skills will determine the fate of the human race.",
      },
      {
        name: "Freedom to Explore",
        description:
          "Enjoy the freedom of unrestricted flight as you navigate through a dynamic game world. Soar through space, dodge enemy fire, and strategically engage alien threats.",
      },
      {
        name: "Explosive Arsenal",
        description:
          "Unleash devastating bombs to decimate your foes and clear the path to victory. Choose your moments wisely and watch the screen explode in a symphony of destruction.",
      },
      {
        name: "Dynamic Patrol and Tracking",
        description:
          "Watch as enemies showcase a range of patrol and tracking patterns. Some foes may pursue you relentlessly, while others exhibit erratic movements, requiring strategic thinking and adaptability to survive.",
      },
    ],
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
    title: "Thiefs Fortune",
    duration: "August 2022 - November 2022",
    role: "Lead/Gameplay/Systems Programmer",
    path: "/portfolio/thiefs-fortune",
    skills: "Unity | C# | Trello | Github",
    projectLink: "https://github.com/taverasn/AnubisRevenge/tree/main",
    icon: <GiIcons.GiPirateFlag />,
    description:
      "Thief's Fortune is an action-packed shooter and exploration game that thrusts players into the thrilling world of the Golden Age of Pirates. In this immersive gaming experience, you step into the worn boots of a down-on-his-luck sailor whose destiny takes a treacherous turn. Cursed by the Pirate Legend, you must embark on an epic journey to unravel the curse, find hidden treasures, and confront your ultimate nemesis.",
    image1: "/ThiefsFortune_Promo/Shop.png",
    keyFeatures: [
      {
        name: "Action-Packed Gameplay",
        description:
          "Engage in heart-pounding battles as you combat hordes of formidable enemies. Use your wits, weapons, and tactics to overcome challenging foes in epic showdowns.",
      },
      {
        name: "High-Seas Adventure",
        description:
          "Take command of your own vessel and set sail across the vast and mysterious seas. Navigate through treacherous waters, explore hidden islands, and seek out coveted pirate loot.",
      },
      {
        name: "Cursed Quest",
        description:
          "Embark on a gripping quest filled with twists and turns. Uncover the dark secrets of the Pirate Legend's curse and forge your own path to redemption.",
      },
    ],
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
    projectLink: "https://github.com/taverasn/AnubisRevenge/tree/main",
    icon: <GiIcons.GiMummyHead />,
    description:
      "Anubis' Revenge is an exhilarating 2D action platformer that catapults players into an epic adventure. Set against a backdrop of challenging enemies and formidable bosses, your mission is to navigate treacherous levels and reach the end. This project represents a significant milestone as it marks the start of my game development journey in Unity. My contributions encompass a range of critical components, including the game's HUD, pause and end-game menus, player controller, and sound design.",
    image1: "/Anubis_Images/anubis_main.png",
    keyFeatures: [
      {
        name: "Action-Packed Platforming",
        description:
          "Dive headfirst into fast-paced platforming action. Traverse diverse levels filled with obstacles, enemies, and larger-than-life bosses. Your agility and reflexes will be your greatest assets.",
      },
      {
        name: "Challenging Encounters",
        description:
          "Face off against a variety of adversaries and formidable bosses that will test your skills and wit. Each level presents a unique challenge, driving your determination to conquer the game.",
      },
      {
        name: "Player-Centric Controls",
        description:
          "Experience a responsive and player-focused control system. Every movement and action are in your hands, offering precision and agency as you navigate the game world.",
      },
      {
        name: "Immersive Soundscapes",
        description:
          "Immerse yourself in the game's atmosphere with a meticulously crafted sound design. From the thrilling music to the impactful sound effects, the auditory experience enhances your engagement.",
      },
    ],
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
