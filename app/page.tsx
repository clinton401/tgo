"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const searchParams = useSearchParams()
  const aboutRef = useRef<HTMLDivElement>(null)
  const eligibilityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    // Handle hash navigation
    const hash = searchParams.get("section") || window.location.hash.replace("#", "")
    if (hash === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" })
    } else if (hash === "eligibility" && eligibilityRef.current) {
      eligibilityRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [searchParams])

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-gradient-to-r from-purple-600 to-indigo-800 py-20 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Empowering Small Businesses
                </h1>
                <p className="max-w-[600px] text-gray-100 md:text-xl">
                  SBA provides substantial grants to small businesses and entrepreneurs committed to innovation and
                  growth.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register" passHref>
                    <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                      Apply Now
                    </Button>
                  </Link>
                  <Link href="#eligibility" passHref>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-purple-300 bg-white text-purple-600 hover:bg-gray-100"
                    >
                      Check Eligibility
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1772&auto=format&fit=crop"
                  alt="Business growth and funding concept"
                  className="rounded-lg object-cover shadow-lg transition-all duration-300 hover:shadow-xl"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          ref={aboutRef}
          id="about"
          className="py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-600 sm:text-4xl md:text-5xl">About Us</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SBA was established on July 30, 1953 to provide substantial financial support to small businesses and
                entrepreneurs with innovative ideas and growth potential.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl space-y-6">
              <p className="text-gray-600">
                Founded on July 30, 1953, SBA has been at the forefront of providing financial assistance to deserving
                small businesses and entrepreneurs for over 70 years. Our mission is to identify and support projects
                that have the potential to create jobs, drive innovation, and strengthen the economy.
              </p>
              <p className="text-gray-600">
                We believe that financial constraints should not hinder great business ideas. That's why we offer grants
                starting from $100,000 to help turn these ideas into reality. Our team of experienced professionals
                carefully evaluates each application to ensure that the funds are allocated to businesses with the
                highest potential for success and impact.
              </p>
              <p className="text-gray-600">
                Over the years, we have supported hundreds of small businesses across various sectors, including
                technology, manufacturing, healthcare, and sustainable energy. Our grantees have gone on to create
                thousands of jobs and make significant contributions to their industries and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section
          ref={eligibilityRef}
          id="eligibility"
          className="bg-gray-50 py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-600 sm:text-4xl md:text-5xl">
                Who Can Apply?
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our grant program is open to small businesses and entrepreneurs who meet the following criteria:
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-purple-600">Small Businesses</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Legally registered business entity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>In operation for at least 1 year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fewer than 500 employees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Seeking funding of at least $100,000</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-purple-600">Entrepreneurs</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Must be 21 years or older</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Have a well-defined business plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Demonstrate market potential and innovation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-purple-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Seeking funding of at least $100,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/register" passHref>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Apply for a Grant
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-purple-600 sm:text-4xl md:text-5xl">
                Success Stories
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our grants have helped small businesses thrive.
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1770&auto=format&fit=crop"
                      alt="Tech Startup"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-purple-600">Tech Startup</h3>
                  <p className="text-gray-500">
                    "With SBA's support, we developed our AI platform and secured Series A funding within a year,
                    growing our team from 5 to 30 employees."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1770&auto=format&fit=crop"
                      alt="Healthcare Innovation"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-purple-600">Healthcare Innovation</h3>
                  <p className="text-gray-500">
                    "The $250,000 grant from SBA helped us bring our medical device to market, which is now used in over
                    100 hospitals nationwide."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 h-40 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1770&auto=format&fit=crop"
                      alt="Green Manufacturing"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-purple-600">Green Manufacturing</h3>
                  <p className="text-gray-500">
                    "SBA's funding was crucial in scaling our sustainable packaging solution, now used by major
                    retailers across the country."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-purple-600 py-16 text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Apply?</h2>
              <p className="text-purple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards growing your business with substantial funding.
              </p>
              <div className="mx-auto flex max-w-sm flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register" passHref className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
