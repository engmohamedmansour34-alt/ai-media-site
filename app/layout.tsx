import './globals.css'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata = {
  title: 'AI Media Transcription',
  description:
    'Professional human-made audio and video transcription services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      translate="no"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Prevent automatic translation */}
        <meta name="google" content="notranslate" />
      </head>

      <body className="relative min-h-screen bg-white text-gray-900 antialiased">
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Floating Action */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
