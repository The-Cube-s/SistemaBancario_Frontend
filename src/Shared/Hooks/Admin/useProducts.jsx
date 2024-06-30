import { useState} from 'react'
import { productsRequest } from '../../../Services/apiAdmin'
import toast from "react-hot-toast"

export const useProducts = () => {
    const [products, setProducts] = useState(null)
  
  
    const getProducts = async () =>{
      try {
          const response = await productsRequest()
          
          //Infora¿mación 
          if(response.error){
              return toast.error(response?.err?.response?.data?.message)
          }
          setProducts(response.data.products)
      } catch (error) {
          console.log(error)
          return toast.error('Error al cargar productos')
      }
    }
      return {
          
          products,
          getProducts,
          isFetching: !products
  
      }
  }