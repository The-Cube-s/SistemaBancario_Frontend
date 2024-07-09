import { useState } from 'react'
import { transferRequest } from '../../../Services/apiClient'
import toast from 'react-hot-toast'

export const useAddTransfer = () => {
  const [ loading, setLoading ] = useState(false)
  
  const addTransfer = async(transfer) =>{
      setLoading(true)

      const res = await transferRequest(transfer)
      setLoading(false)

      if(res.error){
        return toast.error(res.error.response.data.message || 'Error Transfer')
      }

      return toast.success('Successfully Transfer!')

  }

  return {
    loading,
    addTransfer

  }
}
