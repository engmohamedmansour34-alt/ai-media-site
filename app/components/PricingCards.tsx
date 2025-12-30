import Link from 'next/link'

export default function PricingCards() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
      
      {/* Basic */}
      <div className="border rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Basic</h3>
        <p className="text-4xl font-bold mb-4">$1 / min</p>

        <ul className="text-gray-600 mb-6 space-y-2">
          <li>✔ Audio or Video</li>
          <li>✔ Manual Transcription</li>
          <li>✔ Delivery in 48 hours</li>
        </ul>

        <Link
          href="/upload"
          className="inline-block bg-black text-white px-6 py-3 rounded"
        >
          Get Started
        </Link>
      </div>

      {/* Pro */}
      <div className="border-2 border-black rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Pro</h3>
        <p className="text-4xl font-bold mb-4">$1.5 / min</p>

        <ul className="text-gray-600 mb-6 space-y-2">
          <li>✔ Everything in Basic</li>
          <li>✔ Faster delivery (24 hours)</li>
          <li>✔ Timestamps</li>
        </ul>

        <Link
          href="/upload"
          className="inline-block bg-black text-white px-6 py-3 rounded"
        >
          Most Popular
        </Link>
      </div>

      {/* Business */}
      <div className="border rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Business</h3>
        <p className="text-4xl font-bold mb-4">Custom</p>

        <ul className="text-gray-600 mb-6 space-y-2">
          <li>✔ Large files</li>
          <li>✔ Priority support</li>
          <li>✔ NDA available</li>
        </ul>

        <a
          href="https://wa.me/201234567890"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded"
        >
          Contact Us
        </a>
      </div>

    </section>
  )
}
