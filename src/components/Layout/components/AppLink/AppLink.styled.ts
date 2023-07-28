import styled from "styled-components";

export const AppLinkSC = styled.div`
  a {
    background: none;
    border: none;
    max-width: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    outline: none;
    box-shadow: none;
    gap: 0.25rem;
    width:80px

    &:focus {
      outline: none;
      box-shadow: none;

      .text {
        background: rgba(2, 0, 128, 1);
        border: 1px dashed white;
      }
    }

    img {
      max-width: 65px;
      max-height:80px;
      height: auto;
      padding: 0.25rem;
    }

    .text {
      padding: 0.25rem 0.5rem;
      margin: 0px;
      color: white;
      font-size: 1rem;
      text-decoration: none;
    }
  }
`;
