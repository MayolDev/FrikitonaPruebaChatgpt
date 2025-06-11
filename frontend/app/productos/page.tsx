'use client'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: number
}

export default function Productos() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products', err))
  }, [])

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Catálogo</h1>
      <ul className="space-y-1">
        {products.map(p => (
          <li key={p.id} className="border p-2 rounded-md">
            <strong>{p.name}</strong> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}
