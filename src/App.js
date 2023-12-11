import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Portfolio, Layout, Error } from './pages'
import theme from "./theme";
import "./style.css"

function App() {
  return (
    <ChakraProvider theme={ theme }>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/portfolio" element={ <Portfolio /> } />
          <Route path="/about" element={ <About /> } />
        </Route>
        <Route path="/*" element={ <Error /> } />
      </Routes>
    </ChakraProvider>
  );
}

export default App;