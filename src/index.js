import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <ColorModeScript />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
