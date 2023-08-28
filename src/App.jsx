import {useState} from 'react'
import {NavBar, ItemListContainer} from './components'
import { ChakraProvider, Button } from '@chakra-ui/react'

function App() {
  const [cart, setCart] = useState([])

  return (
    <ChakraProvider>
    <NavBar cart={cart}/>
    <ItemListContainer greeting="Hola mundo!"/>
    <Button onClick={()=> setCart([...cart, {}])}>Agregar al carrito</Button>
    </ChakraProvider>
  )
}

export default App
