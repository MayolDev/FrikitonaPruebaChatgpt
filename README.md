# 🛍️ Tienda Online de Manualidades - 3D & Diamond Painting

Este proyecto es una tienda online dedicada a la venta de productos de manualidades, con especial foco en artículos de **impresión 3D** y **diamond painting**. Está construida con una arquitectura moderna, separando el **frontend en Next.js** del **backend en Node.js**.

## 🧩 Características principales

- 🎨 Catálogo de productos organizados por categoría
- 🔍 Búsqueda y filtrado por tipo de manualidad
- 🛒 Carrito de compras
- 👤 Gestión de usuarios y autenticación
- 💳 Integración con pasarelas de pago (futuro)
- 📦 Panel de administración para gestión de inventario (futuro)
- 🌐 Diseño adaptable (responsive) y accesible

---

## 🧱 Tecnologías usadas

### Frontend (Next.js)

- Next.js 14+
- React
- Tailwind CSS (o tu framework de estilos preferido)
- Axios para llamadas a API
- Context API o Zustand para manejo de estado global

### Backend (Node.js)

- Node.js con Express
- MongoDB (usando Mongoose) o PostgreSQL (usando Prisma)
- JWT para autenticación
- Multer para subida de imágenes
- Stripe o PayPal (para pagos, en futuras versiones)

---

## 🗂️ Estructura del proyecto (propuesta inicial)

```
/tienda-manualidades/
├── frontend/           # Aplicación Next.js
│   ├── pages/
│   ├── components/
│   └── styles/
│
├── backend/            # API Node.js con Express
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
│
└── README.md
```

---

## 🚀 Cómo empezar

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tienda-manualidades.git
cd tienda-manualidades
```

### 2. Instala dependencias

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 📌 Plan a futuro

- Añadir otras categorías de manualidades: scrapbooking, pintura, etc.
- Multilenguaje
- SEO avanzado
- App móvil (React Native o Flutter)
- Blog integrado para tutoriales y comunidad

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes abrir issues o hacer pull requests.

---

## 📄 Licencia

MIT
