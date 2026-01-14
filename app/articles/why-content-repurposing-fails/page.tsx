import Link from "next/link"

export const metadata = {
  title: "Why Content Repurposing Keeps You Busy — Not Paid",
  description:
    "Most content repurposing fails because it’s built on randomness, not systems. Here’s the framework that actually compounds authority and revenue.",
}

export default function ArticlePage() {
  return (
    <main className="bg-white text-gray-900">
      <article className="max-w-3xl mx-auto px-6 py-20">

        {/* HERO */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Why Content Repurposing Keeps You Busy — <br />
            <span className="text-emerald-600">Not Paid</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Most creators don’t fail because of effort or consistency.
            <br />
            They fail because their content has no system behind it.
          </p>
        </header>

        {/* OPENING */}
        <section className="space-y-6">
          <p>
            Here’s the truth most creators don’t want to admit:
          </p>

          <p className="font-medium">
            If content repurposing actually worked the way people claim,
            you wouldn’t feel exhausted, invisible, and underpaid at the same time.
          </p>

          <p>
            You’ve followed the advice.
            <br />
            You cut long content into clips.
            <br />
            You post everywhere.
          </p>

          <p className="font-medium">
            And somehow… nothing compounds.
          </p>

          <p className="text-gray-700">
            The issue isn’t effort.
            <br />
            It isn’t consistency.
            <br />
            And it definitely isn’t a lack of ideas.
          </p>

          <p className="font-semibold">
            The real problem is that most content repurposing is built on randomness —
            not structure.
          </p>

          <p>
            You’re not running a content system.
            <br />
            You’re recycling outputs and hoping momentum appears.
          </p>

          <p className="font-medium">It doesn’t.</p>
        </section>

        {/* FAILURES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Why Common Approaches Fail
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-lg">
                1. The Productivity Trap
              </h3>
              <p className="text-gray-700 mt-2">
                Repurposing is treated as a hack instead of infrastructure.
                The goal becomes volume — not leverage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                2. The Missing Spine
              </h3>
              <p className="text-gray-700 mt-2">
                Content is created without a central point of view.
                Repurposing fragments the message instead of reinforcing it.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                3. Attention Without Direction
              </h3>
              <p className="text-gray-700 mt-2">
                Everything is optimized to be seen — not to move the reader forward.
                Awareness without progression leads to stalled growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                4. The Offer Lag
              </h3>
              <p className="text-gray-700 mt-2">
                Content is produced first.
                Monetization is “added later.”
                This guarantees weak alignment and low conversion.
              </p>
            </div>
          </div>

          <p className="mt-8 font-medium">
            This isn’t a tooling problem.
            <br />
            It’s a systems failure.
          </p>
        </section>

        {/* SYSTEM SHIFT */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            The System Shift
          </h2>

          <p>
            Content repurposing only works when you stop thinking in posts
            and start thinking in systems.
          </p>

          <p className="mt-4 font-medium">
            Stop repurposing content.
            <br />
            Start engineering content infrastructure.
          </p>

          <div className="mt-8 border rounded-xl p-6 bg-gray-50 space-y-3">
            <p><strong>Core:</strong> One deep idea you’re willing to repeat for a year</p>
            <p><strong>Derivatives:</strong> Strategic angles — not formats</p>
            <p><strong>Path:</strong> A deliberate journey toward a decision</p>
          </div>

          <p className="mt-6">
            When this is in place, repurposing stops being a task.
            <br />
            It becomes the natural consequence of clarity.
          </p>
        </section>

        {/* PRACTICAL */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            The Practical Framework
          </h2>

          <ol className="space-y-6 list-decimal list-inside text-gray-700">
            <li>
              <strong>Build Core Assets, Not Content Pieces</strong>
              <br />
              Frameworks, diagnoses, and strategic positions — not posts.
            </li>

            <li>
              <strong>Extract Angles, Not Fragments</strong>
              <br />
              Misconceptions, trade-offs, and decisions — not quotes.
            </li>

            <li>
              <strong>Align Each Piece to Awareness Level</strong>
              <br />
              Clarification → Reframing → Decision → Offer readiness.
            </li>

            <li>
              <strong>Design for Reuse Before Publishing</strong>
              <br />
              Repurposing happens upstream — by design.
            </li>
          </ol>
        </section>

        {/* MONETIZATION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            Where Monetization Actually Enters
          </h2>

          <p>
            By the time someone reaches your offer:
          </p>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ They agree with your worldview</li>
            <li>✔ They trust your judgment</li>
            <li>✔ They understand the cost of not fixing the problem</li>
          </ul>

          <p className="mt-6 font-medium">
            Your product stops being an offer.
            <br />
            It becomes the operating system behind your thinking.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 border-t pt-16">
          <h2 className="text-3xl font-bold">
            Stop Repurposing Content.
            <br />
            Start Running a System.
          </h2>

          <p className="mt-4 text-gray-600">
            If you want the complete structure, sequencing logic,
            and monetization alignment —
            the next step is straightforward.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products/content-system"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-emerald-700"
            >
              Get the Content Operating System
            </Link>

            <Link
              href="/upload"
              className="border px-8 py-4 rounded-xl text-center hover:bg-gray-50"
            >
              Try the Transcription Service
            </Link>
          </div>
        </section>

      </article>
    </main>
  )
}
