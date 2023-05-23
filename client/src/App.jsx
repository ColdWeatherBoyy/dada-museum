import { useState, useEffect } from 'react'
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Header from './Header';
import CurrentExhibits from './CurrentExhibits';
import Visit from './Visit';
import Featured from './Featured';
import Collage from './Collage';
import SiteMap from './SiteMap';

function App() {

  async function getServerMessage() {
    const response = await fetch("/api/tests/", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {getServerMessage()}, []);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <CurrentExhibits />
      <Visit />
      <Featured />
      <Collage />
      <SiteMap />
    </ChakraProvider>
  )
}

export default App
