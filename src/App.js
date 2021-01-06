import React, { useEffect, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Fonts from './Fonts';
import { getLatestBlogs } from './services/index';
import Slider from './components/Slider';

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
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const { data: blogs } = await getLatestBlogs(10);
    setBlogs(blogs);
    console.log(blogs);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Slider latestBlogs={blogs} />
    </ChakraProvider>
  );
}

export default App;
