import { VStack, InputGroup, InputLeftElement, Input, Button, useToast, HStack, Flex } from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons';


const UserForm = ({setStepIndex, phoneValue, setPhoneValue, emailValue, setEmailValue}) => {
    const toast = useToast()
    const handleSubmit = () => {
        if(phoneValue.length < 5)
        {
            toast({
                description: `Complete un número de teléfono válido.`,
                status: 'error',
                position: 'bottom',
                duration: '2500',
                isClosable: 'true'
            })
            return
        }
        if(!emailValue.includes('@') || !emailValue.includes('.') || emailValue.length < 10)
        {
            toast({
                description: `Complete un email válido.`,
                status: 'error',
                position: 'bottom',
                duration: '2500',
                isClosable: 'true'
            })
            return
        }
        setStepIndex(2)
    }

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
    return (
        <VStack spacing={5} my={5}>
            <HStack h={'2rem'} spacing={5} w={{ base: '90vw', md: '3xl' }}>
                <InputGroup rounded='none' color='blackAlpha.900'>
                    <InputLeftElement pointerEvents='none' borderRight='1px solid black'>
                        <PhoneIcon color='blackAlpha.900' />
                    </InputLeftElement>
                    <Input onChange={(e) => setPhoneValue(e.target.value)} _focus={{ border: '1px solid black' }} _hover={{ border: '1px solid black' }} border='1px solid black' rounded='none' paddingLeft='3rem' type='number' placeholder='Tel. Celular' />
                </InputGroup>
                <InputGroup rounded='none' color='blackAlpha.900'>
                    <InputLeftElement pointerEvents='none' borderRight='1px solid black'>
                        <AtSignIcon color='blackAlpha.900' />
                    </InputLeftElement>
                    <Input onChange={(e) => setEmailValue(e.target.value)} _focus={{ border: '1px solid black' }} _hover={{ border: '1px solid black' }} border='1px solid black' rounded='none' paddingLeft='3rem' type='text' placeholder='Correo electrónico' />
                </InputGroup>
            </HStack>
            <Flex w={{ base: '90vw', md: '3xl' }}>
                <Button w={'100%'} {...buttonStyles} onClick={() => handleSubmit()} >Finalizar compra</Button>
            </Flex>
        </VStack>
    )
}

export default UserForm