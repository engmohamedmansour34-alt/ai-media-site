import Hero from './components/Hero'
import Trust from './components/Trust'
import WhyUs from './components/WhyUs'
import FeaturedTools from './components/FeaturedTools'
import FeaturedArticles from './components/FeaturedArticles'
import Samples from './components/Samples'
import HowItWorks from './components/HowItWorks'
import BottomCTA from './components/BottomCTA'
import HomeFAQ from './components/HomeFAQ'

export default function Home() {
  return (
    <>
      {/* Hero: Core Value Proposition */}
      <Hero />

      {/* Trust signals: credibility & reassurance */}
      <Trust />

      {/* Why human transcription / authority positioning */}
      <WhyUs />

      {/* Internal linking to money & SEO pages */}
      <FeaturedTools />
      <FeaturedArticles />

      {/* Proof of quality */}
      <Samples />

      {/* Conversion explanation */}
      <HowItWorks />

      {/* FAQ for SEO + trust */}
      <HomeFAQ />

      {/* Final conversion push */}
      <BottomCTA />

      {/* FAQ Schema for SEO */}
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
                    "Human transcription is best for publishing, subtitles, legal content, academic work, and client delivery."
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
