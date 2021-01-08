import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-slideshow-image/dist/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <ColorModeScript />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
