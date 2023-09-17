import { BsCartFill } from "react-icons/bs";
import { Flex, Text, Button, Box,  } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount'

const CartWidget = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Flex justifyContent='center' alignItems='normal' rounded='none' p={2} cursor='pointer' onClick={onOpen} fontSize={20} variant='outline'>
      <Flex alignItems='center' justifyContent='center'>
        <Box>BAG (
          <ItemCount cart={cart} />
        )
        </Box>
        </Flex>
    </Flex>
  )
}

export default CartWidget