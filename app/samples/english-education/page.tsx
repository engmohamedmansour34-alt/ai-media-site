'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EnglishEducationSample() {
  const [tab, setTab] = useState<'text' | 'srt' | 'vtt'>('text')

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">
        What Are Creative Commons Licenses
      </h1>

      <p className="text-gray-600 mb-6">
        Real educational video with
        <span className="font-medium text-black">
          {' '}100% human-made English transcription
        </span>{' '}
        and professional subtitles.
      </p>

      {/* Value Bar */}
      <div className="flex gap-4 flex-wrap text-sm text-gray-600 mb-12">
        <span>✔ Manual transcription</span>
        <span>✔ Proofread & formatted</span>
        <span>✔ Text, SRT & VTT included</span>
      </div>

      {/* Video */}
      <div className="mb-16">
        <video
          controls
          preload="metadata"
          className="w-full rounded-xl border bg-black"
        >
          <source
            src="/samples/english-education/what-are-creative-commons-licenses.mp4"
            type="video/mp4"
          />

          <track
            src="/samples/english-education/subtitles.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
            default
          />

          Your browser does not support the video tag.
        </video>

        <p className="text-xs text-gray-500 mt-2 text-center">
          Includes synchronized English subtitles (VTT)
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-20">
        <div className="flex gap-8 border-b mb-6 text-sm">
          <button
            onClick={() => setTab('text')}
            className={`pb-3 transition ${
              tab === 'text'
                ? 'border-b-2 border-black font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            Clean Text
          </button>

          <button
            onClick={() => setTab('srt')}
            className={`pb-3 transition ${
              tab === 'srt'
                ? 'border-b-2 border-black font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            SRT (Subtitles)
          </button>

          <button
            onClick={() => setTab('vtt')}
            className={`pb-3 transition ${
              tab === 'vtt'
                ? 'border-b-2 border-black font-semibold text-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            VTT (Web)
          </button>
        </div>

        {/* Text */}
        {tab === 'text' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <p className="text-xs text-gray-500 mb-4">
              ✔ Clean, proofread text ready for articles or translation
            </p>

            <pre className="text-sm whitespace-pre-wrap leading-loose text-gray-900">
{`This video will introduce you to Creative Commons licenses,
which make copyright easier to understand.

Let’s say you create something.
This thing could be creative, like a picture of your cat,
or scholarly, like an essay about cats.

Because you are the creator,
copyright law allows you to decide
how others can use your work.

Creative Commons exists to make these permissions clear,
simple, and legally safe for everyone.`}
            </pre>
          </div>
        )}

        {/* SRT */}
        {tab === 'srt' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <p className="text-xs text-gray-500 mb-4">
              ✔ Standard subtitle format for YouTube & video editors
            </p>

            <pre className="text-sm whitespace-pre-wrap leading-loose text-gray-800">
{`1
00:00:00,000 --> 00:00:06,000
This video will introduce you to Creative Commons licenses.

2
00:00:07,000 --> 00:00:09,000
Let’s say you create something.`}
            </pre>
          </div>
        )}

        {/* VTT */}
        {tab === 'vtt' && (
          <div className="bg-gray-50 border rounded-xl p-8">
            <p className="text-xs text-gray-500 mb-4">
              ✔ Web-ready subtitle format (HTML5 / players)
            </p>

            <pre className="text-sm whitespace-pre-wrap leading-loose text-gray-800">
{`WEBVTT

00:00:00.000 --> 00:00:06.000
This video will introduce you to Creative Commons licenses.

00:00:07.000 --> 00:00:09.000
Let’s say you create something.`}
            </pre>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center bg-black text-white p-12 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          Want a transcript like this?
        </h3>

        <p className="text-gray-300 mb-8">
          Upload your audio or video and get
          a clean, accurate, human-made transcript.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/upload"
            className="bg-white text-black px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
          >
            Upload Your File
          </Link>

          <Link
            href="/samples"
            className="underline text-sm text-gray-300 hover:text-white"
          >
            View more samples
          </Link>
        </div>
      </div>
    </section>
  )
}
