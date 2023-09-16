import { Box, Flex, Avatar, HStack, Text, Link, IconButton, useDisclosure, useColorModeValue, Stack, Button, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const navItems = [
  { idx: 0, name: 'Liquidación', path: '/category/liquidacion' },
  { idx: 1, name: 'Lo nuevo', path: '/category/nuevo' },
  { idx: 2, name: 'Contacto', path: '' },
]

const NavBar = ({ cart }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonStyles = {
    px: 2,
    fontSize: 'x-large',
    rounded: 'none',
    bg: 'blackAlpha.900',
    color: 'white',
    _hover: {
      bg: 'whiteAlpha.700',
      color: 'blackAlpha.700'
    },
    _focus: {
      bg: 'whiteAlpha.900',
      color: 'blackAlpha.900'
    }
  };

  return (
    <Box borderBottom='1px solid black' width="100%" h={20}>
      <Flex px={2} h='100%' alignItems="center" justifyContent="space-between" mx="auto">
        <IconButton
          p={2} fontSize={20}
          size="lg"
          icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
          rounded="none"
          px={2}
          bg={'none'}
          color={'black'}
          _hover={{
            bg: 'blackAlpha.900',
            color: 'whiteAlpha.900'
          }}
          aria-label="Abrir menú"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen} />
        <HStack spacing={100} alignItems="center">
          <NavLink to={`/`}>
            <Button {...buttonStyles} fontWeight={900}>HYPE STORE</Button>
          </NavLink>
          <HStack as="nav" spacing={5} display={{ base: 'none', md: 'flex' }} zIndex='999' alignItems="center">
            {navItems.map((item, key) => (
              <NavLink key={key} to={`${item.path}`} onClick={onClose}>
                <Text fontSize='x-large' transitionDuration='0.1s' _hover={{ borderBottom: '1px solid black' }} fontWeight='500'>{item.name}</Text>
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <CartWidget cart={cart} />
      </Flex>
      {isOpen && (
        <Box display={['flex', 'flex', 'none']} px='5' pb='5' position='absolute' zIndex='999' background='white' w='100%'>
          <Stack as="nav" spacing={5} animation={'ease-in-out'}>
            {navItems.map((item, key) => (
              <NavLink key={key} to={`${item.path}`} onClick={onClose}>
                <Text fontSize='x-large' transitionDuration='0.1s' _hover={{ borderBottom: '1px solid black' }} fontWeight='500'>{item.name}</Text>
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default NavBar