import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../context/ShoppingCartContext';
import { Box, Container, Flex, Text, Fade, Progress } from '@chakra-ui/react';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
import CheckoutConfirmation from './CheckoutConfirmation';
import UserForm from './UserForm';
import Brief from './Brief';

//esqueleto de archivo:
//Checkout es el componente contenedor con render condicional
//Brief tiene la lista de productos
//UserForm es el formulario con datos básicos
//CheckoutConfirmation es el componente lógico que confirma la compra y renderiza un overlay informando el estado de la llamada a firebase.
const Checkout = () => {
    const { cart, setCart } = useContext(cartContext)
    const [parsedCart, setParsedCart] = useState(parseCart(cart))
    const [isLoaded, setIsLoaded] = useState(false)
    const [categorias, setCategorias] = useState([])
    const [stepIndex, setStepIndex] = useState(1)
    const [phoneValue, setPhoneValue] = useState("")
    const [emailValue, setEmailValue] = useState("")

    useEffect(() => {
        const db = getFirestore()
        const docRef = query(collection(db, "categories"))

        getDocs(docRef).then((data) => {
            let res = data.docs.map((item, index) => {
                return { ...item.data(), "id": item.id }
            })
            setCategorias(res)
            setIsLoaded(true)
        })
    }, [parsedCart])

    const handleDelete = (key) => {
        let newCart = [...parsedCart]
        newCart.splice(newCart.findIndex(i => i.key === key), 1)
        setParsedCart(newCart)
        setCart(cart.filter(x => x.key !== key))
    }

    return (
        <Box minH={'100vh'}>
            {isLoaded ?
                (
                    parsedCart.length > 0 ? (
                        <>
                            {stepIndex == 2 ?
                                (
                                    <CheckoutConfirmation cart={parsedCart} phone={phoneValue} email={emailValue}/>
                                ) : null}
                            <Container maxW="7xl" p={{ base: 5, md: 8 }} margin="0 auto">
                                <Brief
                                    parsedCart={parsedCart}
                                    categorias={categorias}
                                    handleDelete={handleDelete}
                                    />
                                <UserForm setStepIndex={setStepIndex} phoneValue={phoneValue} setPhoneValue={setPhoneValue} emailValue={emailValue} setEmailValue={setEmailValue}/>
                            </Container>
                        </>
                    ) : (<Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'90vh'}>
                        <Text>El carrito está vacío.</Text>
                    </Flex>)
                ) :
                (
                    <>
                        <Progress size='xs' isIndeterminate w={'100%'} />
                        <Flex justifyContent={'center'} alignItems={'center'} w={'100%'} h={'90vh'}>
                            <Text>Cargando...</Text>
                        </Flex>
                    </>
                )
            }

        </Box>
    )
}

const parseCart = rawCart => {
    const map = new Map()
    const unifiedCart = rawCart.reduce((acc, prod) => {
        if (!map.has(prod.key)) {
            map.set(prod.key, true)
            const obj = {
                ...prod,
                quantity: rawCart.filter(x => x.key === prod.key).length
            }
            acc.push(obj)
        }
        return acc
    }, [])
    return unifiedCart
}

export default Checkout