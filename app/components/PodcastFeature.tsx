import Link from "next/link";

export default function PodcastFeature() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="bg-gray-50 rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-sm font-semibold text-gray-500">
            For Podcasters
          </span>

          <h2 className="text-3xl font-bold mt-3 mb-5 leading-tight">
            Turn Podcast Episodes Into SEO Content <br />
            Without Editing Transcripts
          </h2>

          <p className="text-gray-700 mb-6">
            We help podcasters transform episodes into clean, publish-ready
            text they can reuse for blogs, show notes, and search traffic —
            fully human-reviewed and delivered in 48 hours.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/services/podcast-transcription"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium"
            >
              Podcast Transcription →
            </Link>

            <Link
              href="/samples"
              className="px-6 py-3 border rounded-lg font-medium"
            >
              View Podcast Samples
            </Link>
          </div>
        </div>

        <ul className="space-y-4 text-gray-700 text-sm">
          <li>✔ Human-reviewed transcripts</li>
          <li>✔ SEO-ready formatting</li>
          <li>✔ Arabic & English podcasts</li>
          <li>✔ 48h delivery</li>
          <li>✔ No subscriptions</li>
        </ul>
      </div>
    </section>
  );
}
