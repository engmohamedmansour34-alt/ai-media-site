import Link from 'next/link'
import Image from 'next/image'

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
    },
  ]

  return (
    <section className="py-28 max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Real Transcription Samples
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore real audio and video examples with{' '}
          <span className="font-medium text-black">
            100% human-made transcription
          </span>
          .
        </p>

        <p className="text-sm text-gray-500 mt-4">
          No AI-only tools · Cleaned · Proofread · Ready to publish
        </p>
      </div>

      {/* Social Proof */}
      <div className="flex justify-center gap-6 text-sm text-gray-600 mb-24 flex-wrap">
        <span>✔ Arabic & English</span>
        <span>✔ Human-reviewed</span>
        <span>✔ Used by content creators & educators</span>
      </div>

      {/* Samples Grid */}
      <div className="space-y-28">
        {samples.map((sample, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 gap-14 items-center"
          >
            {/* Thumbnail */}
            <Link
              href={sample.href}
              className="group block max-w-lg"
            >
              <div className="relative overflow-hidden rounded-2xl border bg-black shadow-sm transition group-hover:shadow-lg">
                <Image
                  src={sample.thumbnail}
                  alt={sample.title}
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {sample.title}
              </h2>

              <p className="text-gray-600 mb-4 text-lg">
                {sample.description}
              </p>

              {/* Before / After Hint */}
              <p className="text-xs text-gray-500 mb-2">
                Preview from the cleaned transcript (after manual review)
              </p>

              {/* Transcript Preview */}
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
                  href="/upload"
                  className="text-sm text-gray-600 underline hover:text-black"
                >
                  Get similar quality
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

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
