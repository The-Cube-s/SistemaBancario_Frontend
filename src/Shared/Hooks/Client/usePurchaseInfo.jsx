import { useState } from 'react';
import { myBuysRequest } from '../../../Services/apiClient';
import toast from "react-hot-toast";

export const usePurchaseInfo = () => {
    const [purchases, setPurchases] = useState(null);

    const getPurchases = async () => {
        try {
            const response = await myBuysRequest();

            if (response.error) {
                return toast.error(response?.err?.response?.data?.message);
            }
            setPurchases(response.data);
        } catch (error) {
            console.log(error);
            return toast.error('Error al cargar compras');
        }
    };

    return {
        purchases,
        getPurchases,
        isFetching: !purchases
    };
};