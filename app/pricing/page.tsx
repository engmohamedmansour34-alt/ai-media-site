import Link from 'next/link'

export const metadata = {
  title: 'Pricing – Human Transcription Services',
  description:
    'Simple and transparent pricing for professional human-made transcription in Arabic and English.',
}

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Simple, Transparent Pricing
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          100% human transcription. No subscriptions.
          <br />
          Pay only for what you need.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-10 mb-24">
        {/* Starter */}
        <div className="border rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-500 mb-6">For small files & first-time users</p>

          <div className="text-4xl font-bold mb-1">$10</div>
          <p className="text-sm text-gray-500 mb-6">
            Up to 30 minutes
          </p>

          <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
            <li>✔ Arabic or English</li>
            <li>✔ Clean human transcription</li>
            <li>✔ Proofread & formatted</li>
            <li>✔ Delivery in 24–48h</li>
          </ul>

          <Link
            href="/upload"
            className="block bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Pro */}
        <div className="border-2 border-black rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-gray-500 mb-6">
            For creators & regular work
          </p>

          <div className="text-4xl font-bold mb-1">$25</div>
          <p className="text-sm text-gray-500 mb-6">
            Up to 90 minutes
          </p>

          <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
            <li>✔ Everything in Starter</li>
            <li>✔ Optional timestamps</li>
            <li>✔ SRT / VTT subtitles</li>
            <li>✔ Priority processing</li>
          </ul>

          <Link
            href="/upload"
            className="block bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Choose Pro
          </Link>
        </div>

        {/* Business */}
        <div className="border rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Business</h3>
          <p className="text-gray-500 mb-6">
            Long content & teams
          </p>

          <div className="text-4xl font-bold mb-1">$60</div>
          <p className="text-sm text-gray-500 mb-6">
            Up to 4 hours
          </p>

          <ul className="text-sm text-gray-600 space-y-3 mb-8 text-left">
            <li>✔ Everything in Pro</li>
            <li>✔ Large files support</li>
            <li>✔ Consistent formatting</li>
            <li>✔ Email support</li>
          </ul>

          <Link
            href="/upload"
            className="block bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Start Business
          </Link>
        </div>
      </div>

      {/* FAQ / Notes */}
      <div className="max-w-3xl mx-auto text-center text-gray-600 text-sm">
        <p className="mb-3">
          🔒 All files are handled confidentially and never shared.
        </p>
        <p>
          💬 Need a custom quote for large projects?
          <Link href="/upload" className="underline ml-1">
            Upload your file
          </Link>
          {' '}and we’ll get back to you.
        </p>
      </div>
    </main>
  )
}
