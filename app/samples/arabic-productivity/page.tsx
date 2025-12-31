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
      <h1 className="text-4xl font-bold mb-3">
        كيف تجبر نفسك على الإنجاز
      </h1>

      <p className="text-gray-600 mb-6">
        مثال حقيقي لتفريغ عربي يدوي احترافي مع تحسين لغوي واضح
        <span className="font-medium text-black"> بدون تغيير المعنى</span>.
      </p>

      {/* Value Bar */}
      <div className="flex gap-4 flex-wrap text-sm text-gray-600 mb-12">
        <span>✔ تفريغ يدوي 100%</span>
        <span>✔ تحسين لغوي وإملائي</span>
        <span>✔ جاهز للنشر أو الترجمة</span>
      </div>

      {/* Video */}
      <div className="mb-16" translate="no">
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

          متصفحك لا يدعم تشغيل الفيديو.
        </video>

        <p className="text-xs text-gray-500 mt-2 text-center">
          الفيديو مع ترجمة عربية متزامنة (VTT)
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-20">
        <div className="flex gap-8 border-b mb-6">
          <button
            onClick={() => setTab('clean')}
            className={`pb-3 text-sm transition ${
              tab === 'clean'
                ? 'border-b-2 border-black font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            النص المُحسَّن (بعد)
          </button>

          <button
            onClick={() => setTab('raw')}
            className={`pb-3 text-sm transition ${
              tab === 'raw'
                ? 'border-b-2 border-black font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            النص الخام (قبل)
          </button>
        </div>

        {/* Clean Transcript */}
        {tab === 'clean' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <p className="text-xs text-gray-500 mb-4">
              ✔ تمت المراجعة يدويًا + تحسين الأسلوب والإملاء
            </p>

            <pre
              className="text-sm whitespace-pre-wrap leading-loose text-right text-gray-900"
              translate="no"
            >
{`أسوأ شعور ممكن يمر عليك هو إنك تكون عارف إيش الأشياء
اللي لو سويتها بتكون حياتك أفضل،
لكن في نفس الوقت تحس إنك مربوط وما تقدر تسويها.

هل أنت كسول؟
ولا الموضوع أعمق من كذا؟

لو سألتك الآن:
إيش الأشياء اللي لو سويتها بتتحسن حياتك؟
أكيد جا في بالك أكثر من شيء.

لكن فيه شيء يمنعك من الإنجاز.
التسويف والتأجيل موجود عند أغلب الناس،
والموضوع كله يبدأ من الدماغ.

عقلك يحاول يتجنب الضغط والمشاعر السلبية،
فيأجّل البداية قدر المستطاع.

الحل؟
إما تشتغل، أو ما تسوي شيء.
بدون جوال، بدون مشتتات.

بعد فترة،
الإنجاز بيصير الخيار الأفضل.`}
            </pre>
          </div>
        )}

        {/* Raw Transcript */}
        {tab === 'raw' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <p className="text-xs text-gray-500 mb-4">
              ✖ نص مفرّغ بدون مراجعة أو تحسين
            </p>

            <pre
              className="text-sm whitespace-pre-wrap leading-loose text-right text-gray-700"
              translate="no"
            >
{`أسوأ شعور ممكن يعد عليك هو أنك تكون عارف إشه الأشياء
اللي لو سويتها بتكون حالاتك أفضل
لكن في نفس الوقت تحسن أنك مربوط ومو قادر تسويها
هل أنت كسول واللموضوع أعمط من كذلك
الآن لو أسألك إشه الأشياء اللي لو سويتها رح تكون حالاتك أفضل...`}
            </pre>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center bg-black text-white p-12 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          تحب تفريغ بنفس الجودة؟
        </h3>

        <p className="text-gray-300 mb-8">
          ارفع ملفك واحصل على تفريغ يدوي نظيف،
          قابل للنشر أو الترجمة.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/upload"
            className="bg-white text-black px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
          >
            ارفع ملفك الآن
          </Link>

          <Link
            href="/samples"
            className="underline text-sm text-gray-300 hover:text-white"
          >
            مشاهدة أمثلة أخرى
          </Link>
        </div>
      </div>
    </section>
  )
}
