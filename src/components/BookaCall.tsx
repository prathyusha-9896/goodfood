'use client'

import { useEffect } from 'react'

export default function BookDemo() {
  useEffect(() => {
    // Inject Calendly script once
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Optional cleanup if the component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FCFAF4] p-4">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/hello-thegoodroad/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
