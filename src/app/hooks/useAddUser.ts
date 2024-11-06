import { useState } from 'react';
import { NewUser, User } from '../hooks/types';

const useAddUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addUser = async (newUser: NewUser): Promise<User | null> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://uat.zonamerica.com:5009/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Revise las Credenciales');
            }

            const userData: User = await response.json();
            setLoading(false);
            return userData;
        } catch (err) {
            setLoading(false);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocurrió un problema al agregar el usuario');
            }
            return null;
        }
    };

    return { addUser, loading, error };
};

export default useAddUser;
