import { useContext, useState, useEffect } from 'react'
import { cartContext } from '../context/ShoppingCartContext'
import {
    Button, Flex, Text, VStack, chakra, useDisclosure, Fade, Spinner, useToast
} from '@chakra-ui/react'
import { BsArrowUpRight, BsFillClipboardFill, BsFillClipboardCheckFill } from 'react-icons/bs'
import { getFirestore, doc, getDoc, query, collection, getDocs, addDoc, updateDoc } from 'firebase/firestore'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Typical from 'react-typical'

const CheckoutConfirmation = ({ cart, phone, email }) => {
    const { _cart, setCart } = useContext(cartContext)
    const { isOpen, onToggle } = useDisclosure()
    const [checkoutConfirmed, setCheckoutConfirmed] = useState(false)
    const [confirmedPurchaseId, setConfirmedPurchaseId] = useState('sihjdfweS^T^3h2gvCVghfg3')
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)
    const toast = useToast()

    const buttonStyles = {
        rounded: 'none',
        bg: 'transparent',
        border: '1px solid black',
        color: 'blackAlpha.900',
        _hover: {
            bg: 'blackAlpha.900',
            color: 'whiteAlpha.900'
        }
    };

    useEffect(() => {
        console.log('useef checkoutConfirmation!')
        let fadeTimeout;
        let promiseTimeout;

        fadeTimeout = setTimeout(() => {
            if (!isOpen) onToggle()
        }, 100)


        promiseTimeout = setTimeout(() => {
            let promesa = new Promise((resolve, reject) => {
                const db = getFirestore()
                const col = collection(db, 'purchase')

                const purchase = getPurchaseData()

                addDoc(col, purchase).then((doc) => {
                    resolve(doc)
                }).catch(err => {
                    resolve({'id': '12345678'})
                    console.log(err)
                })
            })

            promesa.then((res) => handlePromesa(res))

        }, 8000)


        return () => {
            clearTimeout(fadeTimeout)
        }
    }, [])

    const handleCopyToClipboard = e => {
        navigator.clipboard.writeText(confirmedPurchaseId)
        setCopiedToClipboard(true)
        toast({
            description: `Copiado ID ${confirmedPurchaseId} al portapapeles.`,
            status: 'success',
            position: 'bottom',
            duration: '2500',
            isClosable: 'true',
            containerStyle: {
                zIndex: 99999
            },
        })
    }

    const getPurchaseData = () => {
        console.log('f() getPurchaseData')
        return {
            'email': email,
            'phone': phone,
            'itemKeys': cart.map(p => p.key),
            'itemQuantities': cart.map(p => p.quantity)
        }
    }

    const handlePromesa = (res) => {
        console.log('f() handlePromesa')
        setConfirmedPurchaseId(res.id)
        setCheckoutConfirmed(true)
        setCart([])
    }


    const messages = [
        'Aguardá un segundo.',
        'Estamos generando tu compra.',
    ];
    const delay = 4000;
    const steps = messages.flatMap(message => [message, delay])

    return (
        <Fade in={isOpen}>
            <Flex bg={'rgba(10,10,10,0.8)'} h={'100%'} w={'100%'} position='absolute' top={0} left={0} zIndex='9999' justifyContent={'center'} alignItems={'center'}>
                <VStack color="white" spacing={2}>
                    {
                        checkoutConfirmed ? (
                            <>
                                <CheckCircleIcon fontSize='xl' />
                                <Text fontWeight={'bold'}>Tu compra fue registrada.</Text>
                                <Text fontSize={{ base: 'sm', md: 'md' }}>No olvides registrar el ID. Te va a llegar un correo para coordinar envíos.</Text>
                                <Flex fontSize={'sm'} alignItems={'center'} gap={2}>
                                    <chakra.h5 fontWeight={'bold'}>{confirmedPurchaseId}</chakra.h5>
                                    {
                                        !copiedToClipboard ?
                                            (
                                                <BsFillClipboardFill cursor='pointer' onClick={(e) => handleCopyToClipboard(e)} />
                                            )
                                            :
                                            (
                                                <BsFillClipboardCheckFill color='green' />
                                            )
                                    }
                                </Flex>
                                <NavLink to={'/'}>
                                    <Button my={5} {...buttonStyles} bg={'white'}> Seguir comprando </Button>
                                </NavLink>
                            </>
                        )
                            :
                            (
                                <>
                                    <Spinner size='xl' speed='1s' thickness='1px' />
                                    <Typical
                                        loop={1}
                                        steps={steps}
                                        wrapper="span"
                                    />
                                </>
                            )
                    }
                </VStack>
            </Flex>
        </Fade>
    )
}

export default CheckoutConfirmation