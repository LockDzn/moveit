import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../../styles/global'

import Light from '../../styles/themes/light'
import Dark from '../../styles/themes/dark'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
