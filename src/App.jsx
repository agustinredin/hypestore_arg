import { useState } from 'react'
import { Typewriter, Footer, NavBar, ItemListContainer, ItemDetailContainer, Checkout } from './components'
import { ChakraProvider, Button, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import ShoppingCartProvider from './context/ShoppingCartContext'
import ProductProvider from './context/ProductContext'
import "@fontsource/press-start-2p"
import '@fontsource/bungee-hairline';
import '@fontsource-variable/inter';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEuebyKi5exZjrjHb_TXn1wQ4ELd43N5M",
  authDomain: "react-ecommerce-test-5abde.firebaseapp.com",
  projectId: "react-ecommerce-test-5abde",
  storageBucket: "react-ecommerce-test-5abde.appspot.com",
  messagingSenderId: "176616027096",
  appId: "1:176616027096:web:a75f19937b1031193e38ad",
  measurementId: "G-DCH0XX9SGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const theme = extendTheme({
  fonts: {
    heading: `'Bungee Hairline', sans-serif`,
    body: `'Inter Variable', sans-serif`
  }
})

const messages = [
  'Todos nuestros precios están expresados en USD.', 
  'Aprovechá el sale hasta el 15 de octubre.',
  'Envío gratis a todo el país.'
];

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ShoppingCartProvider>
          <ProductProvider>
            <Typewriter messages={messages}/>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/category/:id' element={<ItemListContainer />} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Checkout />} />
            </Routes>
            <Footer />
          </ProductProvider>
        </ShoppingCartProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
