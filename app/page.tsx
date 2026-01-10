import Hero from './components/Hero'
import Trust from './components/Trust'
import PodcastFeature from './components/PodcastFeature'
import WhyUs from './components/WhyUs'
import FeaturedTools from './components/FeaturedTools'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedProducts from './components/FeaturedProducts'
import Samples from './components/Samples'
import HowItWorks from './components/HowItWorks'
import HomeFAQ from './components/HomeFAQ'
import BottomCTA from './components/BottomCTA'

export default function Home() {
  return (
    <>
      {/* 1️⃣ Hero: Core Value Proposition */}
      <Hero />

      {/* 2️⃣ Trust signals: credibility & reassurance */}
      <Trust />

      {/* 3️⃣ High-intent service: Podcast Transcription */}
      <PodcastFeature />

      {/* 4️⃣ Authority positioning: why human transcription */}
      <WhyUs />

      {/* 5️⃣ Internal linking to money & SEO pages */}
      <FeaturedTools />
      <FeaturedArticles />

      {/* 🛒 Digital Products (Books / Systems) */}
      <FeaturedProducts />

      {/* 6️⃣ Proof of quality */}
      <Samples />

      {/* 7️⃣ Conversion explanation */}
      <HowItWorks />

      {/* 8️⃣ FAQ for objections + SEO */}
      <HomeFAQ />

      {/* 9️⃣ Final conversion push */}
      <BottomCTA />

      {/* 🔍 FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is your transcription done by AI or humans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "All transcriptions are completed by real human professionals and manually reviewed for accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "What languages do you support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "We provide professional transcription services in Arabic and English, including different accents."
                }
              },
              {
                "@type": "Question",
                "name": "When should I choose human transcription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Human transcription is ideal for publishing, subtitles, podcasts, legal content, academic work, and client delivery."
                }
              },
              {
                "@type": "Question",
                "name": "How long does transcription take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Most transcription orders are delivered within 24–48 hours depending on file length."
                }
              }
            ]
          })
        }}
      />
    </>
  )
}
