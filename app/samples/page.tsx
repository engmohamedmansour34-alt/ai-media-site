import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Transcription Samples | Arabic & English (Before & After)',
  description:
    'Explore real transcription samples in Arabic and English. See before and after human-edited transcripts with subtitles examples.',
  keywords: [
    'transcription samples',
    'arabic transcription example',
    'english transcription sample',
    'before after transcription',
    'human transcription',
  ],
  alternates: {
    canonical: 'https://ai-media-site.vercel.app/samples',
  },
}

export default function SamplesPage() {
  const samples = [
    {
      title: 'كيف تجبر نفسك على الإنجاز',
      description:
        'فيديو عربي تعليمي مع تفريغ يدوي وتحسين لغوي احترافي (قبل / بعد).',
      thumbnail: '/samples/arabic-productivity/thumbnail.jpg',
      transcript:
        'أسوأ شعور ممكن يمر عليك هو إنك تكون عارف إيش الأشياء اللي لو سويتها بتكون حياتك أفضل، لكن في نفس الوقت تحس إنك مربوط وما تقدر تسويها...',
      href: '/samples/arabic-productivity',
      lang: 'Arabic',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      alt: 'Arabic transcription sample before and after',
    },
    {
      title: 'What Are Creative Commons Licenses',
      description:
        'Educational English video with professional manual transcription and subtitles.',
      thumbnail: '/samples/english-education/thumbnail.jpg',
      transcript:
        'This video introduces Creative Commons licenses, which make copyright easier to understand...',
      href: '/samples/english-education',
      lang: 'English',
      badgeColor: 'bg-blue-100 text-blue-700',
      alt: 'English transcription sample with subtitles',
    },
  ]

  return (
    <section className="py-28 max-w-7xl mx-auto px-4">
      {/* Header */}
      <header className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Real Transcription Samples
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore real audio and video transcription samples in{' '}
          <strong>Arabic and English</strong> with{' '}
          <strong>100% human-made transcription</strong>.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          No AI-only tools · Cleaned · Proofread · Ready to publish
        </p>
      </header>

      {/* SEO Intro Content */}
      <section className="max-w-4xl mx-auto mb-32 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-semibold mb-4">
          Professional Human Transcription Samples
        </h2>
        <p className="mb-6">
          This page features real-world transcription samples created by
          professional human transcribers. Each example demonstrates the
          difference between raw automated output and carefully reviewed,
          publication-ready transcripts.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Arabic & English Transcription Examples
        </h2>
        <p>
          Our Arabic and English transcription samples include clean formatting,
          accurate punctuation, and language refinement while preserving the
          original meaning. These samples are ideal for subtitles, blogs,
          research, and educational content.
        </p>
      </section>

      {/* Social Proof */}
      <div className="flex justify-center gap-6 text-sm text-gray-600 mb-24 flex-wrap">
        <span>✔ Arabic & English Transcription</span>
        <span>✔ Human-reviewed transcripts</span>
        <span>✔ Trusted by creators & educators</span>
      </div>

      {/* Samples Grid */}
      <div className="space-y-28">
        {samples.map((sample, index) => (
          <article
            key={index}
            className="grid lg:grid-cols-2 gap-14 items-center"
          >
            {/* Thumbnail */}
            <Link
              href={sample.href}
              className="group block max-w-lg"
              aria-label={`View ${sample.title} transcription sample`}
            >
              <div className="relative overflow-hidden rounded-2xl border bg-black shadow-sm transition group-hover:shadow-lg">
                <Image
                  src={sample.thumbnail}
                  alt={sample.alt}
                  width={640}
                  height={256}
                  priority={index === 0}
                  className="w-full h-64 object-cover group-hover:scale-[1.03] transition"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
                    View Full Sample →
                  </span>
                </div>
              </div>

              <span
                className={`inline-block mt-4 text-xs font-semibold px-4 py-1 rounded-full ${sample.badgeColor}`}
              >
                {sample.lang} • Human Transcription
              </span>
            </Link>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {sample.title}
              </h3>

              <p className="text-gray-600 mb-4 text-lg">
                {sample.description}
              </p>

              <p className="text-xs text-gray-500 mb-2">
                Preview from the cleaned transcript (after manual review)
              </p>

              <div className="relative bg-gray-50 border rounded-xl p-6 mb-6">
                <p className="text-gray-800 leading-relaxed line-clamp-5">
                  {sample.transcript}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent rounded-b-xl" />
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href={sample.href}
                  className="inline-flex items-center gap-2 font-medium text-black hover:underline"
                >
                  View full transcription →
                </Link>

                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 underline hover:text-black"
                >
                  See pricing →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-32 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">
              Are these real human-made transcription samples?
            </h3>
            <p className="text-sm">
              Yes. Every transcription sample shown here is created manually by
              a human transcriber and professionally reviewed for accuracy and
              clarity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              Do you provide Arabic transcription services?
            </h3>
            <p className="text-sm">
              Absolutely. We specialize in Arabic transcription including
              dialects, with optional proofreading and formatting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">
              What formats do you deliver?
            </h3>
            <p className="text-sm">
              We provide clean text transcripts as well as subtitle formats such
              as SRT and VTT upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Transcription Samples – Arabic & English',
            description:
              'Real-world transcription samples in Arabic and English with before and after human editing.',
            url: 'https://ai-media-site.vercel.app/samples',
          }),
        }}
      />

      {/* Final CTA */}
      <div className="mt-32 text-center bg-gray-50 border rounded-2xl py-20 px-6">
        <h3 className="text-3xl font-bold mb-4">
          Ready to get your transcription?
        </h3>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Upload your audio or video file and receive a clean, accurate,
          human-reviewed transcript — fast and confidential.
        </p>

        <Link
          href="/upload"
          className="inline-block bg-black text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Upload Your File
        </Link>
      </div>
    </section>
  )
}
