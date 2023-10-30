import { Progress, SimpleGrid, Skeleton, Text, Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef, useContext } from 'react'
import { productContext } from '../context/ProductContext'
import { getDocs, getFirestore, query, collection, where } from 'firebase/firestore'
import Item from './Item'
import productsBackup from '../products.json'

const ItemListContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { products, setProducts } = useContext(productContext)
  const { id } = useParams()
  const ref = useRef(null)

  useEffect(() => {
    const controller = new AbortController()

      let promesa = new Promise((resolve, reject) => {
        const db = getFirestore()
        const itemQuery = id ? query(collection(db, "products"), where("categoryId", "==", id)) : query(collection(db, "products"))
  
        getDocs(itemQuery).then((snapshot) => {
          setIsLoaded(true)
          resolve(snapshot.docs.map((doc) => ({ ...doc.data() })))
        }).catch(err => {
          setIsLoaded(true)
          resolve(productsBackup)
        })
      })
  
      promesa.then(res => setProducts(res.filter(x => x.stock > 0)))

    return () => {
      setIsLoaded(false)
      controller.abort()
    }
  }, [id])

  return (
    <>
      {isLoaded ? (
        <SimpleGrid minChildWidth='md' w='100%' minH='80vh'>
          {products.map((producto, idx) => <Item item={producto} key={idx} />)}
        </SimpleGrid>
      ) : (
        <>
          <Progress size='xs' isIndeterminate w={'100%'} />
          <Flex justifyContent={'center'} alignItems={'center'} h={'80vh'} w={'100%'}>
            <Text ref={ref}>Cargando...</Text>
          </Flex>
        </>
      )}
    </>
  )
}

export default ItemListContainer