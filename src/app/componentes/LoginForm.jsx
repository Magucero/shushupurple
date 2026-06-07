"use client";

import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
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

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.username === formData.username &&
        u.password === formData.password
    );

    if (user) {
      alert(`Bienvenido ${user.username}`);

      // Guardar sesión
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      alert("Usuario o contraseña incorrectos");
    }
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
        className="bg-green-500 text-white p-2 rounded"
      >
        Iniciar sesión
      </button>
    </form>
  );
}