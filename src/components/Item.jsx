import React from 'react'
import { BsCart, BsCartPlus, BsFillInfoCircleFill } from "react-icons/bs";
import { useParams, NavLink } from 'react-router-dom'
import { Flex, Heading, Button, Text, Stack, Box, Image, keyframes } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import "@fontsource/press-start-2p"
import '@fontsource/bungee-hairline';
import '@fontsource-variable/inter';

const hover = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    -webkit-backdrop-filter:blur(8px);
    backdrop-filter: blur(8px);
    filter: grayscale(100%);
    box-shadow: 3px 3px 7px 0px #000000;
    transform: translateZ(0);
    margin: -1px;
    transform: translateX(-3px) translateY(-3px);
    border: 1px solid black;
  }
`

const Item = ({item}) => {

    return (
    <NavLink to={{pathname:`/item/${item.key}`, state: {item:item}}} state={item} position='relative' display='flex'>
        <Flex position='relative'>
            <Flex justifyContent='space-between' direction='column' paddingX='5%' paddingY='5%' alignItems='left' position='absolute' w='100%' h='100%' margin='-1px' _hover={{ animation: `${hover} 0.5s forwards` }} cursor='pointer' opacity='0' zIndex='1'>
                    <Heading color='black'  fontWeight={900} position='absolute' top='5%' left='5%' fontSize='xx-large'>{item.title}</Heading>

                    <Button
                        px={3}
                        justifySelf='center'
                        alignSelf='center'
                        position='absolute'
                        top='45%'
                        fontSize={'x-large'}
                        rounded='none'
                        border='1px solid black'
                        bg={'transparent'}
                        color={'white'}
                        _hover={{
                            bg: 'blackAlpha.900',
                            color: 'whiteAlpha.900'
                        }}
                        _focus={{
                            bg: 'blackAlpha.900',
                            color: 'whiteAlpha.900'
                        }}>
                        Ver detalle
                    </Button>
                <Text left='5%' bottom='7%' position='absolute' fontSize='lg' color='green' fontWeight='bold'>$ {item.price}</Text>
            </Flex>
            <Stack direction="column" w='100%' h='500px' position='relative'>
                <Heading color='black'  fontWeight={900} position='absolute' top='5%' left='5%' fontSize='xx-large'>{item.title}</Heading>
                <Box h='100%'>
                    <Image
                        h='100%'
                        w='100%'
                        objectFit='cover'
                        src={item.imagePath}
                        >
                    </Image>
                </Box>
                <Text left='5%' bottom='7%' position='absolute' fontSize='lg' color='green'>$ {item.price}</Text>
            </Stack>
        </Flex>
    </NavLink>
    )
}

export default Item