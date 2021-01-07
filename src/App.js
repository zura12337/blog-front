import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Fonts from './Fonts';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home/index';
import BlogPage from './pages/blog';

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#232323',
    white: '#F5F5F5',
    solidWhite: '#FFFFFF',
    gray: {
      dark: '#777777',
      light: '#F5F5F5',
      200: '#e8e8e8',
    },
  },
  shadows: {
    sm: '0 2px 10px rgba(0,0,0,.15)',
  },
  fonts: {
    logo_font: 'Libre Baskerville',
    body: 'Martel Sans',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Switch>
        <Route path="/blog/:id" component={BlogPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
