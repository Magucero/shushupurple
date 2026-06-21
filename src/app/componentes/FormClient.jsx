"use client";

import { useState } from "react";

export default function FormClient() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar nuevo usuario
    users.push(formData);

    // Guardar nuevamente
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario registrado");

    // Limpiar formulario
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-6"
    >
      <input
        type="text"
        name="username"
        placeholder="Usuario"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        Registrarse
      </button>
    </form>
  );
}