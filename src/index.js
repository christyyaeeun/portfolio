import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </BrowserRouter>
);

serviceWorker.unregister();
reportWebVitals();
