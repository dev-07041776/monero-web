import styled from "styled-components";

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
`;
