import React, { useState } from 'react';
import '../Form/Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cellphone: '',
  });
  const [error, setError] = useState('');

  const handleChange = () => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();


    if (!/^\d{9}$/.test(formData.cellphone)) {
      setError('En celular no tiene 9 digitos');
      return;
    }

    try {
      const response = await fetch('https://654acfad5b38a59f28ee3f86.mockapi.io/api/users', userData);
      console.log('Usuario creado:', response.data);

    } catch (error) {
      console.error('Error al crear el usuario:', error);
      setError('Se produjo un error al crear el usuario.');
    }
  };
 

  return (
    <div>
      <h1>Crear Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Celular:</label><br />
          <input type="number" name="cellphone" value={formData.cellphone} onChange={handleInputChange} required />
        </div>
        <button type="submit">Crear Usuario</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export {Form};
