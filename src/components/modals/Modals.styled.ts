import styled, { keyframes } from "styled-components";

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

  img {
    width: 75px;
    animation: ${rotate} 1.5s linear infinite;
  }
`;

export const MintingModalSC = styled.div`
  img {
    max-width: 200px;
    margin: auto;
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
  }

  .bouncing-overlay {
    pointer-events: none;
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
