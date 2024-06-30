import { useState } from "react";
import { addProductRequest } from "../../../Services/apiAdmin";

export const useAddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        amount: '', 
        imageUrls: [] // Para manejar las URLs de las imágenes
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const urls = e.target.value.split(',').map(url => url.trim());
        setProduct({
            ...product,
            imageUrls: urls,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (product.price === 0) {
            setError('El precio del producto no puede ser 0');
            setLoading(false);
            return;
        }

        try {
            const response = await addProductRequest(product);
            if (response.error) {
                setError(response.err.message || 'Something went wrong');
            } else {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return {
        product,
        handleChange,
        handleImageChange,
        handleSubmit,
        loading,
        error,
        success,
    };
};
