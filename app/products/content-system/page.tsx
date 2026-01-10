import Link from "next/link"

export const metadata = {
  title: "Content Operating System – Turn Recordings Into Revenue Assets",
  description:
    "Turn recordings, conversations, and knowledge into structured, reusable, revenue-supporting content assets.",
}

export default function ContentSystemPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="py-28 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Content Operating System
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            Turn Recordings Into Revenue Assets — Without Burnout, Guesswork, or Noise
          </p>

          <p className="mt-8 text-lg font-semibold">
            Stop creating content.
            <br />
            Start building assets.
          </p>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Most content doesn’t fail because of quality.
            <br />
            It fails because there is <strong>no system behind it</strong>.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#pricing"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700"
            >
              Get the System
            </a>

            <Link
              href="/upload"
              className="border px-8 py-4 rounded-xl hover:bg-gray-50"
            >
              Try Transcription
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            The Real Problem (That No One Names)
          </h2>

          <p className="text-gray-700 mb-6">
            Most creators and businesses follow this loop:
          </p>

          <p className="font-medium mb-6">
            Record → Publish → Move on → Burn out → Start again
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Content debt</li>
            <li>• Low ROI on time</li>
            <li>• No compounding value</li>
            <li>• Inconsistent revenue</li>
          </ul>

          <p className="mt-6 text-gray-700">
            You don’t have a content problem.
            <br />
            You have a <strong>structure problem</strong>.
          </p>
        </div>
      </section>

      {/* SHIFT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            The Shift That Changes Everything
          </h2>

          <p className="mb-4">
            A recording is not content.
          </p>

          <p className="mb-6 font-semibold">
            A recording is raw material.
          </p>

          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Crude oil</li>
            <li>• Raw data</li>
            <li>• Unprocessed metal</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Its value is unlocked only after processing.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Record with intent</li>
            <li>✔ Process for meaning</li>
            <li>✔ Repurpose without dilution</li>
            <li>✔ Monetize without pressure</li>
          </ul>

          <p className="mt-6 text-gray-700">
            Every step documented.
            <br />
            Nothing left to improvisation.
          </p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            What This System Actually Is
          </h2>

          <p className="mb-6">
            <strong>The Content Operating System</strong> is a professional,
            execution-ready framework that helps you:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Turn one recording into multiple usable assets</li>
            <li>✔ Create content that naturally leads to sales</li>
            <li>✔ Remove guesswork from publishing</li>
            <li>✔ Scale without burning yourself out</li>
            <li>✔ Build authority without posting more</li>
          </ul>

          <p className="mt-6 font-medium">
            This is not theory.
            <br />
            This is operational material.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            What You Get (Professional Edition)
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-bold mb-3">
                1. Full Book (Strategic Foundation)
              </h3>
              <p className="text-gray-600">
                A complete, system-driven guide covering content as assets,
                transcription logic, repurposing, monetization, automation,
                and productized workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                2. Execution Playbook
              </h3>
              <p className="text-gray-600">
                Clear operational logic for recording decisions, processing,
                monetization alignment, and scaling readiness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                3. 12+ Professional Templates & Checklists
              </h3>
              <p className="text-gray-600">
                Decision-making tools for content, offers, sales readiness,
                and scaling — not decorative worksheets.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                4. Visual System Workflows
              </h3>
              <p className="text-gray-600">
                Clear diagrams showing how ideas become business assets
                without killing quality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                5. Implementation Kit (7-Day Setup)
              </h3>
              <p className="text-gray-600">
                A step-by-step execution order to remove bottlenecks
                and create predictable output.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Content Operating System
          </h2>

          <p className="text-xl mb-6">
            Professional Edition
          </p>

          <p className="text-5xl font-bold mb-6">$59</p>

          <Link
            href="/checkout?product=content-system"
            className="inline-block bg-emerald-600 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-700"
          >
            Access the Content Operating System
          </Link>

          <p className="mt-4 text-sm text-gray-400">
            One-time purchase • Lifetime use
          </p>
        </div>
      </section>

    </main>
  )
}
