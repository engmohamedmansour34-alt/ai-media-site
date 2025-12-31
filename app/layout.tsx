import './globals.css'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata = {
  title: {
    default: 'AI Media Transcription',
    template: '%s | AI Media',
  },
  description:
    'Professional human-made audio and video transcription services in Arabic & English.',
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

      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* Global Floating Action */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
