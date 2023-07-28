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

  .readme {
    div {
      padding: 24px 24px;
    }
    p {
      font-size: 1.25rem;
    }

    @media only screen and (max-width: 1024px) {
      div {
        padding: 12px 12px;
      }
      a {
        font-size: 12px !important;
      }
    }
  }

  .about {
    div {
      padding: 24px 24px;
    }
    .images {
      display: flex;
    }
    img {
      max-width: 300px;
    }
    p {
      font-size: 1.25rem;
    }

    @media only screen and (max-width: 1024px) {
      div {
        padding: 12px 12px;
      }
      img {
        max-width: 140px;
      }
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

export const DesktopIconSC = styled.img``;
