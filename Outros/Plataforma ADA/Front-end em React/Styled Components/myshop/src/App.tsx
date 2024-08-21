import React from 'react';
// import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles/>
      <Header/>
      <ProductsList/>
    </Provider>
  );
}

export default App;
