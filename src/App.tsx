import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'global/Themes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;