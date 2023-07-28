import styled from "styled-components";
import bgGif from "../../../../assets/gif/believe.gif";
import bgImg from "../../../../assets/jpg/bg.jpg";

export const DesktopSC = styled.div`
  padding: 2rem;
  background: black;
  overflow: hidden;
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;

  @media only screen and (max-width: 1024px) {
    background-size: contain;
  }

  .desktop-icons {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    max-width: 200px;
  }
`;

export const DesktopIconSC = styled.img``;
