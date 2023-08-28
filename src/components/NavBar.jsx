import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons'

import CartWidget from './CartWidget'

const navItems = [
  { idx: 0, name: 'Sobre nosotros', path: '#' },
  { idx: 1, name: 'Contactanos', path: '#' },
  { idx: 2, name: 'Lo último', path: '#' },
]

const NavBar = ({cart}) => {
  console.log(cart)
  // control responsive https://chakra-ui.com/docs/hooks/use-disclosure
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box boxShadow="lg" px={2} width="100%" h={20}>
      <Flex 
        h='100%'
        alignItems="center"
        justifyContent="space-between"
        mx="auto">
        <IconButton
          p={2} fontSize={20}
          size="lg"
          icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
          rounded="none"
          bg='blackAlpha.900' 
          color='whiteAlpha.900'
          aria-label="Abrir menú"
          display={['inherit', 'inherit', 'none']}
          onClick={isOpen ? onClose : onOpen}
          _hover={{ color: 'black.700', bg: 'white.100' }} />
        <HStack spacing={5} alignItems="center">
          <Avatar
            href="#"
            as={Link}
            size="md"
            showBorder={false}
            rounded="none"
            src="src/assets/react.svg" />
          <HStack
            as="nav"
            spacing={1}
            display={{ base: 'none', md: 'flex' }}
            alignItems="center">
            {navItems.map((item, key) => {
              return (<NavItem {...item} key={key} onClose={onClose} />)
            })}
          </HStack>
        </HStack>
        <CartWidget cart={cart} />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={['inherit', 'inherit', 'none']}>
          <Stack as="nav" spacing={2}>
            {navItems.map((item, key) => {
              return (<NavItem {...item} key={key} onClose={onClose} />)
            })}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

const NavItem = (item, key, onClose) => {
  return (
    <Link
      key={key}
      href={item.path}
      px={4}
      py={2}
      fontSize="lg"
      lineHeight="1"
      onClick={() => onClose()}
    >
      <Text>{item.name}</Text>
    </Link>
  )
}

export default NavBar