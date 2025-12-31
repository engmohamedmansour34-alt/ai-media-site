import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Transcription for SEO & Content – Human Reviewed",
  description:
    "Turn every podcast episode into clean, SEO-ready content. Human-reviewed podcast transcription for creators who want to publish without fixing AI mistakes.",
  alternates: {
    canonical: "https://yourdomain.com/services/podcast-transcription",
  },
};

export default function PodcastTranscriptionPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      {/* ================= HERO ================= */}
      <section className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Turn Every Podcast Episode Into SEO Content <br />
          <span className="text-gray-600">
            — Without Editing Transcripts
          </span>
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          We help podcasters transform episodes into clean, publish-ready text
          they can use for blogs, show notes, and SEO. Fully human-reviewed and
          delivered in 48 hours.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/upload"
            className="px-8 py-4 bg-black text-white rounded-lg font-medium"
          >
            🎧 Transcribe My Episode
          </Link>

          <Link
            href="/samples"
            className="px-8 py-4 border rounded-lg font-medium"
          >
            See Real Podcast Samples
          </Link>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="bg-gray-50 p-4 rounded-xl">✔ 100% Human Reviewed</div>
        <div className="bg-gray-50 p-4 rounded-xl">✔ Podcast-Focused</div>
        <div className="bg-gray-50 p-4 rounded-xl">✔ Arabic & English</div>
        <div className="bg-gray-50 p-4 rounded-xl">✔ 48h Delivery</div>
      </section>

      {/* ================= PAIN ================= */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">
          Why Most Podcasters Never Use Their Transcripts
        </h2>

        <ul className="space-y-3 text-gray-700 max-w-3xl">
          <li>• AI transcripts require hours of manual fixing</li>
          <li>• Names, brands, and terms are often wrong</li>
          <li>• Formatting is unreadable for blogs or SEO</li>
          <li>• Episodes never get repurposed into content</li>
        </ul>

        <p className="mt-6 text-gray-700">
          Result? Great podcast episodes — wasted content potential.
        </p>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">
          A Better Way to Transcribe Podcast Episodes
        </h2>

        <p className="text-gray-700 max-w-3xl mb-6">
          We combine smart tooling with full human review to deliver transcripts
          that are actually usable — clean, structured, and ready to publish.
        </p>

        <ul className="space-y-3 text-gray-700 max-w-3xl">
          <li>• Clean paragraphs (not raw AI output)</li>
          <li>• Speaker labels & natural flow</li>
          <li>• Optional timestamps</li>
          <li>• SEO-ready formatting for blogs & show notes</li>
        </ul>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">
          How Podcasters Use Our Transcripts
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li className="bg-gray-50 p-5 rounded-xl">
            Blog posts from podcast episodes
          </li>
          <li className="bg-gray-50 p-5 rounded-xl">
            SEO-friendly show notes
          </li>
          <li className="bg-gray-50 p-5 rounded-xl">
            Quotes & highlights for social media
          </li>
          <li className="bg-gray-50 p-5 rounded-xl">
            Searchable podcast archives
          </li>
        </ul>
      </section>

      {/* ================= PRICING ANCHOR ================= */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-700 max-w-3xl mb-4">
          Podcast transcription starts from{" "}
          <strong>$1.25 per audio minute</strong>.
        </p>

        <p className="text-gray-600">
          Most podcasters pay between <strong>$75–$120 per episode</strong>,
          depending on length and options.
        </p>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6">
          How It Works
        </h2>

        <ol className="space-y-3 text-gray-700 max-w-3xl">
          <li>1️⃣ Upload your podcast episode</li>
          <li>2️⃣ We transcribe and review it manually</li>
          <li>3️⃣ Receive clean, publish-ready text in 24–48 hours</li>
        </ol>
      </section>

      {/* ================= RISK REMOVAL ================= */}
      <section className="mb-24 bg-gray-50 rounded-2xl p-8">
        <h2 className="text-xl font-semibold mb-3">
          Risk-Free Quality Guarantee
        </h2>

        <p className="text-gray-700 max-w-3xl">
          If you’re not happy with the transcript, we revise it for free.
          No subscriptions. No long-term commitment.
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Turn Your Podcast Into Content?
        </h2>

        <p className="text-gray-300 mb-8">
          Stop fixing AI transcripts. Get clean, human-reviewed text you can
          publish immediately.
        </p>

        <Link
          href="/upload"
          className="px-10 py-4 bg-white text-black rounded-lg font-medium"
        >
          Upload My Podcast Episode
        </Link>
      </section>

      {/* ================= FAQ SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is AI transcription enough for podcast publishing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "AI transcription is useful for drafts, but publishing-quality podcast content requires human review for accuracy, structure, and readability.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support Arabic podcasts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We support Arabic, English, and mixed-language podcasts with full human review.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
