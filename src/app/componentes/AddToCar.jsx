"use client"

export default function AddToCar({
  nombre,
  img,
  precio,
  style,
  nameBoton,
}) {
  const handleClick = () => {
    const carrito = JSON.parse(
      localStorage.getItem("carrito")
    ) || [];

    const producto = {
      nombre,
      img,
      precio,
      
    };

    carrito.push(producto);

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

  
  };

  return (
    <button
      onClick={handleClick}
      className={style}
    >
      {nameBoton}
    </button>
  );
}