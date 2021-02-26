import { useContext } from 'react'

import { CountdownContext } from '../../contexts/CountdownContext'

import { Contianer, Button, ButtonActive } from './styles'

const CountDown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    startCountDown,
    resetCountdown,
    isActive,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <Contianer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Contianer>

      {hasFinished ? (
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <>
          {isActive ? (
            <ButtonActive onClick={resetCountdown} type="button">
              Abandonar um ciclo
            </ButtonActive>
          ) : (
            <Button onClick={startCountDown} type="button">
              Iníciar um ciclo
            </Button>
          )}
        </>
      )}
    </div>
  )
}

export default CountDown
