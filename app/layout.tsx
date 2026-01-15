import './globals.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Analytics from './components/Analytics'

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
        <meta name="google" content="notranslate" />
      </head>

      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">

        {/* 📊 Google Analytics (Client-only, SPA safe) */}
        <Analytics />

        {/* 🔝 Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <Navbar />
        </header>

        {/* 🧠 Main Content */}
        <main className="flex-1 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* 🔻 Footer */}
        <Footer />

        {/* 💬 Floating CTA */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
