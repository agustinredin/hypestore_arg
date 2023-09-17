import { useState } from 'react'
import { NavBar, ItemListContainer, ItemDetailContainer } from './components'
import { ChakraProvider, Button, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import ShoppingCartProvider from './context/ShoppingCartContext'
import "@fontsource/press-start-2p"
import '@fontsource/bungee-hairline';
import '@fontsource-variable/inter';

const theme = extendTheme({
  fonts: {
    heading: `'Bungee Hairline', sans-serif`,
    body: `'Inter Variable', sans-serif`
  }
})

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ShoppingCartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/category/:id' element={<ItemListContainer/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </ShoppingCartProvider>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
