export default function HowItWorks() {
  const steps = [
    {
      title: 'Send Your Media Link',
      text: 'Upload your audio or video file or share a Google Drive link.',
    },
    {
      title: 'AI Transcription & Review',
      text: 'We transcribe your content using AI and carefully review it for clarity and accuracy.',
    },
    {
      title: 'Receive Your Transcript',
      text: 'You receive a clean, well-formatted transcript via email.',
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
