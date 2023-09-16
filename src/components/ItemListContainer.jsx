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

    let response = [
      { 'price': '49.99', 'imagePath': '/src/assets/prod1.gif', 'detailPath': '/src/assets/prod1_det.jpeg', 'key': 0, 'title': 'Distinta', 'desc': 'Disponible en varios colores. Perfecto para un look casual.', 'categoria': 'liquidacion' },
      { 'price': '79.99', 'imagePath': '/src/assets/prod2.gif', 'detailPath': '/src/assets/prod2_det.jpeg', 'key': 1, 'title': 'Kalashnikov', 'desc': 'Disponible en gris. Ideal para un estilo urbano.', 'categoria': 'nuevo' },
      { 'price': '89.99', 'imagePath': '/src/assets/prod3.gif', 'detailPath': '/src/assets/prod3_det.jpeg', 'key': 2, 'title': 'Cargos', 'desc': 'Consultá talles. Diseño moderno y cómodo.', 'categoria': 'nuevo' },
      { 'price': '39.99', 'imagePath': '/src/assets/prod4.gif', 'detailPath': '/src/assets/prod4_det.jpeg', 'key': 3, 'title': 'Envuelto', 'desc': 'En oferta. Elegante y versátil.', 'categoria': 'liquidacion' },
      { 'price': '129.99', 'imagePath': '/src/assets/prod5.gif', 'detailPath': '/src/assets/prod5_det.jpeg', 'key': 4, 'title': 'Bodykit', 'desc': 'Nuevo! Añade un toque de estilo a tu guardarropa.', 'categoria': 'nuevo' },
      { 'price': '74.99', 'imagePath': '/src/assets/prod6.gif', 'detailPath': '/src/assets/prod6_det.jpeg', 'key': 5, 'title': 'Vert', 'desc': 'Nuevo! Perfecto para cualquier ocasión.', 'categoria': 'nuevo' }
    ]

    /* timeout bajado de 3s de consgina a 1.5s así no se pierde tiempo :) */
    let promesa = new Promise((resolve, reject) => {
      resolveTimeout = setTimeout(() => {
        setIsLoaded(true)
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