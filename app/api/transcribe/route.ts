import { NextResponse } from 'next/server'

export async function POST() {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      {
        success: true,
        mode: 'manual',
        message:
          'AI transcription is temporarily unavailable. Your file will be processed manually.',
      },
      { status: 200 }
    )
  }

  // لما تضيف API بعدين، الكود هيكمل من هنا
  return NextResponse.json({ success: true })
}
