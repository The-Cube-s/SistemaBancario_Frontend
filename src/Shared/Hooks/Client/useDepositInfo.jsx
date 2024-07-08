import { useState } from 'react';
import { depositinfoRequest } from '../../../Services/apiClient';
import toast from "react-hot-toast";

export const useDepositInfo = () => {
    const [deposits, setDeposits] = useState(null);

    const getDeposits = async () => {
        try {
            const response = await depositinfoRequest();

            if (response.error) {
                return toast.error(response?.err?.response?.data?.message);
            }
            setDeposits(response.data.deposits);
        } catch (error) {
            console.log(error);
            return toast.error('Error al cargar depósitos');
        }
    };

    return {
        deposits,
        getDeposits,
        isFetching: !deposits
    };
};