'use client'

import { useEffect } from 'react'

export default function CalendlyModal({ url, isOpen, onClose, onScheduled, payload }) {

  useEffect(() => {
    if (!isOpen || !url) return

    if (typeof window === 'undefined' || !window.Calendly) {
      console.error('Calendly script not loaded yet')
      return
    }

    window.Calendly.initPopupWidget({ url })

const handleMessage = async (e) => {
  if (e.data.event === 'calendly.event_scheduled') {
    
    console.log('✅ Calendly event triggered!')
    console.log('Payload:', payload)
    console.log('URL:', url)

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        calendlyLink: url,
      })
    })

    const data = await res.json()
    console.log('NocoDB response:', data)

    window.Calendly.closePopupWidget()
    onScheduled?.()
    alert('Your meeting has been scheduled! We will see you soon. 🎉')
    onClose()
  }
}

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)

  }, [isOpen, url])

  return null
}