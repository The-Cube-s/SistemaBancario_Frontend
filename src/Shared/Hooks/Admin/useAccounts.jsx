import { useState } from 'react';
import { accountsRequest } from '../../../Services/apiAdmin';
import toast from 'react-hot-toast';

export const useAccounts = () => {
  const [accounts, setAccounts] = useState(null);

  const getAccount = async () => {
    try {
      const response = await accountsRequest();

      if (response.error) {
        return toast.error(response?.err?.response?.data?.message);
      }
      console.log('Response from API:', response); // Depuración
      console.log('Response data:', response.data); // Detalles de la respuesta
      setAccounts(response.data); // Asignar directamente response.data si es un array // Asegúrate de que `response.accounts` es la estructura correcta
    } catch (error) {
      console.log(error);
      return toast.error('Error al cargar cuentas');
    }
  };

  return {
    accounts,
    getAccount,
    isFetching: !accounts,
  };
};
