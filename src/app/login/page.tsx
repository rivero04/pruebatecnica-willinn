'use client';

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLogin } from '../hooks/useLogin';

export const LoginPage = () => {
    const { email, setEmail, password, setPassword, error, loginSuccess, handleLogin } = useLogin();
    const [showPassword, setShowPassword] = useState(false);

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="bg-[#F5F7FA]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
                <div className="w-full bg-white rounded-lg sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold text-gray-900 md:text-2xl">
                            Inicia Sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-white border text-gray-900 rounded-lg block w-full p-2.5 focus:outline-none"
                                    placeholder="Introduce tu email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Introduce tu contraseña"
                                        className="bg-white border text-gray-900 rounded-lg block w-full p-2.5 pr-10"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                                        onClick={PasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <button
                                    type="submit"
                                    className="w-full text-white bg-[#F72793] hover:bg-pink-600 font-bold rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Ingresar
                                </button>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {loginSuccess && <p style={{ color: 'green' }}>Inicio de sesión correcto</p>}
                                <div className="flex justify-end w-full">
                                    <a href="#" className="mt-2 text-sm font-medium text-gray-900">¿Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
