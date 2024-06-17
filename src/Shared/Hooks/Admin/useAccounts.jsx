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
<<<<<<< HEAD
      setAccounts(response.data.accounts); // Asegúrate de que `response.accounts` es la estructura correcta
=======
      console.log('Response data:', response.data); // Detalles de la respuesta
      setAccounts(response.data); // Asignar directamente response.data si es un array // Asegúrate de que `response.accounts` es la estructura correcta
>>>>>>> 2233372f38a746db2f6406dca0dc22c00c9086e2
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 2233372f38a746db2f6406dca0dc22c00c9086e2
