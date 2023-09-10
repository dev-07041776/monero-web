import styled, { keyframes } from "styled-components";
import monitorPng from "../../assets/png/monitor.png";

const bounce = keyframes`
  0% { transform: translate(0%, 0%); }
  10% { transform: translate(100%, 100%); }
  20% { transform: translate(0%, 50%); }
  30% { transform: translate(100%, 0%); }
  40% { transform: translate(0%, 100%); }
  50% { transform: translate(100%, 50%); }
  60% { transform: translate(0%, 0%); }
  70% { transform: translate(100%, 0%); }
  80% { transform: translate(0%, 100%); }
  90% { transform: translate(100%, 50%); }
  100% { transform: translate(0%, 0%); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const BouncingImageSC = styled.div`
  position: absolute;
  animation: ${bounce} 10s linear infinite;
  width: 100%;
  height: 100%;
  pointer-events: none;

  img {
    width: 75px;
    animation: ${rotate} 1.5s linear infinite;
    pointer-events: none;
  }
`;

export const MintingModalSC = styled.div`
  .monitor {
    background-image: url(${monitorPng});
    height: 235px;
    width: 260px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    position: relative;

    img {
      position: absolute;
      top: 26px;
      right: 26px;
      width: 207px;
      height: 150px;
      size: contain;
    }

    @media only screen and (max-width: 768px) {
      height: 150px;
      width: 165px;

      img {
        position: absolute;
        top: 18px;
        right: 18px;
        width: 130px;
        height: 95px;
        size: contain;
      }
    }
  }

  .authenticity {
    @media only screen and (max-width: 768px) {
      max-width: 100px;
      margin: auto;
      padding-top: 0.5rem;
    }
  }

  form,
  fieldset {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    padding: 1rem;
    p {
      margin: 0.25rem;
    }
  }

  .settings {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .bouncing-overlay {
    pointer-events: none;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
