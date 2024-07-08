import { useState } from "react";
import { addBuyRequest } from "../../../Services/apiAdmin"; 

export const useAddBuy = () => {
    const [buy, setBuy] = useState({
        amount: '',
        user: '', // Puedes inicializar con el ID del usuario logueado si es relevante
        product: '', // Puedes inicializar con el ID del producto seleccionado
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuy({
            ...buy,
            [name]: value,
        });
    };

    const handleSubmit = async (userId, productId, amount) => {
      
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const updatedBuy = {
                ...buy,
                amount: amount,
                user: userId,
                product: productId,
            };
            console.log(updatedBuy)
            console.log(buy)
            const response = await addBuyRequest(updatedBuy);
            if (response.error) {
                setError(response.error.message || 'Hubo un problema al procesar la compra');
            } else {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.message || 'Hubo un problema al procesar la compra');
            return toast.error('Error al hacer una compra')
        } finally {
            setLoading(false);
        }
    };
  
    return {
        buy,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
    };
};