'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  label?: string
}

export default function CopyButton({ text, label = 'Copier' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 text-sm font-bold border-2 border-ethic-black text-ethic-black rounded-full hover:bg-ethic-black hover:text-white transition-colors"
    >
      {copied ? 'Copié !' : label}
    </button>
  )
}
