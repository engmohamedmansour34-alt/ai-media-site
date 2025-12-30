'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ArabicProductivitySample() {
  const [tab, setTab] = useState<'clean' | 'raw'>('clean')

  return (
    <section
      className="max-w-5xl mx-auto px-4 py-20"
      lang="ar"
      dir="rtl"
      translate="no"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        كيف تجبر نفسك على الإنجاز
      </h1>

      <p className="text-gray-600 mb-10">
        مثال حقيقي لتفريغ عربي يدوي احترافي مع تحسين لغوي واضح بدون تغيير المعنى.
      </p>

      {/* Video */}
      <div className="mb-14" translate="no">
        <video
          controls
          preload="metadata"
          className="w-full rounded-lg border bg-black"
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

          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>

      {/* Tabs */}
      <div className="mb-14">
        <div className="flex gap-6 border-b mb-6">
          <button
            onClick={() => setTab('clean')}
            className={`pb-2 ${
              tab === 'clean'
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            النص المحسّن
          </button>

          <button
            onClick={() => setTab('raw')}
            className={`pb-2 ${
              tab === 'raw'
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            النص الخام (قبل)
          </button>
        </div>

        {/* Clean Transcript */}
        {tab === 'clean' && (
          <pre
            className="bg-gray-50 p-6 rounded text-sm whitespace-pre-wrap leading-relaxed text-right"
            translate="no"
          >
{`أسوأ شعور ممكن يمر عليك هو إنك تكون عارف إيش الأشياء اللي لو سويتها بتكون حياتك أفضل،
لكن في نفس الوقت تحس إنك مربوط وما تقدر تسويها.

هل أنت كسول؟
ولا الموضوع أعمق من كذا؟

لو سألتك الآن: إيش الأشياء اللي لو سويتها بتتحسن حياتك؟
أكيد جا في بالك أكثر من شيء.
لكن فيه شيء يمنعك من الإنجاز.

التسويف والتأجيل موجود عند أغلب الناس،
والموضوع كله يبدأ من الدماغ.

عقلك يحاول يتجنب الضغط والمشاعر السلبية،
فيأجّل البداية قدر المستطاع.

الحل؟
إما تشتغل، أو ما تسوي شيء.
بدون جوال، بدون مشتتات.

بعد فترة، الإنجاز بيصير الخيار الأفضل.`}
          </pre>
        )}

        {/* Raw Transcript */}
        {tab === 'raw' && (
          <pre
            className="bg-gray-50 p-6 rounded text-sm whitespace-pre-wrap leading-relaxed text-right text-gray-700"
            translate="no"
          >
{`أسوأ شعور ممكن يعد عليك هو أنك تكون عارف إشه الأشياء اللي لو سويتها
بتكون حالاتك أفضل
لكن في نفس الوقت تحسن أنك مربوط ومو قادر تسويها
هل أنت كسول واللموضوع أعمط من كذلك
الآن لو أسألك إشه الأشياء اللي لو سويتها رح تكون حالاتك أفضل...`}
          </pre>
        )}
      </div>

      {/* CTA */}
      <div className="text-center bg-black text-white p-10 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">
          تحب تفريغ بنفس الجودة؟
        </h3>

        <Link
          href="/upload"
          className="inline-block bg-white text-black px-8 py-4 rounded text-lg font-medium hover:bg-gray-200 transition"
        >
          ارفع ملفك الآن
        </Link>
      </div>
    </section>
  )
}
