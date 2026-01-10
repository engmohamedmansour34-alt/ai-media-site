import Link from "next/link"

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Digital Products & Systems
          </h2>
          <p className="mt-4 text-gray-600">
            Systems that turn knowledge into reusable, revenue-generating assets.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* Product Card */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-medium text-emerald-600">
              Content Operating System
            </span>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">
              One Recording → Profitable Content System
            </h3>

            <p className="mt-4 text-gray-600">
              A professional operating system for turning recordings into
              structured, monetizable content assets — without burnout.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700 text-sm">
              <li>✔ Asset-based content logic</li>
              <li>✔ Execution playbooks & templates</li>
              <li>✔ Monetization-first workflows</li>
            </ul>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">$59</span>

              <Link
                href="/products/content-system"
                className="inline-flex items-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
              >
                View System
              </Link>
            </div>
          </div>

          {/* Placeholder */}
          <div className="border-2 border-dashed rounded-2xl p-8 flex items-center justify-center text-gray-400">
            More systems coming soon
          </div>
        </div>
      </div>
    </section>
  )
}
