import styled from "styled-components";
import { Button } from "@react95/core";

export const AppButtonSC = styled(Button)`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  box-shadow: none;
  gap: 0.25rem;
  max-width: 80px;
  padding: 0px;

  &:active {
    padding: 0;
    outline: rgb(0, 0, 0) dotted 0px;
    outline-offset: 0px;
    box-shadow: rgb(134, 138, 142) 0px 0px 0px 0px inset,
      rgb(0, 0, 0) 0px 0px 0px 0px;
  }

  &:focus {
    outline: none;
    box-shadow: none;

    .text {
      background: rgba(2, 0, 128, 1);
      border: 1px dashed white;
    }
  }

  img {
    width: 65px;
    height: auto;
    padding: 0.25rem;
  }

  .text {
    padding: 0.25rem 0.5rem;
    margin: 0px;
    color: white;
    font-size: 1rem;
  }
`;
