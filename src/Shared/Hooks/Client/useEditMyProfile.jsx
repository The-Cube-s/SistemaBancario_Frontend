import { useState } from 'react';
import { useUserDetails } from '../useUserDetails';// Asegúrate de importar correctamente
import { MyUserRequest } from '../../../Services/apiClient';

export const useEditMyProfile = () => {
    const { uid } = useUserDetails();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const editProfile = async (fieldsToUpdate) => {
        if (!uid) {
            setError({ message: 'User ID is not defined' });
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const updatedUser = { ...fieldsToUpdate, _id: uid };
            const response = await MyUserRequest(updatedUser);
            setLoading(false);
            if (response.error) {
                setError(response.err);
            } else {
                // Aquí puedes actualizar el estado global si es necesario
                return response.data; // Retorna los datos actualizados
            }
        } catch (err) {
            setLoading(false);
            setError(err);
        }
    };

    return {
        editProfile,
        error,
        loading
    };
};