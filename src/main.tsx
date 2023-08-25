import './index.css';

import App from './App';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './theme/ThemeContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter basename='/ai-ui-template/'>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
);
