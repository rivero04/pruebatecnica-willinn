"use client";

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CreateUser = () => {
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-1/3 w-1/4 flex flex-col  bg-white p-6 shadow-lg rounded-lg mr-4">
            <h2 className="text-xl font-semibold text-black mb-4">Agregar usuario</h2>
            <form className="space-y-4">
                {/* Nombre */}
                <div className='relative'>    
                <label className="block mb-2 text-sm font-bold text-gray-700">Nombre</label>
                <input
                    type="text"
                    placeholder="Introduce el nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                />
                </div>
                {/* Apellido */}
                <div className='relative'>
                <label className="block mb-2 text-sm font-bold text-gray-700">Apellido</label>
                <input
                    type="text"
                    placeholder="Introduce el apellido"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                />
                {/* Correo */}
                </div>
                <div className='relative'>
                <label className="block mb-2 text-sm font-bold text-gray-700">E-mail</label>
                <input
                    type="email"
                    placeholder="Introduce tu E-mail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                />
                </div>
                {/* Contraseña */}
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Introduce tu contraseña"
                            className="bg-white border text-gray-900 rounded-lg block w-full p-2.5 pr-10"
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
                {/* Estado Activo o Inactivo */}
                <div className="flex items-center mb-4">
                    <label className="text-gray-700 mr-2 font-bold">Activar</label>
                    <div
                        onClick={() => setIsActive(!isActive)}
                        className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
                            isActive ? 'bg-green-500' : ''}`}>
                        <div
                            className={`h-4 w-4 bg-white rounded-full shadow-md transform duration-300 ${
                            isActive ? 'translate-x-4' : ''}`}>
                        </div>
                    </div>
                </div>

                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
