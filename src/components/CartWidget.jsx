import { BsCartFill } from "react-icons/bs";
import { Flex, Text, Button, Box, SlideFade, useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'

const CartWidget = ({ cart, isActiveElement }) => {
  const { isOpen, onToggle } = useDisclosure()
  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      if(!isOpen) onToggle()
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <>
    {cart.length > 0 ? (
      <SlideFade in={isOpen}>
        <NavLink to={isActiveElement ? null : '/cart'}>
              <Flex justifyContent='center' alignItems='normal' rounded='none' p={2} cursor='pointer' fontSize={20} variant='outline'>
                <Flex alignItems='center' justifyContent='center'>
                  <Box borderBottom={isActiveElement ? "1px solid black" : ""} _hover={!isActiveElement ? {borderBottom: '1px solid black'} : {}} transitionDuration='0.25s'>
                    BAG (
                    <ItemCount cart={cart} />
                    )
                  </Box>
                </Flex>
              </Flex>
            </NavLink>
      </SlideFade>
   ) : null}
    </>
  )
}

export default CartWidget