import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Fonts from './Fonts';
const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#232323',
    white: '#F5F5F5',
    gray: {
      dark: '#777777',
      light: '#F5F5F5',
    },
  },
  shadows: {
    sm: '0 2px 10px rgba(0,0,0,.15)',
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
