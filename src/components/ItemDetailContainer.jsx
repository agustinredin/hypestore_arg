import React from 'react'
import { useParams, useLocation } from 'react-router-dom/dist'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'

const ItemDetailContainer = ({cart, setCart}) => {
    const { id } = useParams();
    let location = useLocation();

    /* item */
    let item = location.state

    return (
        <SimpleGrid
            minChildWidth='md' w='100%' minH='500px'
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 2, md: 3 }}>
            <Flex>
                <Image
                    alt={'product image'}
                    src={
                        `${item.detailPath}`
                    }
                    fit='cover'
                    align={'center'}
                    w={'100%'}
                    h={{ base: '100vh' }}
                />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }} py={'20'} px={'5'}>
                <Box as={'header'}>
                    <Text
                        lineHeight={1.1}
                        fontWeight={900}
                        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                        {item.title}
                    </Text>
                    <Text
                        color={'green'}
                        fontWeight={300}
                        fontSize={'2xl'}>
                        ${item.price}
                    </Text>
                </Box>

                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={'column'}
                    divider={
                        <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                    }>
                    <Stack spacing={{ base: 4, sm: 6 }}>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize={'2xl'}
                            fontWeight={'300'}>
                            {item.desc}
                        </Text>
                    </Stack>
                                <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('black.500', 'black.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Lorem Ipsum
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Lorem Ipsum</ListItem>
                  <ListItem>Lorem Ipsum</ListItem>{' '}
                  <ListItem>Lorem Ipsum</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Lorem Ipsum</ListItem>
                  <ListItem>Lorem Ipsum</ListItem>
                  <ListItem>Lorem Ipsum</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('black.500', 'black.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Lorem Ipsum
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Lorem Ipsum:
                  </Text>{' '}
                  Lorem Ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Lorem Ipsum:
                  </Text>{' '}
                  Lorem Ipsum
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Lorem Ipsum:
                  </Text>{' '}
                  Lorem Ipsum{' '}
                </ListItem>
              </List>
            </Box>
                </Stack>

                <Button
                    px={6}
                    fontSize={'x-large'}
                    rounded='none'
                    bg={'blackAlpha.700'}
                    color={'whiteAlpha.700'}
                    transitionDuration='0.1s'
                    _hover={{
                        bg: 'blackAlpha.900',
                        color: 'whiteAlpha.900'
                    }}
                    _focus={{
                        bg: 'blackAlpha.900',
                        color: 'whiteAlpha.900'
                    }}
                    onClick={() => setCart([...cart, {item}])}>Añadir al carrito</Button>
            </Stack>
        </SimpleGrid>
    )
}

export default ItemDetailContainer