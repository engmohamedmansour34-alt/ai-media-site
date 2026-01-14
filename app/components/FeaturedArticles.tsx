import Link from 'next/link'

export default function FeaturedArticles() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">
            Expert Guides on Transcription
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Strategic, experience-backed articles on transcription — covering
            accuracy, tools, workflows, and real publishing decisions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <article className="bg-white border rounded-xl p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Human vs AI Transcription: Accuracy, Cost & Use Cases
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              A practical breakdown of when AI transcription is sufficient —
              and when human review is still required for professional use.
            </p>

            <Link
              href="/blog/human-vs-ai-transcription"
              className="text-sm font-medium underline"
            >
              Read the guide →
            </Link>
          </article>

          <article className="bg-white border rounded-xl p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">
              Best Transcription Tools for Creators (2025)
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              An objective comparison of the most popular AI transcription tools
              used by YouTubers, podcasters, and content teams.
            </p>

            <Link
              href="/blog/best-transcription-tools-for-creators"
              className="text-sm font-medium underline"
            >
              Read the comparison →
            </Link>
          </article>
        </div>

        {/* Browse All */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-block text-sm font-medium underline"
          >
            Browse all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
