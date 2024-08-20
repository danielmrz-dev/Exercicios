import React from 'react';
// import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <ProductsList/>
    </>
  );
}

export default App;
