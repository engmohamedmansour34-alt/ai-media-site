export default function WhyUs() {
  const items = [
    {
      title: 'AI-Powered with Human Review',
      text: 'We use advanced AI transcription combined with careful human review for clean and accurate results.',
    },
    {
      title: 'Arabic & English Expertise',
      text: 'Accurate transcription for both Arabic and English audio and video content.',
    },
    {
      title: 'High Accuracy Output',
      text: 'Well-structured, readable transcripts suitable for podcasts, interviews, and professional use.',
    },
    {
      title: 'Private & Secure',
      text: 'Your files and links are handled confidentially and never shared with third parties.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose This Service?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
