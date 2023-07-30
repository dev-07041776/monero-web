import React, { FC } from "react";
import { DesktopIconSC, DesktopSC } from "./Desktop.styled";
import AppButton from "../AppButton";
import { Earth, InfoBubble, Mspaint, Notepad2 } from "@react95/icons";
import uniswapImage from "../../../../assets/png/uniswap.png";
import dextoolsImage from "../../../../assets/png/dextools.png";
import telegramImage from "../../../../assets/png/telegram.png";
import twitterImage from "../../../../assets/png/twitter.png";
import milkersImage from "../../../../assets/png/milkers.png";
import mainLogo from "../../../../assets/png/logo.png";
import tickerMonero from "../../../../assets/gif/tickermonero.gif";
import fakelandingImage from "../../../../assets/png/landingicon.png";
import titanicScam from "../../../../assets/png/titanic-scam.png";
import alexJones from "../../../../assets/png/alexjones.png";
import img1984 from "../../../../assets/jpg/1984.jpeg";
import quake1Image from "../../../../assets/png/games/quake1.png";
import sonicImage from "../../../../assets/png/games/sonic.png";
import quake2Image from "../../../../assets/png/games/quake2.png";
import unrealImage from "../../../../assets/png/games/unreal-tournament.png";
import wormsImg from "../../../../assets/png/games/worms.png";
import ccImg from "../../../../assets/png/games/cc.png";
import cc2Img from "../../../../assets/png/games/cc2.png";
import cStrike from "../../../../assets/png/games/cstrike.png";
import lemmingsImg from "../../../../assets/png/games/lemmings.png";
import AboutMonero from "../../../modals/AboutMonero";
import FlatEarth from "../../../modals/FlatEarth";
import FakeMoon from "../../../modals/FakeMoon";
import Worms from "../../../modals/Worms";
import Command from "../../../modals/Command";
import Lemmings from "../../../modals/Lemmings";
import Quake from "../../../modals/Quake";
import Command2 from "../../../modals/Command2";
import Quake2 from "../../../modals/Quake2";
import Readme from "../../../modals/Readme";
import UnrealTournament from "../../../modals/UnrealTournament";
import Paint from "../../../modals/Paint";
import Milkers from "../../../modals/Milkers";
import Sonic from "../../../modals/Sonic";
import CartoonStrike from "../../../modals/CartoonStrike";

interface DesktopProps {}

const isMobile = window.innerWidth < 768;

export const desktopItems = [
  {
    title: "About $MONERO",
    icon: <DesktopIconSC src={mainLogo} />,
    shown: false,
    url: undefined,
    children: <AboutMonero />,
    height: isMobile ? 400 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "flat_earth.exe",
    icon: <Earth />,
    shown: false,
    url: undefined,
    children: <FlatEarth />,
    height: isMobile ? 360 : 620,
    width: isMobile ? 350 : 600,
    show: isMobile ? true : true,
  },
  {
    title: "fake_moon.rar",
    icon: <DesktopIconSC src={fakelandingImage} />,
    shown: false,
    url: undefined,
    children: <FakeMoon />,
    height: isMobile ? 360 : 620,
    width: isMobile ? 350 : 600,
    show: isMobile ? true : true,
  },
  {
    title: "pr0n_milk3rs",
    icon: <DesktopIconSC src={milkersImage} />,
    shown: false,
    url: undefined,
    children: <Milkers />,
    height: isMobile ? 400 : 600,
    width: isMobile ? 300 : 600,
    show: isMobile ? true : true,
  },
  {
    title: "Buy $MONERO",
    icon: <DesktopIconSC src={uniswapImage} />,
    shown: false,
    url: "https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x6A8A637331801981A0FB29aacc3afa732b072d55",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Dextools",
    icon: <DesktopIconSC src={dextoolsImage} />,
    shown: false,
    url: "https://www.dextools.io/app/en/ether/pair-explorer/0x1e9e20080f06c4983d1e3ba8f3aa39c41fb561dd",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Telegram",
    icon: <DesktopIconSC src={telegramImage} />,
    shown: false,
    url: "https://t.me/FakeMoonBase",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Twitter",
    icon: <DesktopIconSC src={twitterImage} />,
    shown: false,
    url: "https://twitter.com/fefmlmku1984",
  },
  {
    title: "ReadMe.txt",
    icon: <Notepad2 />,
    shown: false,
    url: undefined,
    height: isMobile ? 400 : "",
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
    children: <Readme />,
  },
  {
    title: "1984.exe",
    icon: <DesktopIconSC src={img1984} />,
    shown: false,
    url: "https://www.youtube.com/watch?v=1131xTaVo8A",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "titanic.mp4",
    icon: <DesktopIconSC src={titanicScam} />,
    shown: false,
    url: "https://www.youtube.com/watch?v=nj6Hqwmf77A",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Sonic Multiplayer",
    icon: <img src={sonicImage} alt="Sonic" />,
    shown: false,
    url: undefined,
    children: <Sonic />,
    height: isMobile ? 300 : 510,
    width: isMobile ? 350 : 900,
    show: isMobile ? false : true,
  },
  {
    title: "CStrike",
    icon: <img src={cStrike} alt="Cartoon Strike" />,
    shown: false,
    url: undefined,
    children: <CartoonStrike />,
    height: isMobile ? 300 : 655,
    width: isMobile ? 350 : 960,
    show: isMobile ? false : true,
  },
  {
    title: "Quake 1",
    icon: <img src={quake1Image} alt="Quake 1 Img" />,
    shown: false,
    url: undefined,
    children: <Quake />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },

  {
    title: "Quake 2",
    icon: <img src={quake2Image} alt="Quake 2 Img" />,
    shown: false,
    url: undefined,
    children: <Quake2 />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Unreal Tournament",
    icon: <img src={unrealImage} alt="Img" />,
    shown: false,
    url: undefined,
    children: <UnrealTournament />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Worms Armageddon",
    icon: <img src={wormsImg} alt="Worms" />,
    shown: false,
    url: undefined,
    children: <Worms />,
    height: isMobile ? 300 : 700,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Red Alert",
    icon: <img src={ccImg} alt="C&C Red Alert" />,
    shown: false,
    url: undefined,
    children: <Command />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Lemmings",
    icon: <img src={lemmingsImg} alt="Lemmings" />,
    shown: false,
    url: undefined,
    children: <Lemmings />,
    height: isMobile ? 250 : 550,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "Paint",
    icon: <Mspaint />,
    shown: false,
    url: undefined,
    height: isMobile ? 400 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
    children: <Paint />,
  },
  {
    title: "Info Wars",
    icon: <DesktopIconSC src={alexJones} />,
    shown: false,
    url: "https://www.infowars.com/",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
];

const Desktop: FC<DesktopProps> = ({}) => {
  return (
    <DesktopSC>
      <div className="desktop-icons">
        {desktopItems.map((item, index) => (
          <>
            {item.show && (
              <AppButton
                icon={item.icon}
                title={item.title}
                key={index}
                shown={item.shown}
                url={item.url}
                children={item.children}
                width={item.width}
                height={item.height}
              />
            )}
          </>
        ))}
      </div>
      <a
        href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x6A8A637331801981A0FB29aacc3afa732b072d55"
        className="ticker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mainLogo} className="logo" />
        <img src={tickerMonero} className="ticker-text" />
      </a>
    </DesktopSC>
  );
};

export default Desktop;
