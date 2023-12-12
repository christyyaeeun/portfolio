import React, { lazy, Suspense } from 'react';
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import theme from "./utils/theme";
import "./style.css"

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Layout = lazy(() => import('./pages/Layout'));
const Error = lazy(() => import('./pages/Error'));

function App() {
  return (
    <ChakraProvider theme={ theme }>
      <Suspense
        fallback={
          <Center height="100vh">
            <Spinner size="xl" thickness="4px" speed="0.65s" color="#72b3df" />
          </Center>
        }
      >
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route path="/" element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/portfolio" element={ <Portfolio /> } />
            <Route path="/about" element={ <About /> } />
          </Route>
          <Route path="/*" element={ <Error /> } />
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;