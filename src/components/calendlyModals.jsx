'use client'

import { useEffect } from 'react'

export default function CalendlyModal({ url, isOpen, onClose }) {

  useEffect(() => {
    if (!isOpen || !url) return

    // I-check muna kung loaded na ang Calendly script
    if (typeof window === 'undefined' || !window.Calendly) {
      console.error('Calendly script not loaded yet')
      return
    }

    window.Calendly.initPopupWidget({ url })

    const handleMessage = (e) => {
      if (e.data.event === 'calendly.event_scheduled') {
        onClose()
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)

  }, [isOpen, url])

  return null
}