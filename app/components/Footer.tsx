import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">AI Media</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Professional human-made transcription services for audio & video.
              Accurate, clean, and publish-ready in Arabic & English.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services/podcast-transcription" className="hover:underline">
                  Podcast Transcription
                </Link>
              </li>
              <li>
                <Link href="/services/video-transcription" className="hover:underline">
                  Video Transcription
                </Link>
              </li>
              <li>
                <Link href="/services/interview-transcription" className="hover:underline">
                  Interview Transcription
                </Link>
              </li>
              <li>
                <Link href="/services/subtitles" className="hover:underline">
                  Subtitles (SRT / VTT)
                </Link>
              </li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold mb-4">Use Cases</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Podcasters</li>
              <li>YouTubers</li>
              <li>Journalists</li>
              <li>Researchers</li>
              <li>Agencies</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/samples" className="hover:underline">
                  Transcription Samples
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:underline font-medium">
                  Upload File
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI Media. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
