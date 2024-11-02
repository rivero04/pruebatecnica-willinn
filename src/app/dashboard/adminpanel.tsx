import React from 'react';

const AdminPanel = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Administracion de Usuarios</h1>
      <div>
        <button style={{ margin: '10px' }}>Agregar Usuaroi</button>
        <button style={{ margin: '10px' }}>Eliminar Usuario</button>
        <button style={{ margin: '10px' }}>Editar Usuario</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Lista de Usuarios</h2>
        <ul>
          <li>Usuario 1</li>
          <li>Usuario 2</li>
          <li>Usuario 3</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;