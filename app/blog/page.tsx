import Link from "next/link";

export const metadata = {
  title: "Blog | AI Media",
  description: "Strategic articles about transcription, content systems, and monetization",
};

export default function BlogPage() {
  const articles = [
    {
      title: "Why Content Repurposing Fails (And the System That Fixes It)",
      href: "/articles/why-content-repurposing-fails",
      excerpt:
        "Most creators are busy repurposing content — yet nothing converts. Here's why.",
    },
    {
      title: "Human vs AI Transcription: Accuracy, Cost & Use Cases",
      href: "/blog/human-vs-ai-transcription",
      excerpt:
        "A practical breakdown to help you choose the right transcription method.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">Strategic Articles</h1>
      <p className="text-gray-600 mb-12">
        Insights designed to educate — and convert.
      </p>

      <div className="grid gap-8">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="block border rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
