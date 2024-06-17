import { useState } from "react";
import { addProductRequest } from "../../../Services/apiAdmin";

export const useAddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        amount: '', 
        imagesProduct: [] // Para manejar las imágenes
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
        const files = Array.from(e.target.files);
        setProduct({
            ...product,
            imagesProduct: files,
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

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('amount', product.amount); // Añade el campo `amount`
        product.imagesProduct.forEach((file, index) => {
            formData.append('imagesProduct', file);
        });

        try {
            const response = await addProductRequest(formData);
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