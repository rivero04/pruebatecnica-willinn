import { FaSearch, FaEllipsisH, FaPen, FaTrashAlt } from 'react-icons/fa';
import useFetchUsers from '../hooks/fetchusers';
import React, { useState } from 'react';

const Table = () => {
    const { users, loading, error } = useFetchUsers();
    const [activeUser, setActiveUser] = useState<number | null>(null);

    if (error) {
        return <p>Error: {error}</p>;
    }
    if (loading) {
        return <p className="text-xl font-semibold text-black">Cargando...</p>;
    }

    const handleEdit = (userId: number) => {
        // Lógica para editar usuario
        console.log("Editar usuario con ID:", userId);
    };

    const handleDelete = (userId: number) => {
        // Lógica para eliminar usuario
        console.log("Eliminar usuario con ID:", userId);
    };

    const toggleIcons = (userId: number) => {
        setActiveUser(activeUser === userId ? null : userId);
    };

    return (
        <main className="h-full flex-grow p-8">
            <h1 className="text-3xl font-bold text-black mb-8"> Lista de Usuarios</h1>
            <div className="flex space-x-8">
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-black">Usuarios</h2>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar"
                                className="pl-10 pr-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">Correo</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{user.name}</td>
                                    <td className="py-3 px-6 text-left">{user.email}</td>
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex justify-end">
                                            <button
                                                className="text-gray-600 hover:text-black"
                                                aria-label="Opciones"
                                                onClick={() => toggleIcons(user.id)}
                                            >
                                                {activeUser === user.id ? (
                                                    <div className="flex space-x-4">
                                                        <FaPen
                                                            size={18}
                                                            className="text-blue-500 cursor-pointer"
                                                            onClick={() => handleEdit(user.id)}
                                                        />
                                                        <FaTrashAlt
                                                            size={18}
                                                            className="text-red-500 cursor-pointer"
                                                            onClick={() => handleDelete(user.id)}
                                                        />
                                                    </div>
                                                ) : (
                                                    <FaEllipsisH size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default Table;
