import Home from './scenes/home/Home';
import Chat from './scenes/chat/Chat';
import Topbar from './components/global/Topbar';

import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
