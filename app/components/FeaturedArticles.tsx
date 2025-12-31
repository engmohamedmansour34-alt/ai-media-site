import Link from 'next/link'

export default function FeaturedArticles() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Expert Guides on Transcription
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          In-depth articles comparing AI and human transcription — written for
          real-world publishing and business use.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <article>
            <h3 className="font-semibold mb-2">
              Human vs AI Transcription: Accuracy, Cost & Use Cases
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              A complete breakdown of when AI works — and when human review is
              still essential.
            </p>
            <Link
              href="/blog/human-vs-ai-transcription"
              className="underline text-sm"
            >
              Read the guide →
            </Link>
          </article>

          <article>
            <h3 className="font-semibold mb-2">
              Best Transcription Tools for Creators (2025)
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              A neutral comparison of popular AI transcription tools used by
              YouTubers and podcasters.
            </p>
            <Link
              href="/blog/best-transcription-tools-for-creators"
              className="underline text-sm"
            >
              Read the comparison →
            </Link>
          </article>
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="underline text-sm">
            Browse all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
