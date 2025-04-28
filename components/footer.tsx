import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600">TGO</h3>
            <p className="text-sm text-gray-500">
              Providing financial support to individuals and organizations since 2010.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-500 hover:text-gray-900">
                  Apply for Grant
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
