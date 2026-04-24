# 🟣 Monolith Purple
> **Gaming Store & Hardware - Cyberpunk Aesthetic**

## 📝 Descripción del Proyecto
Monolith Purple es una tienda de componentes y artículos relacionados con el gaming, definida por una estética visual inspirada en el género **Cyberpunk**. El proyecto está diseñado para ofrecer una experiencia de usuario inmersiva y funcional.

---

## 🗺️ Arquitectura de Rutas

### 1. Rutas Base
La navegación principal se compone de:
* **Home**: Inicio de la aplicación.
* **Catálogo**: Exploración general de productos.
* **New Drops**: Próximos lanzamientos.
* **Perfil**: Gestión de cuenta.


### 2. Rutas Anidadas
Dentro de la sección de **Catálogo**, se implementaron rutas que utilizan un **Layout personalizado**:
* `apparel/` (Indumentaria)
* `figuras/` (Coleccionables)
* `peripherical/` (Periféricos)

### 3. Rutas Dinámicas
* **Detalle de Producto**: Se encuentra vinculada al catálogo. 
* *Nota:* Actualmente funciona con una lista estática, pero está preparada para la integración con una **API** de datos externa.

---

## ⚙️ Componentes Globales
Para optimizar el código y la experiencia de usuario, se definieron componentes reutilizables alojados en la carpeta de componentes:
* **Barra de Navegación (Navbar)**
* **Pie de Página (Footer)**

---


## 🔍 Detalle de Secciones

| Sección | Descripción |
| :--- | :--- |
| **Home** | Inicio donde se visualizan productos destacados y acceso al Login para obtener beneficios. |
| **Catálogo** | Apartado central para ver productos por categorías y acceder al detalle individual de cada uno para la compra. |
| **New Drops** | Sección dedicada a futuros lanzamientos. Incluye un sistema de suscripción para obtener **acceso anticipado**. |
| **Perfil** | Espacio del usuario donde se visualiza el historial de compras y los productos adquiridos. |

---

## 👥 Integrantes
* **Perez, Lucas**
* **Neira, Leonardo**
* **Quiroga, Matias**
* **Pereyra, Thomas**



