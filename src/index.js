import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";

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

Amplify.configure(awsconfig);
