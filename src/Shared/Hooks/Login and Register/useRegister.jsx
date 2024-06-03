import { useState } from "react";
import toast from "react-hot-toast";
import { registerRequest } from "../../../Services/apiAdmin";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);

    const register = async (
        name,
        surname,
        username,
        DPI,
        address,
        password,
        email,
        phone,
        jobname,
        monthlyincome,
        role
    ) => {
        setIsLoading(true);

        const user = {
            name,
            surname,
            username,
            DPI,
            address,
            password,
            email,
            phone,
            jobname,
            monthlyincome,
            role,
        };

        try {
            // Consulta al API
            const response = await registerRequest(user);
            setIsLoading(false);

            if (response.error) {
                if (response?.err?.response?.data?.message) {
                    let arr = response?.err?.response?.data?.errors;
                    for (const error of arr) {
                        toast.error(error.msg);
                    }
                } else {
                    toast.error(
                        response?.err?.response?.data?.msg ||
                        response?.err?.data?.msg ||
                        'Error general al intentar registrar el usuario. Intenta de nuevo.'
                    );
                }
            } else {
                // Registro exitoso
                toast.success('¡Usuario registrado exitosamente!');
                
            }
        } catch (error) {
            setIsLoading(false);
            toast.error('Error al intentar registrar el usuario. Intenta de nuevo.');
        }
    };

    return {
        register,
        isLoading,
    };
};