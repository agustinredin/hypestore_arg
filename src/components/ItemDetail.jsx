import {useContext}from 'react'
import {useParams} from 'react-router-dom'
import { cartContext } from '../context/ShoppingCartContext'
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

} from '@chakra-ui/react'

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

    return (
        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 2, md: 3 }}
        >
            <Flex>
                <Image
                    borderRight={{ base: 'none', lg: '1px solid black' }}
                    borderBottom={{ base: '1px solid black', lg: 'none' }}
                    alt={'product image'}
                    src={
                        `${item.detailPath}`
                    }
                    fit='cover'
                    align={'center'}
                    w={'100%'}
                /*    h={{ base: '80%' }} */
                />
            </Flex>
            <SlideFade in={true}>
                <Stack spacing={{ base: 6, md: 10 }} py={'15'} px={'5'}>
                    <Box as={'header'}>
                        <Text py={2} color={'red'}>
                            {item.categoria.toLocaleUpperCase()}
                        </Text>
                        <Text
                            lineHeight={1.1}
                            fontWeight={900}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {item.title}
                        </Text>
                        <Text py={2} lineHeight={1.1}
                            fontSize={{ base: 'sm', sm: 'md', lg: 'xl' }}>
                            {item.subtitle}
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
                        direction={'column'}>
                        <Stack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color={useColorModeValue('black.900', 'black.700')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                {item.desc}
                            </Text>
                        </Stack>
                        <Box>
                        </Box>
                    </Stack>

                    <Button {...buttonStyles}
                        onClick={() => setCart([...cart, { item }])}>Añadir al carrito</Button>
                </Stack>
            </SlideFade>
        </SimpleGrid>
    )
}

export default ItemDetail