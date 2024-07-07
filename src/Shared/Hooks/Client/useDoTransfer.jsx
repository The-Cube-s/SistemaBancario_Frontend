import { useState } from "react"
import { transferRequest } from "../../../Services/apiClient";

export const useDoTransfer = () => {
    const [transfer, setTransfer] = useState({
        dpi: '',
        noaccount: '',
        amount: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransfer({
            ...transfer,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await transferRequest(transfer);
            if (response.error) {
                setError(response.error.message || 'Falta llenar datos');
            } else {
                setSuccess(true);
            }
        } catch (err) {
            setError(err.message || 'Puede que no hayas colocado un dato bien');
        } finally {
            setLoading(false);
        }
    };
  
    return {
        transfer,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
    };
};