import { useState} from 'react'
import { transferinfoRequest } from '../../../Services/apiClient'
import toast from "react-hot-toast"

export const useTransferInfo = () => {
    const [transfer, setTransfer] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const getTransfers = async () => {
        try {
            const response = await transferinfoRequest();

            if (response.error) {
                return toast.error(response?.err?.response?.data?.message);
            }
            setTransfer(response.data.transfers || []);
            setSaldo(response.data.saldo || 0);
        } catch (error) {
            console.log(error);
            return toast.error('Error al cargar transferencias');
        }
    };

    return {
        transfer,
        saldo,
        getTransfers,
        isFetching: transfer.length === 0,
    };
};