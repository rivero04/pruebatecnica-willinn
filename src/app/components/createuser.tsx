import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAddUser from '../hooks/useAddUser';
import { NewUser, User } from '../hooks/types';

interface CreateUserProps {
  onUserAdded: (newUser: User) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onUserAdded }) => {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    email: '',
    password: '',
    isActive: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { addUser, loading, error } = useAddUser();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = await addUser(formData);
    if (newUser) {
      onUserAdded(newUser);
      setFormData({
        name: '',
        email: '',
        password: '',
        isActive: false,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-full w-full flex flex-col bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-black mb-4">Agregar usuario</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <label className="block mb-2 text-sm font-bold text-gray-700">Nombre y Apellido</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Introduce el nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <div className="relative">
          <label className="block mb-2 text-sm font-bold text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Introduce tu E-mail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              id="password"
              placeholder="Introduce tu contraseña"
              className="bg-white border text-gray-900 rounded-lg block w-full p-2.5 pr-10"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <label className="text-gray-700 mr-2 font-bold">Activar</label>
          <div
            onClick={() => setFormData({ ...formData, isActive: !formData.isActive })}
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${formData.isActive ? 'bg-green-500' : ''}`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform duration-300 ${formData.isActive ? 'translate-x-4' : ''}`}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          disabled={loading}
        >
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default CreateUser;
