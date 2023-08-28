import {NavBar, ItemListContainer} from './components'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // Ejemplo para renderizado dinámico
  // Se puede crear una app dinámica haciendo fetch del menú
  // En este caso, la tabla 'menuItem' en db tiene que definir
  // Sus propiedades. Acá usamos un ejemplo.

  return (
    <ChakraProvider>
    {/* Toda la app */}
    <NavBar/>
    <ItemListContainer/>
    </ChakraProvider>
  )
}

export default App
