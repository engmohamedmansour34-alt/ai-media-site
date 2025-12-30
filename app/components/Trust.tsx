export default function Trust() {
  const items = [
    'Podcasters & YouTubers',
    'Journalists & Researchers',
    'Business Meetings',
    'Interviews & Webinars',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Trusted For
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg py-6 text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
