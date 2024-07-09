import { useState } from "react";
import toast from "react-hot-toast";
import { registerRequest } from "../../../Services/apiAdmin";


export const useRegister = () => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        username: '',
        accountNumber: '',
        DPI: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        retypePassword: '',
        jobname: '',
        monthlyincome: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (user.password !== user.retypePassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await registerRequest(user);
            if (response.status === 200) {
                setSuccess(true);
                setUser({
                    name: '',
                    surname: '',
                    username: '',
                    accountNumber: '',
                    DPI: '',
                    address: '',
                    phone: '',
                    email: '',
                    password: '',
                    retypePassword: '',
                    jobname: '',
                    monthlyincome: '',
                }); 
                toast.success('Registration successful!');
            } else {
                setError(response.data?.message || 'Something went wrong');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        handleChange,
        handleSubmit,
        loading,
        error,
        success,
    };
};