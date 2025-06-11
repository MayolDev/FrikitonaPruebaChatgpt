'use client'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err))
  }, [])

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">
        Tienda Online de Manualidades
      </h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Características principales</h2>
        <ul className="list-disc list-inside">
          <li>Catálogo de productos organizados por categoría</li>
          <li>Búsqueda y filtrado por tipo de manualidad</li>
          <li>Carrito de compras</li>
          <li>Gestión de usuarios y autenticación</li>
          <li>Integración con pasarelas de pago (futuro)</li>
          <li>Panel de administración para gestión de inventario (futuro)</li>
          <li>Diseño adaptable y accesible</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Productos destacados</h2>
        <p>
          <a href="/productos" className="text-blue-600">Ver todo el catálogo</a>
        </p>
        <ul className="space-y-1">
          {products.map(p => (
            <li key={p.id} className="border p-2 rounded-md">
              <strong>{p.name}</strong> - ${p.price}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
