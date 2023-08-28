import {Text, Container, Flex, Button} from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Flex px={0} py={0} width="100%">
        <Text>{greeting}</Text>
    </Flex>
  )
}

export default ItemListContainer