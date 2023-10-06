import React from 'react'
import { Flex, Box, Text} from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box borderTop='1px solid black' width="100%" h={20}>
            <Flex px={2} h='100%' alignItems="center" justifyContent="center" mx="auto">
                <Text fontSize={'large'}>Hype Store Argentina, todos los derechos reservados. Sitio maquetado por Agustin Redin</Text>
            </Flex>
        </Box>
    )
}

export default Footer