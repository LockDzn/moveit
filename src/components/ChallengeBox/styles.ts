import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 65px rbg(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;

    img {
      margin-bottom: 1rem;
    }
  }
`

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: ${(props) => props.theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: ${(props) => props.theme.colors.white};
      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;
    }

    button:hover {
      filter: brightness(0.9);
    }

    .failedButton {
      background: ${(props) => props.theme.colors.red};
    }

    .succeededButton {
      background: ${(props) => props.theme.colors.green};
    }
  }
`
