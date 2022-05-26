import React from 'react';
import {NavBar} from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { CartWidget } from './components/CartWidget';
import './styles/styles.css'



function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer nombre="Julián"/>

     
    </div>
  );
}

export default App;
