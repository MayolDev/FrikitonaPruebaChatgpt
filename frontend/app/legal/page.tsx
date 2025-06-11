import Link from 'next/link'

export default function Legal() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Información Legal</h1>
      <ul className="list-disc list-inside space-y-1">
        <li><Link className="text-blue-600" href="/legal/terminos">Términos y condiciones</Link></li>
        <li><Link className="text-blue-600" href="/legal/privacidad">Política de privacidad</Link></li>
        <li><Link className="text-blue-600" href="/legal/cookies">Política de cookies</Link></li>
        <li><Link className="text-blue-600" href="/legal/aviso">Aviso legal</Link></li>
      </ul>
    </div>
  )
}
