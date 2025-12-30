import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center bg-gray-50">
      <div className="max-w-lg bg-white border rounded-xl p-10 shadow-sm">
        {/* Icon */}
        <div className="text-5xl mb-6">✅</div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          Request Received Successfully
        </h1>

        {/* English Message */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          Thank you for submitting your transcription request.
          <br />
          We’ve received your file and details.
          <br />
          Our team will review everything shortly.
        </p>

        {/* Arabic Message */}
        <p className="text-gray-600 mb-8 leading-relaxed text-right">
          شكرًا لإرسال طلب التفريغ.
          <br />
          ✅ تم استلام ملفك وبياناتك بنجاح.
          <br />
          سيقوم فريقنا بمراجعة الطلب والتواصل معك عبر البريد الإلكتروني خلال
          <strong> 24–48 ساعة</strong>.
        </p>

        {/* What happens next */}
        <div className="bg-gray-50 border rounded-lg p-4 text-sm text-gray-600 mb-8 text-left">
          <p className="font-medium mb-2">What happens next?</p>
          <ul className="space-y-1">
            <li>• We review your file and requirements</li>
            <li>• We confirm pricing & delivery time via email</li>
            <li>• Work starts after your confirmation</li>
          </ul>
        </div>

        {/* Upsell */}
        <div className="bg-white border border-dashed rounded-lg p-4 text-sm text-gray-600 mb-8 text-left">
          <p className="font-medium mb-2">
            Optional services you can request by email:
          </p>
          <ul className="space-y-1">
            <li>• Translation (Arabic ↔ English)</li>
            <li>• Subtitles (SRT / VTT)</li>
            <li>• Timestamps or speaker labels</li>
            <li>• Summary or article from the transcript</li>
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/upload"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Submit another file
        </Link>

        {/* Secondary CTA */}
        <div className="mt-4">
          <Link
            href="/samples"
            className="text-sm underline text-gray-600"
          >
            View transcription samples
          </Link>
        </div>

        {/* Trust note */}
        <p className="text-xs text-gray-400 mt-6">
          🔒 Your files are handled confidentially and never shared.
        </p>
      </div>
    </main>
  )
}
