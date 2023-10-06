import { VStack, HStack, Flex, Image, Stack, Text, Tooltip, chakra } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const Brief = ({ parsedCart, categorias, handleDelete }) => {
    return (

        <VStack spacing={8}>
            {
                parsedCart.map((product, index) => {
                    const categoria = categorias.filter(x => x.id == product.categoryId)[0].name

                    return (
                        <HStack
                            key={index}
                            direction={{ base: 'column', md: 'row' }}
                            border="1px solid"
                            rounded="none"
                            h={{ base: '10rem' }}
                            w={{ base: '90vw', md: '3xl' }}
                            overflow="hidden"
                            pos="relative"
                        >
                            <Flex
                                alignItems="center"
                                p={1}
                                bg="red"
                                pos="absolute"
                                fontSize="xs"
                                fontWeight="500"
                                color="white"
                                top={0}
                                left={0}
                            >
                                <Text>{categoria.toLocaleUpperCase()}</Text>
                            </Flex>
                            <Flex my={20}>
                                <Image
                                    rounded="none"
                                    w={{ base: '10rem' }}
                                    h={{ base: '10rem' }}
                                    objectFit="cover"
                                    src={product.imagePath}
                                    alt="product image"
                                />
                            </Flex>
                            <Stack direction="column" justifyContent="space-between" spacing={2} p={5} w="100%" mt={{ base: '5px !important', sm: 0 }}>
                                <Flex justify="space-between" alignItems={'center'}>
                                    <chakra.h3 fontSize={{ base: 'xxx-large', md: 'xx-large' }} fontWeight="bold">
                                        {product.title}
                                    </chakra.h3>
                                    <Flex>
                                        <Tooltip label='Eliminar de carrito' fontSize='md' background={'black'}>
                                            <DeleteIcon color="red" fontSize={{ base: 'xx-large', md: 'x-large' }} cursor='pointer' onClick={() => handleDelete(product.key)} />
                                        </Tooltip>
                                    </Flex>
                                </Flex>
                                <Flex justify="space-between" alignItems={'flex-start'} >
                                    <Text fontSize={{ base: 'sm', sm: 'md' }} color="gray.500">x {product.quantity}</Text>
                                    <Text fontSize={{ base: 'md', sm: 'lg' }} color="green" fontWeight={'bold'}>{product.price}</Text>
                                </Flex>
                            </Stack>
                        </HStack>
                    )
                })
            }
        </VStack>
    )
}

export default Brief