import { BsCartFill, BsCart } from "react-icons/bs";
import {IconButton, Button, Flex, Text} from '@chakra-ui/react'
const CartWidget = ({cart}) => {
  console.log(cart)
  let cartItems = cart ? cart.length : 0;
  return (
    <Flex justifyContent='center' rounded='none' p={2} fontSize={20} alignItems='center' variant='outline' bg='blackAlpha.900' color='whiteAlpha.900'>
      {cartItems > 0 ? <BsCartFill/> : <BsCart/>}
      <Text>{cartItems}</Text>
    </Flex>
    // <Button >
      
    //   <
    //   </Button>
    // <Button rounded="none"
    // aria-label="Abrir carrito" size="md" alignItems="center" justifyContent="center">
    //   <IconButton
          
    //       icon={cartItems > 0 ? <BsCartFill/> : <BsCart />}
    //       onClick={() => openCart(cartItems)}
    //       // _hover={{ color: 'white.700', bg: useColorModeValue('black.100', 'black.900'), }} 
    //       />
    //       <Text>{cartItems}</Text>
    // </Button>
  )
}

const openCart = (cartItems) => {
  console.log(cartItems)
  //llamada a modal de carrito
}

export default CartWidget