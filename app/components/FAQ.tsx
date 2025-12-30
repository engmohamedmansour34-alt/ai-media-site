export default function FAQ() {
  const faqs = [
    {
      q: 'How long does transcription take?',
      a: 'Most files are delivered within 24–48 hours depending on length.',
    },
    {
      q: 'Which formats do you support?',
      a: 'MP3, WAV, MP4, and MOV formats are supported.',
    },
    {
      q: 'Is my content confidential?',
      a: 'Yes. All files are handled securely and never shared.',
    },
    {
      q: 'Do you offer timestamps or speaker labels?',
      a: 'Yes, you can request them in the notes field.',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg p-6"
            >
              <h3 className="font-semibold mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
