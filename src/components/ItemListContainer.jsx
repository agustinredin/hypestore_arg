import { Progress, SimpleGrid} from '@chakra-ui/react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Item from './Item'

const ItemListContainer = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [productos, setProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    let resolveTimeout;
    const abort = new AbortController()

    /* timeout bajado de 3s de consgina a 1.5s así no se pierde tiempo :) */
    let promesa = new Promise((resolve, reject) => {
      let response = fetch('/src/assets/products.json').then(res => res.json())
      console.log(response)
      resolveTimeout = setTimeout(() => {
        setIsLoaded(true)
        console.log(response)
        resolve(response)
      }, 1500)
    })

    promesa.then(res => setProductos(id ? res.filter(i => i.categoria == id) : res))

    return () => {
      setIsLoaded(false)
      clearTimeout(resolveTimeout)
      abort.abort()
    }
  }, [id])

  return (
    <SimpleGrid minChildWidth='md' w='100%' minH='500px'>
      {isLoaded ? (
        productos.map((producto, idx) => <Item item={producto} key={idx} />)
      ) : (
        <Progress size='xs' isIndeterminate />
      )}
    </SimpleGrid>
  )
}

export default ItemListContainer