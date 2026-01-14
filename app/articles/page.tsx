import Link from "next/link";

export const metadata = {
  title: "Articles | AI Media",
  description: "Strategic insights about transcription, content systems, and monetization.",
};

export default function ArticlesPage() {
  const articles = [
    {
      title: "Why Content Repurposing Fails (And the System That Fixes It)",
      href: "/articles/why-content-repurposing-fails",
      description:
        "Why most repurposed content fails to convert — and how systems fix it.",
    },
    {
      title: "Human vs AI Transcription: Accuracy, Cost & Use Cases",
      href: "/blog/human-vs-ai-transcription",
      description:
        "A practical comparison to help you choose the right transcription method.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Deep insights designed to educate, build authority, and drive conversions.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
