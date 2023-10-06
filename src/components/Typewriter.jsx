import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Typical from 'react-typical';

const Typewriter = ({messages}) => {
    const delay = 3000;
    const steps = messages.flatMap(message => [message, delay]);

    return (
        <Box 
            bg={'blackAlpha.900'} 
            color={'whiteAlpha.900'} 
            transitionDuration='0.25s' 
            _hover={{
                bg: 'none',
                color: 'black'
            }}  
            width="100%" 
            p={2}
        >
            <Flex 
                px={2} 
                h='100%' 
                alignItems="center" 
                justifyContent="center" 
                mx="auto"
            >
                <Box 
                    w={'100%'} 
                    textAlign={'center'}
                >
                    <Typical
                        loop={Infinity}
                        steps={steps} 
                        wrapper="span" 
                    />
                </Box>
            </Flex>
        </Box>
    );
}

export default Typewriter;
