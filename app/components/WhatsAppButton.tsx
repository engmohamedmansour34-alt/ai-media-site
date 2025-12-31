'use client'

export default function WhatsAppButton() {
  const phoneNumber = '201234567890' // رقمك بدون +
  const message =
    'Hello, I would like to ask about manual transcription service.'

  const url = `https://wa.me/${+201115579008}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
    >
      <span className="text-lg">💬</span>
      <span className="font-medium">WhatsApp</span>
    </a>
  )
}
