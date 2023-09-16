import { BsCartFill } from "react-icons/bs";
import { Flex, Text, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

const CartWidget = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = cart && cart.length > 0 ? Math.min(cart.length, 10) : 0;

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Flex justifyContent='center' alignItems='normal' rounded='none' p={2} cursor='pointer' onClick={onOpen} fontSize={20} variant='outline'>
      <Button
        px={6}
        fontSize={'x-large'}
        rounded='none'
        bg={'transparent'}
        color={'blackAlpha.900'}
        transitionDuration='0.1s'
        _hover={{
          bg: 'blackAlpha.900',
          color: 'whiteAlpha.900'
        }}
        _focus={{
          bg: 'blackAlpha.900',
          color: 'whiteAlpha.900'
        }}>
        <Flex alignItems='center' justifyContent='center'><BsCartFill /> <Text paddingLeft='1'>{cartItems}</Text></Flex>
      </Button>
    </Flex>
  )
}

export default CartWidget