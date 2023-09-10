import styled from "styled-components";
import bgImg from "../../../../assets/jpg/bg.jpg";

export const DesktopSC = styled.div`
  padding: 2rem;
  background: black;
  overflow: hidden;
  height: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  position: relative;

  .ticker {
    max-width: 200px;
    position: absolute;
    bottom: 50px;
    right: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    z-index: 1;

    .logo {
      width: 75px;

      @media only screen and (max-width: 1024px) {
        display: none;
      }
    }

    .ticker-text {
      width: 100%;
    }
  }

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
    z-index: 3;
    position: inherit;
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
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 0px;

      img {
        width: 100%;
        max-width: 100%;
      }
    }
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

  .milkers {
    .pron-images {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      img {
        width: 100%;
      }
    }

    .title {
      img {
        width: 100%;
      }
    }
  }
`;

export const DesktopIconSC = styled.img``;
