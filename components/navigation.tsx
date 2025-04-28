import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-purple-600">SBA Grants</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-all duration-300 hover:text-purple-600 hover:translate-y-[-2px]"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium transition-all duration-300 hover:text-purple-600 hover:translate-y-[-2px]"
          >
            About Us
          </Link>
          <Link
            href="/#eligibility"
            className="text-sm font-medium transition-all duration-300 hover:text-purple-600 hover:translate-y-[-2px]"
          >
            Eligibility
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/register" passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
