import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { ProfileContainer } from './styles'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <ProfileContainer>
      <img src="https://github.com/lockdzn.png" alt="LockDzn" />
      <div>
        <strong>Ryan Souza</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  )
}

export default Profile
