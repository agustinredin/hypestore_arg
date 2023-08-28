import React from 'react'
import {Text, Container} from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <Container>
        <Text>{greeting}</Text>
    </Container>
  )
}

export default ItemListContainer