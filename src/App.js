import React from 'react';
import {NavBar} from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { CartWidget } from './components/CartWidget';
import { ItemCount } from './components/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import './styles/styles.css'




function App() {
  return (
    <div className="App">
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer />
      <ItemCount prod="3"/>      
      <ItemDetailContainer />
    </div>
  );
}

export default App;
