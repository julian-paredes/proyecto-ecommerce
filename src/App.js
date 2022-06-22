import React from "react";
import './styles/styles.css'
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from "./routes/AppRoutes";




function App() {

  return (
  <AuthProvider>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </AuthProvider>
  )
}

export default App;
