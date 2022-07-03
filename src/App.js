import React from "react";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from './context/AuthContext';
import { AppRoutes } from "./routes/AppRoutes";
import './styles/styles.css'

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
