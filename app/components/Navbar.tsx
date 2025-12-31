import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="flex justify-end px-8">
        
        {/* Right side links (⅓ screen width) */}
        <div className="flex w-1/3 justify-between items-center h-16">
          
          <Link
            href="/"
            className="font-bold text-lg text-gray-900 hover:text-emerald-600"
          >
            AI Media
          </Link>

          <Link
            href="/pricing"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Pricing
          </Link>

          <Link
            href="/upload"
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700"
          >
            Upload
          </Link>

        </div>
      </nav>
    </header>
  )
}
