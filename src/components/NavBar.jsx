import {
  Box, Flex, Avatar, HStack, Text, Link, IconButton, useDisclosure, useColorModeValue, Stack, Button, Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CartWidget from './CartWidget'
import { cartContext } from '../context/ShoppingCartContext'

const navItems = [
  { idx: 0, name: 'Sale', path: '/category/hSpPzmLSRAXS4KknnPau' },
  { idx: 1, name: 'New in', path: '/category/KUFjSgLNfA3ASV4tHOuk' },
]

const buttonStyles = {
  rounded: 'none',
  bg: 'transparent',
  border: '1px solid black',
  color: 'blackAlpha.900',
  _hover: {
    bg: 'blackAlpha.900',
    color: 'whiteAlpha.900'
  },

};

const NavBar = () => {
  const { cart, setCart } = useContext(cartContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation().pathname.split('/').pop();

  
  return (
    <Box borderBottom='1px solid black' width="100%" p={'0.75rem'}>
      <Flex px={2} h='100%' alignItems="center" justifyContent="space-between" mx="auto">
        <Flex gap={5} direction={'row'} justifyContent='space-around' alignItems='center'>
        <IconButton
          p={2} fontSize={20}
          size="lg"
          icon={!isOpen ? <Icon as={HamburgerIcon} /> : <CloseIcon />}
          rounded="none"
          border="1px solid black"
          px={2}
          bg={'none'}
          color={'black'}
          _hover={{
            bg: 'blackAlpha.900',
            color: 'whiteAlpha.900'
          }}
          aria-label="Abrir menú"
          display={{ base: 'inherit', lg: 'none' }}
          onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={100} alignItems="center">
          <StoreIcon />
        </HStack>
        </Flex>
        <Flex gap={20}>
        <HStack as="nav" spacing={5} display={{ base: 'none', lg: 'flex' }} zIndex='999' alignItems="center">
            {navItems.map((item, key) => {
            const isActiveElement = location === item.path.split('/').pop()
            return (
              <NavLink key={key} to={`${item.path}`} onClick={isActiveElement ? null : onClose}>
                <Text fontSize={20} transitionDuration='0.1s' _hover={!isActiveElement ? {borderBottom:'1px solid black'} : {}} borderBottom={isActiveElement ? '1px solid black' : ''} >{item.name.toLocaleUpperCase()}</Text>
              </NavLink>
            )})}
          </HStack>
        <CartWidget cart={cart} isActiveElement={location === 'cart'} />
        </Flex>
      </Flex>
      {isOpen && (
        <Box display={{ base: 'flex', lg: 'none' }} px='5' pb='5' position='absolute' zIndex='999' background='white' w='100%'>
          <Stack as="nav" spacing={5} animation={'ease-in-out'}>
            <Drawer onClose={onClose} isOpen={isOpen} size={'full'} placement='left'>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton size={'lg'} my={3} />
                <DrawerHeader display={'flex'} justifyContent={'center'}><StoreIcon /></DrawerHeader>
                <DrawerBody>
                  <Flex marginLeft='10vw' justifyContent='center' alignItems='' direction='column' h='100%' gap={10}>
                    {navItems.map((item, key) => {
                    const isActiveElement = location === item.path.split('/').pop()
                    return (
                      <Box key={key} color={!isActiveElement ? 'blackAlpha.900' : 'whiteAlpha.900'} background={isActiveElement ? 'blackAlpha.900' : 'none'} _hover={location !== item.path.split('/').pop() ? {background: 'blackAlpha.900', color: 'whiteAlpha.900'} : {}} px={5} py={1}>
                        
                        <NavLink to={`${item.path}`} onClick={isActiveElement ? null : onClose}>
                          <Text fontSize='xxx-large'  transitionDuration='0.5s' fontWeight='500'>{item.name}</Text>
                        </NavLink>
                      </Box>
                    )})}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Stack>
        </Box>
      )}
    </Box>
  )
}

const StoreIcon = () => {
  return (
    <NavLink to={'/'}>
      <Button p={2} fontSize={25} size="lg" {...buttonStyles} fontWeight={900}>HYPE STORE</Button>
    </NavLink>
  )
}

export default NavBar