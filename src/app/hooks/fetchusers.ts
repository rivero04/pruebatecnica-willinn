"use client"

import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                
                const response = await fetch('https://uat.zonamerica.com:5009/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                    }
                });
                const data = await response.json();
                console.log("Datos obtenidos:",data)
                setUsers(data)
            } catch {
                setError('Ocurrió un problema al obtener los usuarios.');
            }
            setLoading(false);
        };
        getUsers();
    }, []);

    return { users, loading , error };
}

export default useFetchUsers;