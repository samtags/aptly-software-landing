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

    const eventUri = e.data.payload?.event?.uri

    // I-fetch ang Google Meet link mula sa Calendly API
    const res = await fetch('/api/calendly-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventUri })
    })

    const { meetLink } = await res.json()
    console.log('Meet link:', meetLink)

    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        calendlyLink: meetLink,
      })
    })

    window.Calendly.closePopupWidget()
    onScheduled?.()
    sileo.success({
      title: 'Meeting Scheduled!',
      description: 'We will see you soon. 🎉',
      fill: "black",
      duration: 5000,
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