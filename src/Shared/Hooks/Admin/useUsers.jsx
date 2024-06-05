import { useState} from 'react'
import { watchUsersRequest } from '../../../Services/apiAdmin'
import toast from "react-hot-toast"

export const useUsers = () => {
    const [users, setUsers] = useState(null)
  
  
    const getUsers = async () =>{
      try {
          const response = await watchUsersRequest()
          
          if(response.error){
              return toast.error(response?.err?.response?.data?.message)
          }
          setUsers(response.data.users)
      } catch (error) {
          console.log(error)
          return toast.error('Error al cargar clientes')
      }
    }
      return {
          
          users,
          getUsers,
          isFetching: !users
  
      }
  }