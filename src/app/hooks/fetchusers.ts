"use client"

import { useState } from "react"
import { User } from './types';
import { useCallback } from 'react';

const useFetchUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetchUsers = useCallback(async () => {
        try {
            const response = await fetch('https://uat.zonamerica.com:5009/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            const data = await response.json();
            console.log("Datos Obtenidos",data);
            setUsers(data);
        } catch {
            setError('Ocurrió un problema al obtener los usuarios.');
        } finally {
            setLoading(false);
        }
    }, []);


    return { users, loading, error, fetchUsers };
};

export default useFetchUsers;
