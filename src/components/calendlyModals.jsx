'use client'

import { useEffect } from 'react'
import { sileo } from 'sileo'

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
    sileo.success({
      title: 'Meeting Scheduled!',
      description: 'We will see you soon. 🎉',
      duration: 10000,
      fill: "black",
       styles: {
          title: "text-white!",
          description: "text-white/75!",
      },
    })

    onClose()
  }
}

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)

  }, [isOpen, url])

  return null
}