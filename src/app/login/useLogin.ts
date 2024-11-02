'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoginSuccess(false);

        try {
            const response = await fetch('https://uat.zonamerica.com:5009/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem('authToken', token);
                setLoginSuccess(true);

                setTimeout(() => {
                    router.push('/dashboard');
                }, 500);

            } else {
                setError('Inicio de sesión falló. Revisa tus credenciales.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Ocurrió un problema al conectar con la API.');
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        loginSuccess,
        handleLogin,
    };
}
