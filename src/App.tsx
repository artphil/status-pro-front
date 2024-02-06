import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import AuthProvider from 'context/AuthContext';
import { Theme } from 'global/Themes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;