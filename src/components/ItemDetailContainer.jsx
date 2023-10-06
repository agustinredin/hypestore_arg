import { useContext, useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom/dist'
import { cartContext } from '../context/ShoppingCartContext'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  let location = useLocation();
  let item = location.state
  return (
        <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer