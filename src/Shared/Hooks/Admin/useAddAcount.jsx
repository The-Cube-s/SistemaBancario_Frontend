import { useState } from "react"
import { addAccountRequest } from "../../../Services/apiAdmin"

export const useAddAcount = () => {
    const [account, setAccount] = useState({
        noaccount: '',
        balance: '',
        typeofaccount: '',
        user: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const response = await addAccountRequest(account);
            if (response.error) {
                setError(response.err.message || 'Something went wrong');
            } else {
                setSuccess(true);
                setAccount({
                    noaccount: '',
                    balance: '',
                    typeofaccount: '',
                    user: ''
                }); // Limpia los campos del formulario
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return {
        account,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
    };
}