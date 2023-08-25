import Home from './scenes/home/Home';
import Chat from './scenes/chat/Chat';
import Topbar from './components/global/Topbar';

import { Route, Routes } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Routes>
        <Route path='/ai-ui-template/' element={<Home />}></Route>
        <Route path='/ai-ui-template/chat' element={<Chat />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
