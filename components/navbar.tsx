"use client"

import * as React from "react"
import { Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold">Intersphere</span>
            </Link>
          </div>

          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-black"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-black"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-black"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            {/* Placeholder for potential future elements like theme switcher */}
          </div>
        </div>
      </div>
    </header>
  )
}
