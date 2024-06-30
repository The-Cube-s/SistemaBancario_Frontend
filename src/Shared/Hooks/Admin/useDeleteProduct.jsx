import toast from 'react-hot-toast'
import { deleteProductRequest } from '../../../Services/apiAdmin'

export const useDeleteProduct = () => {
    const deleteProduct = async (id) => {
        const response = await deleteProductRequest(id)
        if (response.error) {
            return toast.error('Error deleting Product.')
        }
        return toast.success('Deleted Product succesfully.')
    }
    return {
        deleteProduct
    }
}