# 🟣 Monolith Purple
> **Gaming Store & Hardware - Cyberpunk Aesthetic**

## 📝 Descripción del Proyecto
Monolith Purple es una tienda de componentes y artículos relacionados con el gaming, definida por una estética visual inspirada en el género **Cyberpunk**. El proyecto está diseñado para ofrecer una experiencia de usuario inmersiva y funcional.

---

## 🛠️ Stack Tecnológico
* **Next.js 16** (App Router)
* **React 19**
* **Tailwind CSS 4**
* **API externa:** [RAWG Video Games Database](https://rawg.io/apidocs)

---

## 🚀 Puesta en Marcha

1. Instalar las dependencias:
   ```bash
   npm install
   ```

2. Crear un archivo `.env.local` en la raíz del proyecto con tu API Key de RAWG:
   ```bash
   RAWG_API_KEY=tu_api_key
   ```

3. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación queda disponible en `http://localhost:3000`.

| Script | Descripción |
| :--- | :--- |
| `npm run dev` | Servidor de desarrollo. |
| `npm run build` | Compilación para producción. |
| `npm run start` | Servidor de producción. |
| `npm run lint` | Análisis de código con ESLint. |

---

## 🗺️ Arquitectura de Rutas

### 1. Rutas Base
La navegación principal se compone de:
* **Home** (`/`): Inicio de la aplicación.
* **Catálogo** (`/catalogo`): Exploración general de productos.
* **New Drops** (`/newdrops`): Próximos lanzamientos.
* **Juegos** (`/juegos`): Buscador de requisitos de juegos (integrado con la API de RAWG).
* **Carrito** (`/carrito`): Resumen y gestión de la compra.
* **Perfil** (`/perfil`): Gestión de cuenta.

### 2. Rutas Anidadas
Dentro de la sección de **Catálogo**, se implementaron rutas que utilizan un **Layout personalizado**:
* `apparel/` (Indumentaria)
* `figuras/` (Coleccionables)
* `peripherical/` (Periféricos)

### 3. Rutas Dinámicas
* **Detalle de Producto** (`/catalogo/[id]`): Vinculada al catálogo, muestra el detalle individual de cada producto.

### 4. API Routes (Route Handlers)
* `GET /api/juegos/buscador?q=...` → Busca juegos en RAWG por nombre y devuelve nombre, imagen y plataformas.
* `GET /api/juegos/detalle?id=...` → Devuelve descripción y requisitos (mínimo / recomendado) de un juego, y **sugiere productos del catálogo** según qué tan exigente sea.

---

## ⚙️ Componentes Globales
Para optimizar el código y la experiencia de usuario, se definieron componentes reutilizables alojados en `src/app/componentes/`:
* **Barra de Navegación (Navbar)**
* **Pie de Página (Footer)**
* **Carrito (CartContext / Carritoup / AddToCar):** estado global del carrito mediante React Context.
* **Buscador y Requisitos de Juegos (buscadorjuego / requerimientosjuegos)**
* **Cards** reutilizables para Home, Catálogo y Drops.

---

## 🔍 Detalle de Secciones

| Sección | Descripción |
| :--- | :--- |
| **Home** | Inicio donde se visualizan productos destacados y acceso al Login para obtener beneficios. |
| **Catálogo** | Apartado central para ver productos por categorías y acceder al detalle individual de cada uno para la compra. |
| **New Drops** | Sección dedicada a futuros lanzamientos. Incluye un sistema de suscripción para obtener **acceso anticipado**. |
| **Juegos** | Buscá un juego y la app muestra sus requisitos mínimos y recomendados, recomendando qué productos del catálogo te sirven para armar el setup. |
| **Carrito** | Resumen de los productos agregados, con gestión de cantidades y total de la compra. |
| **Perfil** | Espacio del usuario donde se visualiza el historial de compras y los productos adquiridos. |

---

## 👥 Integrantes
* **Perez, Lucas**
* **Neira, Leonardo**
* **Quiroga, Matias**
* **Pereyra, Thomas**
