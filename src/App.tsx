import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/default-theme';
import Container from './components/Container';
import GlobalStyle from './styles/global-style';

const App: FC = () => {


  return (
    <>
      <ThemeProvider theme={ defaultTheme }>
        <GlobalStyle />
        <Container />
      </ThemeProvider>
    </>
  )
}

export default App
