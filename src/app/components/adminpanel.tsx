"use client"

import React from 'react';
import useFetchUsers from '../hooks/fetchusers';

const AdminPanel = () => {
    const { users, loading, error } = useFetchUsers();

    if (error) {
        return  <p>Error: {error}</p>
    }
    if (loading) {
        return <p>Cargando...</p>
    }


    return (
        <div className="min-h-screen bg-[#F5F7FA] p-8">
          <h1 className="text-2xl text-black font-bold mb-6">Administración de Usuarios</h1>
          <div className="mt-4">
            <h2 className="text-xl text-black font-semibold mb-4">Lista de Usuarios</h2>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left border-b">ID</th>
              <th className="py-3 px-6 text-left border-b">Nombre</th>
              <th className="py-3 px-6 text-left border-b">Email</th>
              <th className="py-3 px-6 text-left border-b">Status</th>
            </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{user.id}</td>
                <td className="py-3 px-6 text-left">{user.name}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">
                  {user.isActive ? (
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs">
                  Activo
                </span>
                  ) : (
                <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full text-xs">
                  Inactivo
                </span>
                  )}
                </td>
              </tr>
            ))}
            </tbody>
            </table>
          </div>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Agregar Usuario
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Eliminar Usuario
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Editar Usuario
            </button>
          </div>
        </div>
      );
}

export default AdminPanel;