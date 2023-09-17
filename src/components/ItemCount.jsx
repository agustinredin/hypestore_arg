import React from 'react'
import {Text} from '@chakra-ui/react'
const ItemCount = ({cart}) => {
    const count = cart && cart.length > 0 ? Math.min(cart.length, 10) : 0;
  return (
    <>{count}</>
  )
}

export default ItemCount