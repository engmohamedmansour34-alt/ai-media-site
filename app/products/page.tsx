import Link from "next/link"

export const metadata = {
  title: "One Recording → Profitable Content System",
  description:
    "Learn how to turn a single audio or video recording into articles, social content, and revenue-generating assets using a proven AI + Human workflow.",
}

export default function ContentSystemProductPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-emerald-600 font-medium">
            Digital Guide • Practical System
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Turn One Recording Into a
            <br /> Profitable Content System
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A step-by-step reference guide that shows you how to transform a
            single audio or video file into content that builds authority,
            attracts traffic, and generates income — without burnout.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#buy"
              className="rounded-lg bg-emerald-600 px-8 py-4 text-white font-medium hover:bg-emerald-700 transition"
            >
              Get the System
            </a>

            <Link
              href="/articles/manual-vs-ai-transcription"
              className="rounded-lg border border-gray-300 px-8 py-4 text-gray-700 hover:border-gray-400 transition"
            >
              Learn the Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            The real problem with content creation
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Most creators produce content once, publish it, and move on.
            No system. No reuse. No leverage.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>– Constant content burnout</li>
            <li>– Low return on time invested</li>
            <li>– No clear monetization path</li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            The solution: a repeatable content system
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            This guide teaches you a practical workflow that combines AI speed
            with human judgment to extract maximum value from every recording
            you create.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900">
                1. Professional Transcription
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Clean, accurate text ready for editing and reuse.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900">
                2. Human Content Processing
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Structure, clarity, and commercial intent.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-900">
                3. Repurposing & Monetization
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Articles, social posts, emails, and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            What you’ll get inside
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>✔ Full content repurposing system</li>
            <li>✔ Real Arabic & English examples</li>
            <li>✔ Ready-to-use templates & checklists</li>
            <li>✔ Monetization and service positioning</li>
            <li>✔ 30 / 60 / 90 day execution plan</li>
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Who this system is for
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Content creators & podcasters</li>
            <li>• Freelancers & consultants</li>
            <li>• Small agencies & solo founders</li>
          </ul>

          <p className="mt-6 text-gray-500">
            Not suitable if you’re looking for shortcuts or instant results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="buy" className="py-24 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to turn content into an asset?
          </h2>

          <p className="mt-4 text-gray-600">
            Start building a system that works for you long after publishing.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-10 py-4 text-white font-medium hover:bg-emerald-700 transition"
            >
              Buy the Guide
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
