import { useState} from 'react'
import { myAccountRequest } from '../../../Services/apiClient'
import toast from "react-hot-toast"

export const useMyAccount = () => {
    const [account, setAccount] = useState({
        //cambiar el hook
    });
    const [isFetching, setIsFetching] = useState(false);

    const getMyAccounts = async () => {
        setIsFetching(true);
        try {
            const response = await myAccountRequest();
            if (response.error) {
                toast.error(response?.err?.response?.data?.message || 'Error desconocido');
            } else {
                setAccount(response.data.account);
            }
        } catch (error) {
            console.error(error);
            toast.error('Error al cargar las cuentas');
        }
        setIsFetching(false);
    };

    return {
        account,
        getMyAccounts,
        isFetching
    };
};