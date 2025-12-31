import Link from 'next/link'

export const metadata = {
  title: 'Best Transcription Tools (AI & Human)',
  description:
    'Compare the best AI transcription tools and get professional human transcription for Arabic and English audio and video.',
}

export default function TranscriptionToolsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Hero */}
      <header className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Best Transcription Tools (AI & Human)
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Convert audio and video to accurate text. Compare AI transcription
          tools and get professional human transcription when accuracy matters.
        </p>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <Link
            href="#tools"
            className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Explore AI Tools
          </Link>

          <Link
            href="/upload"
            className="border px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition"
          >
            Get Human Transcription
          </Link>
        </div>
      </header>

      {/* What is Transcription */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">
          What is Audio & Video Transcription?
        </h2>

        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Transcription is the process of converting spoken audio or video
          content into written text. It helps creators, educators, journalists,
          and businesses make content searchable, accessible, and reusable.
        </p>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-24">
        <h2 className="text-3xl font-bold mb-10">
          Best Transcription Tools
        </h2>

        <div className="space-y-10">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Whisper (Open-source)</h3>
            <p className="text-gray-600 mb-2">
              Free AI transcription supporting multiple languages.
            </p>
            <p className="text-sm text-gray-500">
              Best for developers and technical users.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Descript</h3>
            <p className="text-gray-600 mb-2">
              All-in-one tool for transcription and content editing.
            </p>
            <p className="text-sm text-gray-500">
              Best for content creators and podcasters.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Otter.ai</h3>
            <p className="text-gray-600 mb-2">
              Real-time transcription for meetings and interviews.
            </p>
            <p className="text-sm text-gray-500">
              Best for meetings and notes.
            </p>
          </div>
        </div>
      </section>

      {/* AI vs Human */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-6">
          AI vs Human Transcription
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 border">Feature</th>
                <th className="p-4 border">AI</th>
                <th className="p-4 border">Human</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border">Accuracy</td>
                <td className="p-4 border">80–90%</td>
                <td className="p-4 border">99%+</td>
              </tr>
              <tr>
                <td className="p-4 border">Arabic Dialects</td>
                <td className="p-4 border">Weak</td>
                <td className="p-4 border">Excellent</td>
              </tr>
              <tr>
                <td className="p-4 border">Publishing Ready</td>
                <td className="p-4 border">Needs cleanup</td>
                <td className="p-4 border">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gray-50 border rounded-2xl py-20">
        <h3 className="text-3xl font-bold mb-4">
          Need Accurate Transcription?
        </h3>

        <p className="text-gray-600 mb-8">
          Get professional human transcription for Arabic and English audio and
          video.
        </p>

        <Link
          href="/upload"
          className="bg-black text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Upload Your File
        </Link>
      </section>
    </section>
  )
}
