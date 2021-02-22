import { ThemeProvider } from 'styled-components'

import ExperienceBar from './components/ExperinceBar'

import Light from './styles/themes/light'
import GlobalStyle from './styles/global'

import { Container } from './styles/App'

const App = () => {
  return (
    <ThemeProvider theme={Light}>
      <div>
        <GlobalStyle />
        <Container>
          <ExperienceBar />
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default App
