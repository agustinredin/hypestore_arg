import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/ShoppingCartContext'
import { productContext } from '../context/ProductContext'
import { MdLocalShipping } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
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
    SlideFade,
    useBreakpointValue,
    Tooltip,
    Divider,
    useDisclosure,
    Progress,
    useToast

} from '@chakra-ui/react'
import { getDoc, doc, getFirestore } from 'firebase/firestore'

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

const ItemDetail = ({ item }) => {
    const { id } = useParams();
    const { cart, setCart } = useContext(cartContext)
    const { products, setProducts } = useContext(productContext)
    const { isOpen, onToggle } = useDisclosure()
    /* const [categoria, setCategoria] = useState("") */
    const [currStock, setCurrStock] = useState(item.stock)
    const toast = useToast()

    useEffect(() => {
        /* onToggle() */
        /* const db = getFirestore()
        const docRef = doc(db, "categories", item.categoryId)


        getDoc(docRef).then((data) => {
            setCategoria(data.data().name)
            if (!isOpen) onToggle()
        }).catch(err => {
            setIsLoaded(true)
            resolve(productsBackup)
          }) */

    }, [item.categoryId,/*  isOpen, onToggle, */ currStock])



    const handleSetCart = () => {
        if (cart.length === 3) {
            toast({
                description: `Cada cliente está limitado a 3 prendas por envío.`,
                status: 'error',
                position: 'bottom',
                duration: '2500',
                isClosable: 'true'
            })
            return
        }
        if (cart.filter(i => i.key == item.key).length > item.stock) {
            toast({
                description: `No tenemos tanto stock para esta prenda.`,
                status: 'error',
                position: 'bottom',
                duration: '2500',
                isClosable: 'true'
            })
            return
        }

        item.stock = item.stock - 1
        products.filter(i => i.key === item.key)[0].stock = item.stock
        setProducts(products)
        setCart([...cart, { ...item }])
        toast({
            description: `Agregado ${item.title} al carrito.`,
            status: 'success',
            position: 'bottom',
            duration: '2500',
            isClosable: true,
        })
        setCurrStock(item.stock)
    }

    return (
        <>
{/*             {isOpen ? ( */}
                <SlideFade in={true}>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 2, md: 3 }}>
                        <Flex>
                            <Image
                                position={'relative'}
                                borderRight={{ base: 'none', lg: '1px solid black' }}
                                borderBottom={{ base: '1px solid black', lg: 'none' }}
                                alt={'product image'}
                                src={
                                    `${item.detailPath}`
                                }
                                fit='cover'
                                align={'center'}
                                w={'100%'}
                                maxW={'none'}
                                maxH={'none'}
                                height={'auto'}
                            />
                        </Flex>
                        <Stack spacing={{ base: 6, md: 1 }} py={'15'} px={'5'}>
                            <Box>
                                <Text
                                    lineHeight={1.25}
                                    fontWeight={900}
                                    fontSize={{ base: '4xl', sm: '6xl', lg: '8xl' }}>
                                    {item.title}
                                </Text>
                                <Text py={2} lineHeight={1.5}
                                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                                    {item.subtitle}
                                </Text>
                                <Flex alignItems={'center'}>
                                    <Text
                                        lineHeight={2}
                                        color={'green'}
                                        fontWeight={400}
                                        fontSize={'2xl'}>
                                        ${item.price}
                                    </Text>
{/*                                     <Text mx={5} p={1} bg={'red'} color={'white'} fontSize={{ base: 'xs' }}>
                                        {categoria.toLocaleUpperCase()}
                                    </Text> */}
                                    </Flex>
                            </Box>

                            <Stack
                                spacing={{ base: 4, sm: 6 }}
                                direction={'column'}>
                                <Stack spacing={{ base: 4, sm: 6 }}>
                                    <Text
                                        py={5}
                                        lineHeight={1.5}
                                        color={'black.700'}
                                        fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}
                                        fontWeight={'300'}>
                                        {item.desc}
                                    </Text>
                                </Stack>
                                <StackDivider border={'0.5px solid black'} />
                                <Box my={2}>
                                    <Text lineHeight={1.5} marginBottom={5}
                                        color={'blackAlpha.500'}
                                        fontSize={{ base: 'lg', lg: 'xl' }}>
                                        SKU: {item.key}
                                    </Text>
                                    <Text lineHeight={1.5} marginBottom={5}
                                        color={'blackAlpha.500'}
                                        fontSize={{ base: 'lg', lg: 'xl' }}>
                                        Stock disponible: {currStock}
                                    </Text>
                                    <Text lineHeight={1.5}
                                        color={'blackAlpha.900'}
                                        fontSize={{ base: 'lg', lg: 'xl' }}>
                                        Todas nuestras prendas son talle único.
                                    </Text>
                                </Box>
                            </Stack>

                            <Button {...buttonStyles}
                                onClick={() => handleSetCart()}>Añadir al carrito</Button>
                        </Stack>
                    </SimpleGrid>
                </SlideFade>
            
{/*             ) : <>
                <Progress size='xs' isIndeterminate w={'100%'} />
                <Flex justifyContent={'center'} alignItems={'center'} h={'80vh'} w={'100%'}>
                    <Text>Cargando...</Text>
                </Flex>
            </>} */}
        </>
    )
}

export default ItemDetail