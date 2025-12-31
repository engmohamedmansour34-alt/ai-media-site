'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientPage() {
  const [tab, setTab] = useState<'clean' | 'raw'>('clean')

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-20"
      lang="ar"
      dir="rtl"
      translate="no"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">
        مثال تفريغ عربي احترافي (قبل / بعد)
      </h1>

      <p className="text-gray-600 mb-6">
        مثال حقيقي لتفريغ فيديو عربي يدوي مع
        <span className="font-medium text-black">
          {' '}تحسين لغوي واضح بدون تغيير المعنى
        </span>.
      </p>

      {/* Value Bar */}
      <div className="flex gap-4 flex-wrap text-sm text-gray-600 mb-12">
        <span>✔ تفريغ يدوي 100%</span>
        <span>✔ تحسين لغوي وإملائي</span>
        <span>✔ جاهز للنشر أو الترجمة</span>
        <span>✔ SRT / VTT متوفر</span>
      </div>

      {/* Video */}
      <div className="mb-16">
        <video
          controls
          preload="metadata"
          className="w-full rounded-xl border bg-black"
        >
          <source
            src="/samples/arabic-productivity/how-to-force-yourself-to-achieve.mp4"
            type="video/mp4"
          />

          <track
            src="/samples/arabic-productivity/subtitles.vtt"
            kind="subtitles"
            srcLang="ar"
            label="Arabic"
            default
          />
        </video>

        <p className="text-xs text-gray-500 mt-2 text-center">
          فيديو حقيقي مع ترجمة عربية متزامنة (VTT)
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-20">
        <div className="flex gap-8 border-b mb-6 text-sm">
          <button
            onClick={() => setTab('clean')}
            className={`pb-3 ${
              tab === 'clean'
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            النص المُحسَّن (بعد)
          </button>

          <button
            onClick={() => setTab('raw')}
            className={`pb-3 ${
              tab === 'raw'
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            النص الخام (قبل)
          </button>
        </div>

        {tab === 'clean' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <pre className="text-sm whitespace-pre-wrap leading-loose text-right">
              النص المُحسَّن هنا...
            </pre>
          </div>
        )}

        {tab === 'raw' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <pre className="text-sm whitespace-pre-wrap leading-loose text-right text-gray-600">
              النص الخام هنا...
            </pre>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center bg-black text-white p-12 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          تحب تفريغ بنفس الجودة؟
        </h3>

        <div className="flex justify-center gap-6">
          <Link
            href="/upload"
            className="bg-white text-black px-8 py-4 rounded-lg font-medium"
          >
            ارفع ملفك الآن
          </Link>

          <Link
            href="/pricing"
            className="underline text-gray-300"
          >
            الأسعار
          </Link>
        </div>
      </div>
    </section>
  )
}
