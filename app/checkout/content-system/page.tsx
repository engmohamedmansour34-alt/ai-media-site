import Link from "next/link"

export default function ContentSystemCheckout({
  searchParams,
}: {
  searchParams: { plan?: string }
}) {
  const plan = searchParams.plan || "basic"

  const plans: Record<string, any> = {
    basic: {
      name: "Basic Edition",
      price: "$19",
      description: "Full guide + system overview",
    },
    pro: {
      name: "Professional Edition",
      price: "$49",
      description: "Templates, workflows, commercial use",
    },
    agency: {
      name: "Agency Edition",
      price: "$99",
      description: "Client usage + licensing + pricing models",
    },
  }

  const selected = plans[plan]

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl p-10 shadow">

        <h1 className="text-3xl font-bold text-gray-900">
          Checkout
        </h1>

        <div className="mt-6 border rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {selected.name}
          </h2>

          <p className="mt-2 text-gray-600">
            {selected.description}
          </p>

          <p className="mt-4 text-2xl font-bold text-gray-900">
            {selected.price}
          </p>
        </div>

        {/* Payment Placeholder */}
        <div className="mt-8 space-y-4">
          <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-semibold hover:bg-emerald-700 transition">
            Proceed to Payment
          </button>

          <p className="text-sm text-gray-500 text-center">
            Secure checkout • Instant access after purchase
          </p>
        </div>

        {/* Service Upsell */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-gray-600">
            Prefer us to apply the system for you?
          </p>

          <Link
            href="/upload"
            className="inline-block mt-3 text-emerald-600 font-semibold hover:underline"
          >
            Use our done-for-you service →
          </Link>
        </div>
      </div>
    </main>
  )
}
