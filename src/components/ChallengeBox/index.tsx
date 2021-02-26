import { useContext } from 'react'

import { ChallengesContext } from '../../contexts/ChallengesContext'
import { CountdownContext } from '../../contexts/CountdownContext'

import { Container, ChallengeNotActive, ChallengeActive } from './styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              className="failedButton"
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeSucceeded}
              className="succeededButton"
            >
              Completei
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}

export default ChallengeBox
