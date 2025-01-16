"use client"

import React , { useState } from "react"
import { Building2, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger , DropdownMenuContent , DropdownMenuItem } from "./ui/dropdown-menu"

const NAV_LINKS = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Services",
        href: "/#services",
    },
    {
        name: "Pricing",
        href: "/#pricing",
    },
    {
        name: "Contact",
        href: "/#contact",
    },
]

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="w-full  px-2">
        <div className="flex h-16  w-full items-center justify-between">
          <div className="flex items-center mr-5">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold">Intersphere</span>
            </Link>
          </div>

        {/* THIS WILL BE NAVBAR IN LARGE SCREENS  */}
          <nav className="hidden md:flex md:flex-1 overflow-x-auto justify-center ml-auto">
            <ul className="flex items-center ml-auto space-x-8 mr-10">
                {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-sm font-medium transition-colors hover:text-black">{link.name}</Link>
                    </li>
                ))}
            </ul>
          </nav>

          {/* THIS WILL BE NAVBAR IN SMALL SCREENS , will need a dropdown menu for the links  */}

          <div className="flex md:hidden ml-auto">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger>
                <MenuIcon className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {NAV_LINKS.map((link) => (
                    <DropdownMenuItem key={link.name} onClick={() => setIsOpen(false)}>
                        <Link className="w-full h-full" href={link.href}>{link.name}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center">
            {/* Placeholder for potential future elements like theme switcher */}
          </div>
        </div>
      </div>
    </header>
  )
}
