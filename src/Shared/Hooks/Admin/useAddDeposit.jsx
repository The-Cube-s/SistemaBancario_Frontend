import { useState } from "react"
import { depositRequest } from "../../../Services/apiAdmin";

export const useAddDeposit = () => {
    const [deposit, setDeposit] = useState({
        noaccount: '',
        amount: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeposit({
            ...deposit,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await depositRequest(deposit);
            if (response.error) {
                setError(response.error.message || 'Se necesita número de cuenta');
            } else {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.message || 'Se necesita número de cuenta');
        } finally {
            setLoading(false);
        }
    };
  
    return {
        deposit,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
    };
};